import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

const TextAreaComponent = ({ asset, handleChange }) => {
  return (
    <div className="editor">
      <label>{asset.uid} </label>
      <div>
        <CKEditor
          editor={ClassicEditor}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default TextAreaComponent;
