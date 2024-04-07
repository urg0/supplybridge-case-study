import React from "react";
import { useNavigate } from "react-router-dom";

import { useQueryClient } from "@tanstack/react-query";
import { createPost } from "@utils/api.service";

import { useFormik } from "formik";
import * as Yup from "yup";

import toast, { Toaster } from "react-hot-toast";
import { TOASTER_DEFAULT_STYLES } from "@root/constants/toasterDefaultStyles";

import Modal from "@components/ui/modal/Modal";
import FormikInput from "@components/formik-input/FormikInput";
import Button from "@components/ui/button/Button";

import { getIconPath } from "@utils/navigation.service";
import { ReactSVG } from "react-svg";

import Memoji from "@assets/images/memoji.png";

import "@components/add-post-modal/AddPostModal.scss";

const AddIcon = getIconPath("new-post");

const AddPostModal = ({ isOpen, onClose }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullname: "",
      title: "",
      text: "",
      image: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required("Fullname is required"),
      title: Yup.string().required("Title is required"),
      text: Yup.string().required("Text is required"),
      image: Yup.string().url("Invalid URL").required("Image URL is required"),
    }),
    onSubmit: async (values) => {
      try {
        const postData = {
          fullName: values.fullname,
          title: values.title,
          text: values.text,
          image: values.image,
          avatar: Memoji,
          job: "Front-end Developer",
          isBookmarked: false,
          date: new Date().toISOString(),
        };

        const response = await createPost(postData);

        const postID = response.id;

        queryClient.invalidateQueries({
          queryKey: ["news"],
          refetchType: "all",
        });
        onClose();
        formik.resetForm();
        navigate(`/blog-post/${postID}`);
        toast.success("Post succesfuly added.", TOASTER_DEFAULT_STYLES);
      } catch (error) {
        toast.error("An error occurred while creating the post:", error);
      }
    },
  });

  const onCloseModal = () => {
    formik.resetForm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal}>
      <div className="add-post-modal">
        <div className="icon-wrapper">
          <ReactSVG src={AddIcon} className="headerIcon" />
        </div>
        <h2 className="title">Add New Post</h2>
        <form onSubmit={formik.handleSubmit} className="form">
          <FormikInput
            label="Fullname"
            name="fullname"
            formik={formik}
            type="text"
            placeholder="Ulaş Rotinda Güler"
          />
          <FormikInput label="Title" name="title" formik={formik} type="text" />
          <FormikInput label="Text" name="text" formik={formik} type="text" />
          <FormikInput
            label="Image URL"
            name="image"
            formik={formik}
            type="image"
            placeholder="Your image"
          />
          <Button
            label="Create new post"
            className="medium orange"
            disabled={!formik.isValid}
            type="submit"
          />
        </form>
      </div>
    </Modal>
  );
};

export default AddPostModal;
