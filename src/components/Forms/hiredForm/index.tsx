"use client";

import React from "react";
import { HireDeveloperField } from "@src/constant";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Name must contain only letters")
    .required("First Name is required"),
  lastName: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Name must contain only letters")
    .required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  jobPost: Yup.string().required("Role is required"),
  contactNumber: Yup.string()
    .matches(/^[0-9]\d{9}$/, "Phone Number must be 10 digits")
    .required("Phone Number is required"),
  message: Yup.string().required("Message is required"),
});

const HiredForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      jobPost: "",
      contactNumber: "",
      message: "",
    },
    onSubmit: async () => {},
    validationSchema: validationSchema,
    validateOnChange: true,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-4 w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5 w-full">
          <label className="text-xs font-bold text-slate-700">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-slate-200 p-3 w-full rounded-xl focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20 outline-none text-sm bg-white"
          />
          {formik.errors.firstName && formik.touched.firstName && (
            <p className="text-rose-500 text-xs">*{formik.errors.firstName}</p>
          )}
        </div>
        <div className="space-y-1.5 w-full">
          <label className="text-xs font-bold text-slate-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-slate-200 p-3 w-full rounded-xl focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20 outline-none text-sm bg-white"
          />
          {formik.errors.lastName && formik.touched.lastName && (
            <p className="text-rose-500 text-xs">*{formik.errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5 w-full">
          <label className="text-xs font-bold text-slate-700">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-slate-200 p-3 w-full rounded-xl focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20 outline-none text-sm bg-white"
          />
          {formik.errors.email && formik.touched.email && (
            <p className="text-rose-500 text-xs">*{formik.errors.email}</p>
          )}
        </div>
        <div className="space-y-1.5 w-full">
          <label className="text-xs font-bold text-slate-700">Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            placeholder="10-digit number"
            value={formik.values.contactNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-slate-200 p-3 w-full rounded-xl focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20 outline-none text-sm bg-white"
          />
          {formik.errors.contactNumber && formik.touched.contactNumber && (
            <p className="text-rose-500 text-xs">*{formik.errors.contactNumber}</p>
          )}
        </div>
      </div>

      <div className="w-full space-y-1.5">
        <label className="text-xs font-bold text-slate-700">Select Specialization / Role</label>
        <select
          name="jobPost"
          value={formik.values.jobPost}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border border-slate-200 p-3 w-full rounded-xl focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20 outline-none text-sm bg-white text-slate-800"
        >
          <option value="">-- Choose Role --</option>
          {HireDeveloperField?.map((opt, index) => (
            <option value={opt.value} key={index}>
              {opt.label}
            </option>
          ))}
        </select>
        {formik.errors.jobPost && formik.touched.jobPost && (
          <p className="text-rose-500 text-xs">*{formik.errors.jobPost}</p>
        )}
      </div>

      <div className="space-y-1.5 w-full">
        <label className="text-xs font-bold text-slate-700">Message / Requirements</label>
        <textarea
          name="message"
          rows={3}
          placeholder="Describe your requirements..."
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border border-slate-200 p-3 w-full rounded-xl focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20 outline-none text-sm bg-white"
        />
        {formik.errors.message && formik.touched.message && (
          <p className="text-rose-500 text-xs">*{formik.errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        style={{
          background: "linear-gradient(135deg, #DFB758 0%, #C59B27 50%, #9E7814 100%)",
          color: "#061527",
        }}
        className="w-full py-3.5 rounded-xl font-extrabold text-sm shadow-md hover:brightness-110 transition-all duration-200 cursor-pointer"
      >
        Submit Application
      </button>
    </form>
  );
};

export default HiredForm;