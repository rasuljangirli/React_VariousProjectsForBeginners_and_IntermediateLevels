import { useField } from "formik";
import React from "react";

function CustomCheckBox({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.error ? "error-input" : ""}
        />
        <span>Accept all terms</span>
      </div>
      {meta.error && <p className="error">{meta.error}</p>}
    </>
  );
}

export default CustomCheckBox;
