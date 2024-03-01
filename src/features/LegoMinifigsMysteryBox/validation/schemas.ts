import { FORM_FIELDS } from "@/features/LegoMinifigsMysteryBox/consts/consts";
import * as yup from "yup";

export const schemaByStep = new Map<string, yup.AnyObjectSchema>([
  ["1", yup.object()],
  [
    "2",
    yup.object({ [FORM_FIELDS.MINIFIG]: yup.string().required() }).required(),
  ],
  [
    "3",
    yup.object({
      [FORM_FIELDS.FIRST_NAME]: yup.string().required("First name is required"),
      [FORM_FIELDS.LAST_NAME]: yup.string().required("Surname is required"),
      [FORM_FIELDS.PHONE]: yup.string().required("Phone number is required"),
      [FORM_FIELDS.EMAIL]: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
      [FORM_FIELDS.DOB]: yup.date().required("Date of birth is required"),
      [FORM_FIELDS.ADDRESS]: yup.string().required("Address is required"),
      [FORM_FIELDS.CITY]: yup.string().required("City is required"),
      [FORM_FIELDS.STATE]: yup.string().required("State is required"),
      [FORM_FIELDS.ZIP_CODE]: yup.string().required("Postal code is required"),
    }),
  ],
]);
