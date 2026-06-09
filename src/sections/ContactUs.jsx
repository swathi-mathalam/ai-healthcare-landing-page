import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@mui/material";
import "./ContactUs.scss";
import { contactSchema } from "../validation/contactSchema";

// ✅ Move static data outside component (avoids hardcoding inside JSX)
const departments = [
  { value: "general_inquiry", label: "General Inquiry" },
  { value: "appointment_booking", label: "Appointment Booking" },
  { value: "telemedicine_support", label: "Telemedicine Support" },
  { value: "billing_payments", label: "Billing & Payments" },
  { value: "technical_support", label: "Technical Support" },
];

const contactMethods = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
];

const ContactUs = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    alert("Form submitted successfully!");
    resetForm();
  };

  const renderInput = (label, name, type = "text", placeholder = "") => (
    <div className="form-group">
      <label>
        {label} <span className="required">*</span>
      </label>

      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className="input"
      />

      <ErrorMessage name={name} component="p" className="error" />
    </div>
  );

  return (
    <section className="contact" id="contact">
      <div className="contact__container">

        <h2 className="contact__title">Contact Us</h2>

        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phone: "",
            subject: "",
            department: "",
            contactMethod: "",
            message: "",
          }}
          validationSchema={contactSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="contact__form">

              {renderInput("Full Name", "fullName", "text", "Enter your full name")}
              {renderInput("Email Address", "email", "email", "Enter your email")}
              {renderInput("Phone Number", "phone", "tel", "Enter your phone number")}
              {renderInput("Subject", "subject", "text", "Enter subject")}

              {/* Department */}
              <div className="form-group">
                <label>
                  Department <span className="required">*</span>
                </label>

                <Field as="select" name="department" className="input">
                  <option value="">Select Department</option>
                  {departments.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </Field>

                <ErrorMessage name="department" component="p" className="error" />
              </div>

              {/* Contact Method */}
              <div className="form-group">
                <label>
                  Preferred Contact Method <span className="required">*</span>
                </label>

                <Field as="select" name="contactMethod" className="input">
                  <option value="">Select Contact Method</option>
                  {contactMethods.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </Field>

                <ErrorMessage name="contactMethod" component="p" className="error" />
              </div>

              {/* Message */}
              <div className="form-group">
                <label>
                  Message <span className="required">*</span>
                </label>

                <Field
                  as="textarea"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="input"
                />

                <ErrorMessage name="message" component="p" className="error" />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="submit-btn"
                fullWidth
              >
                Send Message
              </Button>

            </Form>
          )}
        </Formik>

      </div>
    </section>
  );
};

export default ContactUs;