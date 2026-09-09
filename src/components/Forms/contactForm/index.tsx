"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Send, CheckCircle2, Phone, Sparkles } from "lucide-react";

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Name must contain only letters")
    .required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  contactNumber: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number")
    .required("Phone Number is required"),
  service: Yup.string().required("Please select a service"),
  loanAmount: Yup.string(),
  message: Yup.string().required("Please tell us a brief requirement"),
});

export default function ContactForm() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      contactNumber: "",
      service: "Business Loan",
      loanAmount: "₹25 Lakh - ₹1 Crore",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // Form submitted successfully
      setSubmitted(true);
    },
  });

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-luxury text-center space-y-5">
        <div className="w-16 h-16 rounded-full bg-green-500/15 text-green-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold font-display text-navy-950">
          Inquiry Received Successfully!
        </h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
          Thank you, <strong>{formik.values.fullName}</strong>. Our senior loan and real estate advisor will connect with you on <strong>{formik.values.contactNumber}</strong> within 30 minutes.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            formik.resetForm();
          }}
          className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-950 text-xs font-bold transition"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-luxury space-y-5"
    >
      <div className="border-b border-slate-100 pb-4 mb-2">
        <h3 className="text-xl sm:text-2xl font-bold font-display text-navy-950">
          Request a Consultation
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Zero-obligation credit verification & instant callback.
        </p>
      </div>

      {/* Full Name */}
      <div className="space-y-1.5">
        <label className="text-xs sm:text-sm font-semibold text-navy-950">
          Full Name *
        </label>
        <input
          type="text"
          name="fullName"
          placeholder="e.g. Ramesh Kumar"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none text-sm transition"
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <p className="text-red-500 text-xs">{formik.errors.fullName}</p>
        )}
      </div>

      {/* Contact Number & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm font-semibold text-navy-950">
            Phone Number *
          </label>
          <input
            type="tel"
            name="contactNumber"
            placeholder="10-digit mobile number"
            value={formik.values.contactNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none text-sm transition"
          />
          {formik.touched.contactNumber && formik.errors.contactNumber && (
            <p className="text-red-500 text-xs">{formik.errors.contactNumber}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm font-semibold text-navy-950">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none text-sm transition"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-xs">{formik.errors.email}</p>
          )}
        </div>
      </div>

      {/* Service Selection & Loan Amount */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm font-semibold text-navy-950">
            Service Required *
          </label>
          <select
            name="service"
            value={formik.values.service}
            onChange={formik.handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none text-sm transition bg-white"
          >
            <option value="Business Loan">Business Loan / MSME</option>
            <option value="Home Loan">Home Loan (New / Resale)</option>
            <option value="Loan Against Property">Loan Against Property (LAP)</option>
            <option value="Machinery Loan">Machinery & Equipment Loan</option>
            <option value="Trade License">Municipal Trade License</option>
            <option value="GST Registration">GST Registration / Allotment</option>
            <option value="ITR Filing">ITR Tax Filing / Audit</option>
            <option value="Real Estate">Real Estate Advisory / Plots</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm font-semibold text-navy-950">
            Estimated Amount
          </label>
          <select
            name="loanAmount"
            value={formik.values.loanAmount}
            onChange={formik.handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none text-sm transition bg-white"
          >
            <option value="Below ₹10 Lakh">Below ₹10 Lakh</option>
            <option value="₹10 Lakh - ₹25 Lakh">₹10 Lakh - ₹25 Lakh</option>
            <option value="₹25 Lakh - ₹1 Crore">₹25 Lakh - ₹1 Crore</option>
            <option value="₹1 Crore - ₹5 Crore">₹1 Crore - ₹5 Crore</option>
            <option value="Above ₹5 Crore">Above ₹5 Crore</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label className="text-xs sm:text-sm font-semibold text-navy-950">
          Brief Requirements or Notes *
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="e.g. Need ₹50L working capital for expanding pharma manufacturing unit..."
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none text-sm transition resize-none"
        />
        {formik.touched.message && formik.errors.message && (
          <p className="text-red-500 text-xs">{formik.errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-4 rounded-xl font-bold text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:brightness-110 shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2"
      >
        <span>Submit Consultation Request</span>
        <Send className="w-4 h-4" />
      </button>

      <p className="text-center text-[11px] text-slate-400">
        🔒 Your personal data is confidential and protected under privacy policies.
      </p>
    </form>
  );
}