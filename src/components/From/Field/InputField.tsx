import React from "react";
import { InputFieldProps } from "../type";

export const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  register,
  error,
}) => (
  <div className="input-control-pd">
    <input
      type={type}
      placeholder={placeholder}
      {...register}
      className={error ? "error" : ""}
    />
    {error && <p className="message messages-error">{error.message}</p>}
  </div>
);
