import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";
const onSubmit = async (values, action) => {
  console.log(values);
  console.log(action);

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  action.resetForm();
};

function GeneralForm() {
  const { errors, handleChange, isSubmitting, values, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <form className="form_general" onSubmit={handleSubmit}>
      <div className="form_div">
        <label>Name</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="enter gmail"
          value={values.email}
          onChange={handleChange}
          className={errors.email ? "error_input" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="form_div">
        <label>Age</label>
        <input
          type="number"
          placeholder="enter age"
          value={values.age}
          onChange={handleChange}
          id="number"
          name="age"
          className={errors.age ? "error_input" : ""}
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="form_div">
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="enter password"
          value={values.password}
          onChange={handleChange}
          className={errors.password ? "error_input" : ""}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="form_div">
        <label>Password Repetition </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="enter repeat password"
          value={values.confirmPassword}
          onChange={handleChange}
          className={errors.confirmPassword ? "error_input" : ""}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
      <Link to={"/portal"}>Portal Page</Link>
    </form>
  );
}

export default GeneralForm;
