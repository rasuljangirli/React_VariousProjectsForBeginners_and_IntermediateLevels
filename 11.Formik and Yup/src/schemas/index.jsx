import * as yup from "yup";

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email("enter email").required("You have to enter gmail"),
  age: yup
    .number()
    .positive("Positive Number")
    .integer("integer age")
    .required("You have to enter age"),

  password: yup
    .string()
    .matches(passwordRules, {
      message:
        "Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
    })
    .required("You have to enter password"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), "Passwords do not match"])
    .required("You have to enter confirm password"),
});

export const advanceSchema = yup.object().shape({
  userName: yup
    .string()
    .min(3, "min 3 ")
    .required("You have to enter userName"),
  university: yup
    .string()
    .oneOf(["MIT", "BDU", "HARVARD", "YDU"], "Select university")
    .required("You have to enter University"),
  isAccepted: yup.boolean().oneOf([true], "Accept the terms"),
});
