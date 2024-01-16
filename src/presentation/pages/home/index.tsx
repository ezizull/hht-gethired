import { Card } from '@/presentation/components/shadcn/card';
import { initFunc, productFunc } from './functions';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/presentation/components/shadcn/input';
import { ConstMessage } from '@/utils/constants/message.consts';
import { Button } from '@/presentation/components/shadcn/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/presentation/components/shadcn/dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';


export default function HomePage() {
  const { navigate } = initFunc();
  const { product, setProduct, submitForm } = productFunc();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
      <div className="flex flex-col-reverse xl:flex-row space-y-reverse space-y-6 xl:space-y-0 space-x-0 xl:space-x-4">
        <div className="flex flex-col space-y-4">
          <Card className='2xs:w-96 p-6 py-8 font-lato'>
            <h1 className='text-lg font-bold text-center mb-10'>Product</h1>

            <form onSubmit={(event) => submitForm(event)}>
              {/* Name */}
              <section className='space-y-1 mb-4'>
                <Label htmlFor='name'>Name</Label>
                <Input
                  required
                  id='name'
                  placeholder='product name'
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
                  product.isNameError &&
                  <span className='text-sm text-red-400'>
                    {product.nameError}
                  </span>
                }
              </section>

              {/* Brand */}
              <section className='space-y-1 mb-4'>
                <Label htmlFor='brand'>Brand</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className='w-full' variant="secondary">
                      {product.brand ? product.brand : 'choose brand'}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='5xs:w-[7rem] 4xs:w-[9rem] 3xs:w-[11rem] 2xs:w-[21rem]'>
                    {
                      Object.values(['Brand 1', 'Brand 2', 'Brand 3']).map((brandOption) => (
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
                  product.isNameError &&
                  <span className='text-sm text-red-400'>
                    {product.nameError}
                  </span>
                }
              </section>

              {/* Editor */}
              <section className=' space-y-1 mb-8'>

              </section>

              {/* Submit */}
              <Button
                type="submit"
                className='w-full'
                size="sm"
                onClick={() => submitForm()}>
                Create
              </Button>
            </form>

          </Card>
        </div>
      </div>
    </div>
  );
}

