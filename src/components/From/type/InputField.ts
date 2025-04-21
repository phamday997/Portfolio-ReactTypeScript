import { FieldError, UseFormRegister } from "react-hook-form";
import { FormValues } from "./Form";

export interface InputFieldProps {
  type: string;
  placeholder: string;
  register: ReturnType<UseFormRegister<FormValues>>;
  error?: FieldError;
}
