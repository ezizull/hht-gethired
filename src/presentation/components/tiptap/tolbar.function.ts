import { ProductForm } from "@/infrastructure/models/product/product.model";
import { Editor } from "@tiptap/react";
import { useEffect } from "react";

interface Props {
  editor: Editor | null,
  change?: 'product' | null,
  product?: ProductForm,
}

export function initFunc(props: Props) {
  useEffect(() => {
    if (props.change == 'product') {
      props.editor?.commands.setContent(`${props.product?.description}`);
    }

  }, [
    props.product,
  ]);
}