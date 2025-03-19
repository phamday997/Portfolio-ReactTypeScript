import { FieldError, UseFormRegister } from "react-hook-form";
import { FormProps } from "./Form";

export interface InputFieldProps {
  type: string;
  placeholder: string;
  register: ReturnType<UseFormRegister<FormProps>>;
  error?: FieldError;
}
