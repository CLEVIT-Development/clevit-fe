import React, { useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import classNames from "classnames";
import { ContentState, EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { twMerge } from "tailwind-merge";

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
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());

  useEffect(() => {
    if (initialContent) {
      const blocksFromHtml = htmlToDraft(initialContent);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);

      setEditorState(EditorState.createWithContent(contentState));
    }
  }, [initialContent]);

  const onEditorStateChange = (state: EditorState) => {
    setEditorState(state);

    // Get the current content in raw format
    const contentState = state.getCurrentContent();
    const rawContent = convertToRaw(contentState);

    // Convert raw content to HTML
    const htmlContent = draftToHtml(rawContent);

    onContentChange(htmlContent); // Call the onContentChange with HTML content
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
          wrapperClassName={twMerge(
            classNames(
              "transition-all duration-700 border border-purple-100 rounded outline-none p-3 text-gray-100 caret-purple-100 focus:shadow-base-200 disabled:cursor-not-allowed",
              {
                ["opacity-60"]: disabled,
                ["placeholder-warning-100 text-warning-100 border-warning-100"]: hint,
                ["placeholder-error-100 border-error-100 after:text-error-100"]: error,
              }
            )
          )}
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          placeholder="Write your blog content here..."
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
