import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  const [formValue, setFormValue] = useState({ email: "" });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validateForm(formValue));
    setSubmit(true);
  }
  const handleValidation = async (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  const validateForm = (value) => {
    let errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!value.email) {
      errors.email = "Please enter an email"
    }
    else if (!emailRegex.test(value.email)) {
      errors.email = "Please enter valid email"
    }
    return errors;
  }
  return (

    <section className="email-subscribtion">
      <motion.div className="email-label"
        initial={{ opacity: 0, translateX: -300 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: -300 }}
        transition={{ duration: 2 }}
      >
        <label htmlFor="email-input">
          Subscribe to our newsletter to receive updates about menu and enjoy
          awesome gifts!
        </label>
      </motion.div>
      {submit && Object.keys(formError).length === 0 ?
        <p className="newsletter-success">You have successfully subscribed to our newsletter!</p> :
        <motion.div
          // className="form-overflow"
          className="input-section"
          initial={{ opacity: 0, translateX: 300 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
        >
          <form onSubmit={handleSubmit}>
            <div
              className="webflow-style-input"
            >
              <input name="email" onChange={handleValidation} value={formValue.email} className="input-field" placeholder="What's your email?" />
            </div>
            <span className="fullname-error-cpage">{formError.email}</span>
            <button type="submit" className="active-button-style">
              Sign Me Up
            </button>
          </form>
        </motion.div>
      }

    </section>
  );
}

export default Newsletter;
