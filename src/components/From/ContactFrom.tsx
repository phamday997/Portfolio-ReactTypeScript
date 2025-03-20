import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDebouncedCallback } from "use-debounce";
import { InputField, TextAreaField } from "./Field";
import { FormProps } from "./type";
import { Button } from "../Button";

const schema = yup
  .object({
    fullName: yup.string().required("Please fill out this field."),
    email: yup
      .string()
      .email("Invalid email format.")
      .required("Please fill out this field."),
    message: yup
      .string()
      .test("wordCount", "Message must be less than 50 words.", (value) => {
        if (!value) return true; // Allow empty values (optional)
        return value.trim().split(/\s+/).length < 50;
      })
      .nullable(), // Ensures `null` or `undefined` values are accepted
  })
  .required();

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const clearSuccessMessage = useDebouncedCallback(() => {
    setSuccessMessage(null);
  }, 6000);

  const onSubmit = async (data: FormProps) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSuccessMessage("Message Sent Successfully!");
    reset();
    clearSuccessMessage();
    console.log(data);
  };

  return (
    <div className="contact-form-wrapper">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-contact form-control-pd"
      >
        <InputField
          type="text"
          placeholder="Full Name*"
          register={register("fullName")}
          error={errors.fullName}
        />

        <InputField
          type="email"
          placeholder="Email*"
          register={register("email")}
          error={errors.email}
        />

        <TextAreaField
          placeholder="Message (Optional)"
          register={register("message")}
          error={errors.message}
        />

        <Button typeEle="button" className="secondary" type="submit">
          Submit Message
          {isSubmitting && (
            <div className="loader-wrapper">
              <div
                className="loader-icon spinner-border text-light"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </Button>
      </form>
      {successMessage && (
        <p className="message message-success text-center mt-3">
          {successMessage}
        </p>
      )}
    </div>
  );
};
