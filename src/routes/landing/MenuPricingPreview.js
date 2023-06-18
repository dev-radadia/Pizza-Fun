import React from 'react'
import { Link } from 'react-router-dom'
import imgOne375 from '../../assets/images/pricings/img-one-375.jpg'
import imgTwo375 from '../../assets/images/pricings/img-two-375.jpg'
import imgThree375 from '../../assets/images/pricings/img-three-375.jpg'
import imgFour375 from '../../assets/images/pricings/img-four-375.jpg'
import imgFive375 from '../../assets/images/pricings/img-five-375.jpg'
import imgSix375 from '../../assets/images/pricings/img-six-375.jpg'
import ResetLocation from '../../helpers/ResetLocation'
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

const menuPricing = [
  {
    id: 1,
    img375: imgOne375,
    name: 'Cheese Pizza',
    price: 100.00,
    currency: '₹',
    description:
      'Mozzarella is a classic cheese for pizza. However, feel free to change things up with additional toppings.',
  },
  {
    id: 2,
    img375: imgTwo375,
    name: 'Veggie Pizza',
    price: 150.00,
    currency: '₹',
    description:
      'Crescent-roll dough, baked in a log, becomes the perch for a ranch-dressing spread and fresh, crunchy vegetables.',
  },
  {
    id: 3,
    img375: imgThree375,
    name: 'Pepperoni Pizza',
    price: 180.00,
    currency: '₹',
    description:
      'Traditional pepperoni pizza is made with pizza sauce, mozzarella cheese, and pepperoni.',
  },
  {
    id: 4,
    img375: imgFour375,
    name: 'Meat Pizza',
    price: 250.00,
    currency: '₹',
    description:
      'The meat toppings can vary, but often include cooked and crumbled Italian sausage or ground beef, bacon, pepperoni, and sometimes sliced ham.',
  },
  {
    id: 5,
    img375: imgFive375,
    name: 'Margherita Pizza',
    price: 120.00,
    currency: '₹',
    description:
      'This margherita pizza recipe tastes like a woodfired pie from Italy! It stars a flavor-popping pizza sauce and perfectly chewy pizza crust.',
  },
  {
    id: 6,
    img375: imgSix375,
    name: 'BBQ Chicken Pizza',
    price: 220.00,
    currency: '₹',
    description:
      'Spicy barbecue sauce, diced chicken, cilantro, peppers, and onion all covered with cheese and baked to bubbly goodness!',
  },
]

export default class MenuPricingPreview extends React.Component {
  render() {
    return (
      <article className="section-5 flex-container ">
        <motion.div
          initial={{ opacity: 0, translateX: -300 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0, translateX: -300 }}
          transition={{ duration: 2 }}
        >
          <h2 className="txt-center pop-font txt-white">Menu Pricing</h2>
          <p className="section-description">
            Every bite of every meal is different and special. You will never get
            bored and you will always be able to find something new and
            interesting for you. Discover every mouthwatering option we have to
            offer
          </p>
          <section className="pricing-grid flex-container flex-column">
            {menuPricing.map((menu) => (
              <Tilt key={menu.id}>
                <Link
                  onClick={ResetLocation}
                  to="/menu"
                  className="pricing-grid-item flex-container flex-row"
                >
                  <img
                    className="pricing-img"
                    alt={menu.name}
                    src={menu.img375}
                  />
                  <section className="pricing-details flex-container flex-column">
                    <section className="name-and-price flex-container flex-row txt-center">
                      <h3 className="pop-font">{menu.name}</h3>
                      <p>
                        <span>{menu.currency}</span>
                        {menu.price}
                      </p>
                    </section>
                    <p>{menu.description}</p>
                  </section>
                </Link>
              </Tilt>
            ))}
          </section>
        </motion.div>
      </article>
    )
  }
}
