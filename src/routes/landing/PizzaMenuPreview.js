import React from 'react'
import { motion } from "framer-motion";
//375px
import imgOne375 from '../../assets/images/menu-preview/img-one-375.jpg'
import imgTwo375 from '../../assets/images/menu-preview/img-two-375.jpg'
import imgThree375 from '../../assets/images/menu-preview/img-three-375.jpg'
import imgFour375 from '../../assets/images/menu-preview/img-four-375.jpg'
import imgFive375 from '../../assets/images/menu-preview/img-five-375.jpg'
import imgSix375 from '../../assets/images/menu-preview/img-six-375.jpg'
//700px
import imgOne700 from '../../assets/images/menu-preview/img-one-700.jpg'
import imgTwo700 from '../../assets/images/menu-preview/img-two-700.jpg'
import imgThree700 from '../../assets/images/menu-preview/img-three-700.jpg'
import imgFour700 from '../../assets/images/menu-preview/img-four-700.jpg'
import imgFive700 from '../../assets/images/menu-preview/img-five-700.jpg'
import imgSix700 from '../../assets/images/menu-preview/img-six-700.jpg'
//1440
import imgOne1440 from '../../assets/images/menu-preview/img-one-1440.jpg'
import imgTwo1440 from '../../assets/images/menu-preview/img-two-1440.jpg'
import imgThree1440 from '../../assets/images/menu-preview/img-three-1440.jpg'
import imgFour1440 from '../../assets/images/menu-preview/img-four-1440.jpg'
import imgFive1440 from '../../assets/images/menu-preview/img-five-1440.jpg'
import imgSix1440 from '../../assets/images/menu-preview/img-six-1440.jpg'
import { Link } from 'react-router-dom'
import ResetLocation from '../../helpers/ResetLocation'

const pizzaMenu = [
  {
    id: 1,
    img375: imgOne375,
    img700: imgOne700,
    img1440: imgOne1440,
    name: 'Cheese Pizza',
    price: 100.00,
    currency: '₹',
    description:
      'It should be no shocker that a classic is the statistical favorite. Cheese pizza is one of the most popular choices. It will always be a simple, unadorned masterpiece on its own.',
  },
  {
    id: 2,
    img375: imgTwo375,
    img700: imgTwo700,
    img1440: imgTwo1440,
    name: 'Veggie Pizza',
    price: 150.0,
    currency: '₹',
    description:
      'When you want to jazz up your cheese pizza with color and texture, veggies are the perfect topping. And you’re only limited by your imagination.',
  },
  {
    id: 3,
    img375: imgThree375,
    img700: imgThree700,
    img1440: imgThree1440,
    name: 'Pepperoni Pizza',
    price: 180.00,
    currency: '₹',
    description:
      'There’s a reason this is one of the most popular types of pizza. Who doesn’t love biting into a crispy, salty round of pepperoni?',
  },
  {
    id: 4,
    img375: imgFour375,
    img700: imgFour700,
    img1440: imgFour1440,
    name: 'Meat Pizza',
    price: 250.00,
    currency: '₹',
    description:
      'If pepperoni just isn’t enough, and you’re looking for a pie with a bit more heft, a meat pizza is a perfect and popular choice.',
  },
  {
    id: 5,
    img375: imgFive375,
    img700: imgFive700,
    img1440: imgFive1440,
    name: 'Margherita Pizza',
    price: 120.00,
    currency: '₹',
    description:
      'Deceptively simple, the Margherita pizza is made with basil, fresh mozzarella, and tomatoes. There’s a reason it’s an Italian staple and one of the most popular types of pizza in the country.',
  },
  {
    id: 6,
    img375: imgSix375,
    img700: imgSix700,
    img1440: imgSix1440,
    name: 'BBQ Chicken Pizza',
    price: 220.00,
    currency: '₹',
    description:
      'If you love BBQ chicken and you love pizza, why not put them together? This has long been a cult favorite of sports fans and college kids.',
  },
]

const PizzaMenuPreview = () => {
  return (

    <article className="section-4 flex-container flex-column" >

      <section className="section-4-info txt-center">
        <h2 className="pop-font txt-white">Hot Pizza Meals</h2>
        <p className="section-description">
          Pizza Fun holds the market of the pizza industry and continuously
          offers more than just a pizza. Check out our hottest menu options with
          cheese, meat, chicken and veggies!
        </p>
      </section>
      <section className="meals-grid flex-container flex-column" >
        {pizzaMenu.map((pizza, id) => (
          <motion.div
            key={id}
            className="meal-item flex-container"
            initial={{ opacity: 0, translateX: -300 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: -300 }}
            transition={{ duration: 3 }}
          >
            <img
              src={pizza.img375}
              srcSet={`${pizza.img1440} 300w, ${pizza.img700} 450w, ${pizza.img375} 375w`}
              sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
              alt={pizza.name}
            />
            <section className="meal-item-details flex-container flex-column">
              <h3 className="txt-white">{pizza.name}</h3>
              <p>{pizza.description}</p>
              <section className="meal-item-order flex-container flex-row txt-center">
                <p>
                  <span>{pizza.currency}</span>
                  {pizza.price}
                </p>
              </section>
            </section>
          </motion.div>
        ))}
      </section>
      <Link
        onClick={ResetLocation}
        to="/menu"
        className="active-button-style txt-white"
      >
        More Pizzas
      </Link>
    </article>

  )
}

export default PizzaMenuPreview;