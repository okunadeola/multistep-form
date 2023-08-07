import React from 'react'
import ThanksImg from '../../assets/images/icon-thank-you.svg'

const Thanks = () => {
  return (
    <div className="stepThankYou" id="stepThankYou">
        <img src={ThanksImg} alt="" />
        <h1>Thank you!</h1>
        <p>
        Thanks for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free to
        email us at support@loremgaming.com.
        </p>
  </div>
  )
}

export default Thanks
