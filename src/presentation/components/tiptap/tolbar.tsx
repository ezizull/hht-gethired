import { useCurrentEditor } from '@tiptap/react'
import { Button } from '../shadcn/button'
import { ProductForm } from '@/infrastructure/models/product/product.model';
import { initFunc } from './tolbar.function';

interface Props {
  change?: 'product' | null,
  product?: ProductForm,
}

export default function TiptapToolbar(props: Props) {
  const { editor } = useCurrentEditor()
  if (!editor) return null;

  initFunc({
    editor,
    change: props.change,
    product: props.product,
  });

  return (
    <section className='grid grid-cols-1 2xs:grid-cols-3 gap-4 w-full !mb-4'>
      <Button
        type='button'
        variant={'outline'}
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'bg-foreground/5' : ''}
      >
        bold
      </Button>
      <Button
        type='button'
        variant={'outline'}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'bg-foreground/5' : ''}
      >
        italic
      </Button>
      <Button
        type='button'
        variant={'outline'}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive('strike') ? 'bg-foreground/5' : ''}
      >
        strike
      </Button>
    </section>
  )
}