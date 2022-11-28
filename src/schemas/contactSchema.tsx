import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().min(3, "Name must be at least 3 characters").max(30, "To many characters").required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  message: yup.string().max(300, "To many characters").required("Required"),
});
