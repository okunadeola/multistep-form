






import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleChange, handleConfirm, handlePreviousStep } from '../../redux/game_plan'

const Summary = () => {
  const store = useSelector(state => state.plan.planData)
  const [data, setData] = useState({
    isYearPlanLength: false,
    planType: '',
    planAmount: 0,

    AddonTypes: [],
    AddonTotalAmount: 0,
  })


  useEffect(()=>{
    setData((prev)=> ({...store, AddonTotalAmount : store.isYearPlanLength ?   store.AddonTypes?.reduce((a, {yearly}) => a + yearly, 0) :    store.AddonTypes?.reduce((a, {monthly}) => a + monthly, 0) }))
    

  }, [])




    const changePlan = ()=>{
     dispatch(handleChange())
    }


    const dispatch = useDispatch()


    const handlePrevious = ()=>{
      dispatch(handlePreviousStep())
    }

    const confirm = ()=>{
      dispatch(handleConfirm())

    }








  return (
    <div className="stepSummary" id="stepSummary">
    <h1>Finishing up</h1>
    <p className="description">
      Double-check everything looks OK before confirming.
    </p>
    <div className="resume">
      <div className="containerResume">
        <div
          id="resumeMonth"
         
        >
          <div className="flexResume">
            <div>
              <h4>{data?.planType} {data?.isYearPlanLength ? '(Yearly)' : '(Monthly)'}</h4>
              <button onClick={changePlan}>Change</button>
            </div>
            <label htmlFor="" id="priceResume">
              <h5>
              ${data?.planAmount}/{!data?.isYearPlanLength  ? "mo" : "yr"}

              </h5>
              </label>
          </div>
          <br />
          <span></span>

          {
            data?.AddonTypes?.map((adds, i) => (
                <div key={i} className="flexResume">
                  <p>{adds?.name}</p>
                  <label htmlFor="" >+${data?.isYearPlanLength ? adds?.yearly : adds?.monthly}/ {!data?.isYearPlanLength  ? "mo" : "yr"}</label>
                </div>
            ))
          }


        </div>
      </div>
      <div className="flexTotal">
        <p id="modeTotal">Total</p>
        <span id="totalPrice"></span>
        <span className="dollar">${data?.AddonTotalAmount + data?.planAmount}</span>
      </div>
      <div className="buttonContainer">
                    <button onClick={handlePrevious} className={"backBtn"}>
                      Go back
                    </button>
                    <button onClick={confirm} className="nextBtn">
                      Confirm
                    </button>
      </div>
    </div>
  </div>
  )
}

export default Summary
