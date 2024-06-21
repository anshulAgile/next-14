import { VALIDATION_MSG } from "@/_utils/constants";
import * as yup from "yup";

export const signInValidation = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .min(4, "Email must be at least 4 characters"),
  password: yup.string().required(VALIDATION_MSG.required("password")),
  // .min(8, "Password must be at least 8 characters"),
  singleColor: yup
    .object({
      label: yup.string().required(VALIDATION_MSG.select("color")),
      value: yup.string().required(VALIDATION_MSG.select("color")),
    })
    .required(),
  favoriteColors: yup
    .array()
    .of(
      yup.object().shape({
        value: yup.string().required(),
        label: yup.string().required(),
      })
    )
    .min(1, "At least one color is required")
    .required(VALIDATION_MSG.select("color")),
  birthDate: yup.date().required(VALIDATION_MSG.select("birth date")),
});
