"use client";

import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const MarkdownEditor = ({ value, onChange, placeholder }: Props) => {
  return (
    <SimpleMDE value={value} onChange={onChange} placeholder={placeholder} />
  );
};

export default MarkdownEditor;
