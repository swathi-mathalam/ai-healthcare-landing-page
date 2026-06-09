import * as Yup from "yup";

export const contactSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .required("Full Name is required"),

  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),

  phone: Yup.string()
  .matches(/^[0-9]+$/, "Only digits are allowed")
  .min(10, "Phone must be 10 digits")
  .max(10, "Phone must be 10 digits")
  .required("Phone Number is required"),

  subject: Yup.string()
    .min(5, "Subject is too short")
    .nullable(),

  department: Yup.string()
    .required("Department is required"),

  contactMethod: Yup.string()
    .oneOf(["email", "phone"], "Select valid method")
    .required("Contact Method is required"),

  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});