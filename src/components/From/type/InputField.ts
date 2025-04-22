import { FieldError, UseFormRegister } from "react-hook-form";
import { FormValueContact } from "./Form";

export interface InputFieldProps {
  type: string;
  placeholder: string;
  register: ReturnType<UseFormRegister<FormValueContact>>;
  error?: FieldError;
}
