import { useCurrentEditor } from '@tiptap/react'
import { Button } from '../shadcn/button'

export default function TiptapToolbar() {
  const { editor } = useCurrentEditor()
  if (!editor) return null;

  return (
    <section className='grid grid-cols-3 gap-4 w-full !mb-4'>
      <Button
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