


import React, { useState } from 'react'

const Steppers = ({currentIndex} ) => {

    const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];


  return (
    <div className="displayStep">
        <div className="circle">
            {
                steps?.map((step, i) => (
                    <div key={i} className={`${currentIndex === i ? 'circle_active'  : 'circle_default'}`} ><p>{i + 1}</p></div>
                ))
            }
          </div>

        <div className="steps">
            {
                steps?.map((step, i)=>(
                    <div key={i} className="step1">
                        <p>STEP {i+1}</p>
                        <span>{step}</span>
                    </div>

                ))
            }
        </div>
  </div>
  )
}

export default Steppers
