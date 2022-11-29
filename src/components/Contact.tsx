import { HiOutlineMail } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { contactSchema } from "../schemas/contactSchema";

const Contact = () => {
  const [nameAnim, setNameAnim] = useState(false);
  const [emailAnim, setEmailAnim] = useState(false);
  const [messageAnim, setMessageAnim] = useState(false);

  const notify = () => toast.success('E-mail sent ', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  type Values = {
    name: string;
    email: string;
    message: string;
  };

  const onSubmit = (values: Values, { resetForm }: any) => {
      fetch("https://formsubmit.co/ajax/zietal.adrian@gmail.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.message
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    notify()
    resetForm({
      values: {
        name: "",
        email: "",
        message: "",
      },
    });
    setNameAnim(false)
    setEmailAnim(false)
    setMessageAnim(false)
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit,
  });

  const onBlurName = (e: any) => {
    !values.name && setNameAnim(false);
    handleBlur(e);
  };
  const onBlurEmail = (e: any) => {
    !values.email && setEmailAnim(false);
    handleBlur(e);
  };
  const onBlurMessage = (e: any) => {
    !values.message && setMessageAnim(false);
    handleBlur(e);
  };

  return (
    <section className="h-[600px] w-full bg-[#0f141b] pt-10">
      <form
        target="_blank"
        onSubmit={handleSubmit}
        autoComplete="off"
        className=" sm:w-[500px] h-[450px] mx-auto md:ml-[270px] lg:ml-[470px] xl:ml-[665px] 2xl:ml-[700px] flex flex-col items-end gap-6 pt-16 text-black relative"
      >
        <div className="absolute top-0 right-0 w-[900px] h-[450px] rounded-[50%] bg-blue-900/60 border-b-2 border-solid border-blue-400/90"></div>
        <div className="relative">
          <div className="absolute top-[11px] left-2">
            <BsPerson
              color={nameAnim && !values.name ? "#0a9dff" : "rgb(11,24,48,0.5)"}
              size={20}
              strokeWidth="0.4"
              className={`transition-all ${nameAnim && "animate-jump"}`}
            />
          </div>
          <div
            className={`absolute transition-all pointer-events-none ${
              nameAnim
                ? "-top-[22px] left-0 font-medium text-sm text-white"
                : "top-[11px] left-10 text-gray-500"
            }`}
          >
            <label htmlFor="name">Name{nameAnim && ":"}</label>
          </div>
          <input
            onFocus={() => setNameAnim(true)}
            onBlur={onBlurName}
            onChange={handleChange}
            value={values.name}
            type="text"
            id="name"
            name="name"
            required
            className={`w-[300px] sm:w-[400px] mr-10 pl-[40px] pt-2 mb-[1px] pb-[6px] rounded outline-none border-solid border-2 ${
              errors.name && touched.name ? " border-red-500" : ""
            }`}
          />
          {errors.name && touched.name && (
            <p className="absolute text-red-500 text-sm max-h-0 right-[42px]">
              {errors.name}
            </p>
          )}
        </div>
        <div className="relative mt-[1px]">
          <div className="absolute top-[12px] left-2">
            <HiOutlineMail
              color={
                emailAnim && !values.email ? "#0a9dff" : "rgb(11,24,48,0.5)"
              }
              size={20}
              className={`transition-all ${emailAnim && "animate-jump"}`}
            />
          </div>
          <div
            className={`absolute transition-all pointer-events-none ${
              emailAnim
                ? "-top-[22px] left-0 font-medium text-sm text-white"
                : "top-[11px] left-10 text-gray-500"
            }`}
          >
            <label htmlFor="email">Email address{emailAnim && ":"}</label>
          </div>
          <input
            onFocus={() => setEmailAnim(true)}
            onBlur={onBlurEmail}
            onChange={handleChange}
            value={values.email}
            type="email"
            id="email"
            name="email"
            required
            className={`w-[300px] sm:w-[400px] mr-10 pl-[40px] pt-2 mb-[1px] pb-[6px] rounded outline-none border-solid border-2 ${
              errors.email && touched.email ? " border-red-500" : ""
            }`}
          />
          {errors.email && touched.email && (
            <p className=" absolute text-red-500 text-sm max-h-0 right-[42px]">
              {errors.email}
            </p>
          )}
        </div>
        <div className="relative mt-[1px]">
          <div className="absolute top-[13px] left-2">
            <BiMessageDetail
              color={
                messageAnim && !values.message ? "#0a9dff" : "rgb(11,24,48,0.5)"
              }
              size={20}
              className={`transition-all ${messageAnim && "animate-jump"}`}
            />
          </div>
          <div
            className={`absolute transition-all pointer-events-none ${
              messageAnim
                ? "-top-[22px] left-0 font-medium text-sm text-white"
                : "top-[11px] left-10 text-gray-500"
            }`}
          >
            <label htmlFor="message">Message{messageAnim && ":"}</label>
          </div>
          <textarea
            onFocus={() => setMessageAnim(true)}
            onBlur={onBlurMessage}
            onChange={handleChange}
            value={values.message}
            id="message"
            name="message"
            required
            className={`w-[300px] sm:w-[400px] h-[100px] mr-10 pl-[40px] py-2 rounded outline-none resize-none border-solid border-2 ${
              errors.message && touched.message ? " border-red-500" : ""
            }`}
          />
          {errors.message && touched.message && (
            <p className="absolute text-red-500 text-sm max-h-0 right-[42px]">
              {errors.message}
            </p>
          )}
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          name="submit"
          className={`absolute bottom-[80px] right-[105px] sm:right-[160px] py-1 px-14 text-center font-medium rounded-2xl text-gray-100 bg-[#a11b8a] transition-all hover:bg-[#B31E9A] hover:scale-[103%] outline-none focus:outline-blue-400/70 focus:outline-solid focus:outline-2 focus:outline-offset-0 ${
            isSubmitting && "opacity-40"
          }`}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Contact;
