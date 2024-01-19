import { ScrollArea } from '@/presentation/components/shadcn/scroll-area';
import { Card } from '@/presentation/components/shadcn/card';
import { Label } from '@/presentation/components/shadcn/label';
import { Button } from '@/presentation/components/shadcn/button';
import { Pencil, Trash2 } from 'lucide-react';
import { ProductData } from "@/infrastructure/models/product/product.model";
import parse from 'html-react-parser';

interface Props {
  products: ProductData[],
  deleteProduct: (selected: ProductData) => void,
  updateProduct: (selected: ProductData) => void,
}

export default function ProductWidget({ products, deleteProduct, updateProduct }: Props) {

  return (
    products.length > 0 && (
      <ScrollArea className='w-full sm:w-96 pr-[1rem] md:w-[50rem] h-[46rem]'>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {/* Odd */}
          <section className='grid auto-rows-min gap-4'>
            {
              products.map(function (data, index) {
                if (index % 2 === 0) {
                  return (
                    <Card key={index} className='flex flex-col relative w-full p-6 py-8 font-lato'>
                      {/* Menage */}
                      <section className='flex flex-col absolute top-0 right-0 p-4 space-y-2'>
                        <Button
                          type="button"
                          size="sm"
                          variant="secondary"
                          onClick={() => updateProduct(data)}
                          className="bg-blue-400 size-8 p-2">
                          <Pencil
                            className="size-full"
                            aria-hidden="true"
                          />
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          onClick={() => deleteProduct(data)}
                          className="bg-red-400 size-8 p-2">
                          <Trash2
                            className="size-full"
                            aria-hidden="true"
                          />
                        </Button>
                      </section>

                      {/* Name */}
                      <section className='flex flex-col space-y-1 mb-6'>
                        <Label className='font-black' htmlFor='name'>Name</Label>
                        <p id='name' className='line-clamp-1'>{data.name}</p>
                      </section>

                      {/* Sku */}
                      <section className='flex flex-col space-y-1 mb-6'>
                        <Label className='font-black' htmlFor='sku'>SKU</Label>
                        <p id='sku' className='line-clamp-1'>{data.sku}</p>
                      </section>

                      {/* Brand */}
                      <section className='flex flex-col space-y-1 mb-6'>
                        <Label className='font-black' htmlFor='brand'>Brand</Label>
                        <p id='brand' className='line-clamp-1'>{data.brand}</p>
                      </section>

                      {/* Description */}
                      <section className='flex flex-col space-y-1'>
                        <Label className='font-black' htmlFor='description'>Description</Label>
                        {parse(data.description)}
                      </section>
                    </Card>
                  )
                }
              })
            }
          </section>

          {/* Even */}
          <section className='grid auto-rows-min gap-4'>
            {
              products.map(function (data, index) {
                if (index % 2 !== 0) {
                  return (
                    <Card key={index} className='flex flex-col relative w-full p-6 py-8 font-lato'>
                      {/* Menage */}
                      <section className='flex flex-col absolute top-0 right-0 p-4 space-y-2'>
                        <Button
                          type="button"
                          size="sm"
                          variant="secondary"
                          onClick={() => updateProduct(data)}
                          className="bg-blue-400 size-8 p-2">
                          <Pencil
                            className="size-full"
                            aria-hidden="true"
                          />
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          onClick={() => deleteProduct(data)}
                          className="bg-red-400 size-8 p-2">
                          <Trash2
                            className="size-full"
                            aria-hidden="true"
                          />
                        </Button>
                      </section>

                      {/* Name */}
                      <section className='flex flex-col space-y-1 mb-6'>
                        <Label className='font-black' htmlFor='name'>Name</Label>
                        <p id='name' className='line-clamp-1'>{data.name}</p>
                      </section>

                      {/* Sku */}
                      <section className='flex flex-col space-y-1 mb-6'>
                        <Label className='font-black' htmlFor='sku'>SKU</Label>
                        <p id='sku' className='line-clamp-1'>{data.sku}</p>
                      </section>

                      {/* Brand */}
                      <section className='flex flex-col space-y-1 mb-6'>
                        <Label className='font-black' htmlFor='brand'>Brand</Label>
                        <p id='brand' className='line-clamp-1'>{data.brand}</p>
                      </section>

                      {/* Description */}
                      <section className='flex flex-col space-y-1'>
                        <Label className='font-black' htmlFor='description'>Description</Label>
                        {parse(data.description)}
                      </section>
                    </Card>
                  )
                }
              })
            }
          </section>
        </div>
      </ScrollArea>
    )
  )
}