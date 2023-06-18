import React from 'react'
import { motion } from "framer-motion";
import PizzaOne from '../../assets/images/contact-us/image-one-parallax.webp'


const ContactUsLanding = () => {
  return (
    <section className="contact-us-landing flex-container flex-row txt-white" >
      <motion.div
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 400, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <img src={PizzaOne} alt="" className="parallax company-details-image" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 600, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <img src={PizzaOne} alt="" className="parallax company-details-image-two" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 800, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <img src={PizzaOne} alt="" className="parallax company-details-image-three" />      </motion.div>
      <section className='company-details'>
        <div>
          <h2>1800-123-4567</h2>
          <p>Contact us</p>
        </div>
        <div>
          <h2>B17 Time Square Grand</h2>
          <p>Ahmedabad, Gujarat</p>
        </div>
        <div>
          <h2>Open Monday-Sunday</h2>
          <p>9:00am - 11:00pm</p>
        </div>
      </section>
    </section>
  );

}


export default ContactUsLanding;