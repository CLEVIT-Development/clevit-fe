import React, { useRef } from "react";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import { Editor } from "@tinymce/tinymce-react";

interface RichTextEditorProps {
  onContentChange: (content: string) => void;
  initialContent?: string;
  label?: string;
  disabled?: boolean;
  error?: string;
  hint?: string;
  required?: boolean;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  label,
  onContentChange,
  initialContent,
  disabled = false,
  error,
  hint,
  required,
}) => {
  const editorRef = useRef(null);

  const onEditorStateChange = (content: string) => {
    onContentChange(content);
  };

  return (
    <div className="rich-text-editor">
      <label className="w-full flex flex-col space-y-[6px]">
        {label && (
          <span
            className={twMerge(
              classNames("transition-all duration-700 text-gray-200 font-medium text-sm", {
                ["after:content-['*'] after:text-purple-100"]: required,
                ["opacity-60"]: disabled,
                ["text-warning-100"]: hint,
                ["text-error-100 after:text-error-100"]: error,
              })
            )}
          >
            {label}
          </span>
        )}

        <Editor
          ref={editorRef}
          onInit={(_evt, editor) => {
            if (initialContent) {
              editor.setContent(initialContent);
            }
          }}
          initialValue={initialContent}
          apiKey={import.meta.env.VITE_TINY_MCE_KEY}
          init={{
            height: 600,
            image_caption: true,
            toolbar:
              "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
            plugins:
              "searchreplace autolink autosave save directionality code visualblocks visualchars image link media codesample table charmap pagebreak anchor advlist lists wordcount charmap quickbars accordion",
            editimage_cors_hosts: ["picsum.photos"],
            quickbars_selection_toolbar:
              "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
            noneditable_class: "mceNonEditable",
            toolbar_mode: "sliding",
            contextmenu: "link image table",
            resize: false,
          }}
          onEditorChange={onEditorStateChange}
        />
      </label>

      <span
        className={twMerge(
          classNames(
            "transition-all duration-700 text-gray-100 text-xs font-normal h-[5px] opacity-0",
            {
              ["text-warning-100 opacity-100"]: hint,
              ["text-error-100 opacity-100"]: error,
              ["opacity-60"]: disabled,
            }
          )
        )}
      >
        {error || hint}
      </span>
    </div>
  );
};

export default RichTextEditor;
