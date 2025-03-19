import { FieldError, UseFormRegister } from "react-hook-form";
import { FormProps } from "./Form";

export interface TextAreaFieldProps {
  placeholder: string;
  register: ReturnType<UseFormRegister<FormProps>>;
  error?: FieldError;
}
