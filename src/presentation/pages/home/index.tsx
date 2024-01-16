import { initFunc, productFunc } from './functions';
import ProfileWidget from './widgets/profile.';
import FormWidget from './widgets/form';
import { ScrollArea } from '@/presentation/components/shadcn/scroll-area';
import { Card } from '@/presentation/components/shadcn/card';
import { Label } from '@/presentation/components/shadcn/label';
import { EditorProvider } from '@tiptap/react';
import { extensions } from '@/presentation/components/tiptap/extension';

export default function HomePage() {
  const { navigate } = initFunc();
  const { products } = productFunc();

  return (
    <div className='flex flex-col min-h-screen justify-center items-center xl:flex-row space-y-6 xl:space-y-0 space-x-0 xl:space-x-4 p-4'>
      <div className="flex flex-col space-y-4">
        {/* Logout */}
        <ProfileWidget />

        {/* Form */}
        <FormWidget />
      </div>


      {
        // Products
        products && (
          <ScrollArea className='w-full sm:w-96 md:w-[49rem] h-[46rem] max-h-[46rem]'>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              {/* Odd */}
              <section className='grid auto-rows-min gap-4'>
                {
                  products.map(function (data, index) {
                    if (index % 2 !== 0) {
                      return (
                        <Card key={index} className='flex flex-col relative w-full p-6 py-8 font-lato space-y-6'>
                          {/* Menage */}
                          <section className='flex flex-col absolute top-0 right-0 space-y-2'>

                          </section>

                          {/* Name */}
                          <section className='flex flex-col space-y-1'>
                            <Label className='font-black' htmlFor='name'>Name</Label>
                            <p id='name' className='line-clamp-1'>{data.name}</p>
                          </section>

                          {/* Sku */}
                          <section className='flex flex-col space-y-1'>
                            <Label className='font-black' htmlFor='sku'>SKU</Label>
                            <p id='sku' className='line-clamp-1'>{data.sku}</p>
                          </section>

                          {/* Brand */}
                          <section className='flex flex-col space-y-1'>
                            <Label className='font-black' htmlFor='brand'>Brand</Label>
                            <p id='brand' className='line-clamp-1'>{data.brand}</p>
                          </section>

                          {/* Description */}
                          <section className='flex flex-col space-y-1'>
                            <Label className='font-black' htmlFor='description'>Description</Label>
                            <EditorProvider
                              editable={false}
                              extensions={extensions}
                              content={data.description}
                            >
                              <></>
                            </EditorProvider>
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
                    if (index % 2 === 0) {
                      return (
                        <Card key={index} className='flex flex-col relative w-full p-6 py-8 font-lato space-y-6'>
                          {/* Name */}
                          <section className='flex flex-col space-y-1'>
                            <Label className='font-black' htmlFor='name'>Name</Label>
                            <p id='name' className='line-clamp-1'>{data.name}</p>
                          </section>

                          {/* Sku */}
                          <section className='flex flex-col space-y-1'>
                            <Label className='font-black' htmlFor='sku'>SKU</Label>
                            <p id='sku' className='line-clamp-1'>{data.sku}</p>
                          </section>

                          {/* Brand */}
                          <section className='flex flex-col space-y-1'>
                            <Label className='font-black' htmlFor='brand'>Brand</Label>
                            <p id='brand' className='line-clamp-1'>{data.brand}</p>
                          </section>

                          {/* Description */}
                          <section className='flex flex-col space-y-1'>
                            <Label className='font-black' htmlFor='description'>Description</Label>
                            <EditorProvider
                              editable={false}
                              extensions={extensions}
                              content={data.description}
                            >
                              <></>
                            </EditorProvider>
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
      }
    </div>
  );
}

