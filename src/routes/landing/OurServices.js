import React from 'react'
import Tilt from 'react-parallax-tilt';
import ImgOne from '../../assets/images/our-services/organic-food.webp'
import ImgTwo from '../../assets/images/our-services/express-delivery.webp'
import ImgThree from '../../assets/images/our-services/unforgable-taste.webp'
import { motion } from "framer-motion";

const ourServices = [
  {
    id: 1,
    img: ImgOne,
    name: 'Organic Food',
    description:
      'Pure and healthy organic food is our lifestyle. The products we consume has impact on our future and we do everything to keep the future healthy',
  },
  {
    id: 2,
    img: ImgTwo,
    name: 'Express Delivery',
    description:
      'Choose from a variety of express delivery services depending on your needs. Whether in a hurry to eat or have some plans tomorrow, we have got you covered',
  },
  {
    id: 3,
    img: ImgThree,
    name: 'Unforgetable Taste',
    description:
      'Our goal is to provide our customers with excellent service, great taste and unforgettable experiences. This will be a mind-blowing experience for your taste buds',
  },
]

const OurServices = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <article className="section-3-container" >
        <section>
          <h2 className="pop-font">Our Services</h2>
          <p className="pop-font section-description">
            Pizza Fun provides services across all states - various foods and
            drinks, you choose! What makes us special is our teams of
            professionals with extensive knowledge of all cuisine that we have to
            offer.
          </p>
        </section>
        <section className="services-grid  flex-container flex-column">
          {ourServices.map((service) => (
            <Tilt key={service.id}>
              <section className="service-list flex-container flex-column">
                <img
                  width="50"
                  height="50"
                  className="service-img"
                  src={service.img}
                  alt=""
                  aria-hidden="true"
                />

                <section>
                  <h3 className="pop-font">{service.name}</h3>
                  <p>{service.description}</p>
                </section>
              </section>
            </Tilt>
          ))}
        </section>
      </article>
    </motion.div>
  )
}

export default OurServices;