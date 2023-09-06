import repair from "../../images/repair.png";
import './Partner.scss'

import React from 'react'

const Partner = () => {
  return (
    <div className="partners__container">
      <h1>Ҳамкорлар</h1>
      <div className="parterns__images">
        <img src={repair} className="images"/>
        <p>Қурилиши давом этяпти</p>
      </div>
    </div>
  )
}
export default Partner