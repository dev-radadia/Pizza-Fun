import React from 'react'
import { motion } from "framer-motion";

const statsPreview = [
  {
    id: 1,
    img:
      'https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/ffffff/external-pizza-fast-food-vitaliy-gorbachev-lineal-vitaly-gorbachev.png',
    stats: '50+',
    name: 'Pizza Branches',
  },
  {
    id: 2,
    img:
      'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/ffffff/external-award-business-kiranshastry-lineal-kiranshastry.png',
    stats: '150+',
    name: 'Number of Awards',
  },
  {
    id: 3,
    img:
      'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/ffffff/external-user-advertising-kiranshastry-lineal-kiranshastry-2.png',
    stats: '11,000+',
    name: 'Happy Customers',
  },
  {
    id: 4,
    img:
      'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/ffffff/external-chef-interface-kiranshastry-lineal-kiranshastry.png',
    stats: '1000+',
    name: 'Staff',
  },
]

export default class StatsPreview extends React.Component {
  render() {
    return (
      <article className="section-7 flex-container flex-column txt-center">
        <section className="highlights flex-container flex-column">
          {statsPreview.map((stats) => (
            <div key={stats.id} className="highligh-container">
              <motion.div
                initial={{ opacity: 0, translateX: -300 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                exit={{ opacity: 0, translateX: -300 }}
                transition={{ duration: 2 }}
              >
                <img
                  width="50"
                  height="50"
                  className="hightlight-img"
                  src={stats.img}
                  alt=""
                  aria-hidden="true"
                />
              </motion.div>
              <div>
                <h3>{stats.stats}</h3>
                <p className="pop-font txt-white">{stats.name}</p>
              </div>
            </div>
          ))}
        </section>
      </article>
    )
  }
}
