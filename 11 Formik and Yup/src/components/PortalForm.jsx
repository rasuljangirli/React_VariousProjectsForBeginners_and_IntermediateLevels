import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "../customComponents/CustomInput";
import { advanceSchema } from "../schemas";
import CustomSelect from "../customComponents/CustomSelect";
import CustomCheckBox from "../customComponents/CustomCheckBox";
import { Link } from "react-router-dom";
const onSubmit = async (values, action) => {
  console.log(values);
  console.log(action);

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  action.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ userName: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advanceSchema}
      >
        {({ isSubmitting }) => (
          <Form className="form_div">
            <CustomInput
              label="Enter UserName"
              name="userName"
              type="text"
              placeholder="userName"
            />

            <CustomSelect
              label="Select University"
              name="university"
              type="text"
              placeholder="University"
            >
              <option value="">Select University</option>
              <option value="MIT">MIT</option>
              <option value="BDU">BDU</option>
              <option value="HARVARD">Harvard</option>
              <option value="YDU">YDU</option>
            </CustomSelect>

            <CustomCheckBox name="isAccepted" type="checkbox" />
            <button disabled={isSubmitting}>Save</button>
            <Link to={"/"}>Home Page</Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
