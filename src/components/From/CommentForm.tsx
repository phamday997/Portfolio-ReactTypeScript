import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CommentItem } from "../BlogList/type";
import { addCommentToPost } from "../../data/googleSheet/addCommentToPost";
import { FormValueComments } from "./type";
import { InputField, TextAreaField } from "./Field";

interface CommentFormProps {
  sheetWebAppUrl: string;
  rowIndex: number;
  onCommentPosted?: () => void;
  replyTo?: string;
}

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup
    .string()
    .min(5, "Comment must be at least 5 characters")
    .required("Comment is required"),
});

export const CommentForm: React.FC<CommentFormProps> = ({
  sheetWebAppUrl,
  rowIndex,
  onCommentPosted,
  replyTo,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValueComments>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormValueComments) => {
    const newComment: CommentItem = {
      fullName: data.fullName,
      email: data.email,
      message: data?.message ?? "",
      date: new Date().toISOString().split("T")[0],
    };

    await addCommentToPost({ sheetWebAppUrl, rowIndex, newComment });
    reset();
    if (onCommentPosted) onCommentPosted();
    console.log(" Comment submitted:", newComment);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        background: "#071C85",
        padding: 20,
        borderRadius: 10,
        color: "#fff",
      }}
    >
      <h3>Leave a Reply {replyTo ? `to ${replyTo}` : ""}</h3>

      <InputField
        type="text"
        placeholder="Full Name"
        register={register("fullName")}
        error={errors.fullName}
      />

      <InputField
        type="email"
        placeholder="Email Address"
        register={register("email")}
        error={errors.email}
      />

      <TextAreaField
        placeholder="Message"
        register={register("message")}
        error={errors.message}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          background: "#FF4A3A",
          color: "white",
          padding: "10px 20px",
          borderRadius: 20,
          cursor: "pointer",
          opacity: isSubmitting ? 0.6 : 1,
          pointerEvents: isSubmitting ? "none" : "unset",
        }}
      >
        {isSubmitting ? "Posting..." : "Post A Comment"}
      </button>
    </form>
  );
};
