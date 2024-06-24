import { useField } from "formik";
import React from "react";

function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor="">{label}</label>
      <select
        {...field}
        {...props}
        className={meta.error ? "error-input" : ""}
      />
      {meta.error && <p className="error">{meta.error}</p>}
    </>
  );
}

export default CustomSelect;
