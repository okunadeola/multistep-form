


import React, { useEffect, useState } from 'react'
import ArcadeImg from '../../assets/images/icon-arcade.svg'
import AdvancedImg from '../../assets/images/icon-advanced.svg'
import ProImg from '../../assets/images/icon-pro.svg'
import { useDispatch, useSelector } from 'react-redux'
import { handleNextStep, handlePreviousStep } from '../../redux/game_plan'



const SelectPlan = () => {
  const store = useSelector(state => state.plan.planData)
  const [formData, setFormData] = useState({
    isYearPlanLength: false,
    planType: '',
    planAmount: 0,
  })

  const [availablePlan, setAvailablePlan] = useState([
    {
      name: 'Arcade',
      monthly: 9,
      yearly: 90,
      image: ArcadeImg
    },
    {
      name: 'Advanced',
      monthly: 12,
      yearly: 120,
      image: AdvancedImg
    },
    {
      name: 'Pro',
      monthly: 15,
      yearly: 150,
      image: ProImg
    },
  ])


  const dispatch = useDispatch()

  useEffect(() => {
    setFormData((prev) => ({ ...store }))
  }, [])




  const handlePrevious = () => {
    dispatch(handlePreviousStep())
  }

  const handleSubmit = () => {
    const { planType, planAmount } = formData
    if (planType && planAmount) {
      dispatch(handleNextStep(formData))
    }
  }




  const updateForm = (id) => {

    const thePlan = availablePlan[id]

    setFormData({
      ...formData, planType: thePlan.name,
      planAmount: formData.isYearPlanLength ? thePlan.yearly : thePlan.monthly,
    })

  }






  return (


    <div className="stepPlan" id="stepPlan">
      <h1>Select your plan</h1>
      <p className="description">
        You have the option of monthly or yearly billing.
      </p>
      <div className="planMonth" id="planMonth">
        {
          availablePlan?.map((plan, i) => (
            <button key={i} className={`planButton ${plan.name === formData.planType ? 'active' : ''}`} onClick={() => updateForm(i)}>
              <img src={plan.image} alt="" />

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <p>{plan.name}</p>
                <span className="">{formData?.isYearPlanLength ? plan.yearly + '$' : plan.monthly + '$'}/ {!formData?.isYearPlanLength ? "mo" : "yr"}</span>
                {formData.isYearPlanLength && <span className="yeartype">2 months free</span>}
              </div>

            </button>

          ))
        }


      </div>

      <div className="switch">

        <p className="monthly">Monthly</p>

        <label className="check"
        >
          <input
            type="checkbox"
            id="checkbox"
            name='planLength'
            checked={formData.isYearPlanLength}
            onChange={(e) => setFormData({
              ...formData, isYearPlanLength: e.target.checked, planType: '',
              planAmount: 0,
            })} />
          <span></span>
        </label>

        <p className="yearly">Yearly</p>
      </div>

      <div className="buttonContainer">
        <button onClick={handlePrevious} className={"backBtn"}>
          Go back
        </button>
        <button onClick={handleSubmit} className="nextBtn">
          Confirm
        </button>
      </div>


    </div>



  )
}

export default SelectPlan
