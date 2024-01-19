import { Card } from '@/presentation/components/shadcn/card';;
import { Label } from '@radix-ui/react-label';
import { Input } from '@/presentation/components/shadcn/input';
import { ConstMessage } from '@/utils/constants/message.consts';
import { Button } from '@/presentation/components/shadcn/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/presentation/components/shadcn/dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Editor, EditorProvider } from '@tiptap/react';
import { extensions } from '@/presentation/components/tiptap/extension';
import { ScrollArea } from '@/presentation/components/shadcn/scroll-area';
import { ProductForm } from '@/infrastructure/models/product/product.model';
import { FormEvent } from '@/infrastructure/models/app/event';
import TiptapToolbar from '@/presentation/components/tiptap/tolbar';

interface Props {
  product: ProductForm,
  setProduct: React.Dispatch<React.SetStateAction<ProductForm>>,
  submitProduct: (event?: FormEvent | undefined) => void
}

export default function FormWidget({ product, setProduct, submitProduct }: Props) {

  return (
    <ScrollArea className='h-[37rem]'>
      <Card className='p-6 py-8 font-lato'>
        <h1 className='text-lg font-bold text-center mb-10'>Product</h1>

        <form onSubmit={(event) => submitProduct(event)}>
          {/* Name */}
          <section className='space-y-1 mb-4'>
            <Label htmlFor='name'>Name</Label>
            <Input
              required
              id='name'
              placeholder='product name'
              value={product.name}
              onChange={function (event) {
                return setProduct({
                  ...product,
                  name: event.target.value,
                  nameError: !event.target.value ? ConstMessage.name.error : "",
                  isNameError: !event.target.value,
                })
              }}
            />
            {
              product.isNameError &&
              <span className='text-sm text-red-400'>
                {product.nameError}
              </span>
            }
          </section>

          {/* Sku */}
          <section className='space-y-1 mb-4'>
            <Label htmlFor='sku'>Sku</Label>
            <Input
              required
              id='sku'
              placeholder='SKU000'
              style={{ textTransform: 'uppercase' }}
              value={product.sku}
              onChange={function (event) {
                return setProduct({
                  ...product,
                  sku: event.target.value,
                  skuError: !event.target.value ? ConstMessage.sku.error : "",
                  isSkuError: !event.target.value,
                })
              }}
            />
            {
              product.isSkuError &&
              <span className='text-sm text-red-400'>
                {product.skuError}
              </span>
            }
          </section>

          {/* Brand */}
          <section className='space-y-1 mb-4'>
            <Label htmlFor='brand'>Brand</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className='w-full bg-purple-400' variant="default">
                  {product.brand ? product.brand : 'choose brand'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-[7.5rem] 3xs:w-[calc(100vw-5rem)] 2xs:w-[21rem]'>
                {
                  ['Brand 1', 'Brand 2', 'Brand 3'].map((brandOption) => (
                    <DropdownMenuItem
                      key={brandOption}
                      onClick={function (event) {
                        return setProduct({
                          ...product,
                          brand: event.currentTarget.textContent ?? '',
                          brandError: !event.currentTarget.textContent ? ConstMessage.brand.error : "",
                          isBrandError: !event.currentTarget.textContent,
                        })
                      }}
                    >
                      {brandOption}
                    </DropdownMenuItem>
                  ))
                }
              </DropdownMenuContent>
            </DropdownMenu>
            {
              product.isBrandError &&
              <span className='text-sm text-red-400'>
                {product.brandError}
              </span>
            }
          </section>

          {/* Editor */}
          <section className='space-y-2 mb-8'>
            <Label htmlFor='description'>Description</Label>

            <section className='border-inherit border-[1px] rounded-lg p-4'>
              <EditorProvider
                autofocus
                editable={true}
                onUpdate={function (state) {
                  return setProduct({
                    ...product,
                    description: state.editor.getHTML() ?? '',
                    descriptionError: state.editor.isEmpty ? ConstMessage.description.error : "",
                    isDescriptionError: state.editor.isEmpty,
                  })
                }}
                slotBefore={<TiptapToolbar change="product" product={product} />}
                extensions={extensions}
              >
                <div className="w-full h-0.5 bg-foreground/5"></div>

                {
                  product.isDescriptionError &&
                  <span className='text-sm text-red-400'>
                    {product.descriptionError}
                  </span>
                }
              </EditorProvider>
            </section>
          </section>

          {/* Submit */}
          {
            product.method === 'create' ?
              <Button
                type="submit"
                className='w-full'
                size="sm"
                disabled={product === ProductForm}
                onClick={() => submitProduct()}>
                Create
              </Button>
              :
              <div className='flex flex-col'>
                <Button
                  type="submit"
                  className='w-full mb-4'
                  size="sm"
                  disabled={product === ProductForm}
                  onClick={() => { }}>
                  Update
                </Button>

                <Button
                  type="button"
                  variant="secondary"
                  className='bg-blue-400/5 w-full mb-4'
                  size="sm"
                  onClick={() => setProduct(ProductForm)}>
                  Cancel
                </Button>
              </div>
          }
        </form>
      </Card>
    </ScrollArea>
  )
}