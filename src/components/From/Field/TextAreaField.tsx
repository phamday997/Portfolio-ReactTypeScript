import React from "react";
import { TextAreaFieldProps } from "../type";

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  placeholder,
  register,
  error,
}) => (
  <div className="textarea-control-pd">
    <textarea
      className={error ? "error" : ""}
      placeholder={placeholder}
      {...register}
    />
    {error && <p className="message message-error">{error.message}</p>}
  </div>
);
