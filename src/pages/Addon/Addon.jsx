




import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleNextStep, handlePreviousStep } from '../../redux/game_plan'

const Addon = () => {
  const store = useSelector(state => state.plan.planData)
  const [formData, setFormData] = useState({
    isYearPlanLength: false,
    AddonTypes: [],
  })

  const [availableAddon, setAvailableAddon] = useState([
    {
      name: 'Online services',
      desc: 'Access to multiplayer games',
      monthly: 1,
      yearly: 10,
      id: 1
    },
    {
      name: 'Larger storage',
      desc: 'Extra 1TB of cloud save',
      monthly: 2,
      yearly: 20,
      id: 2
    },
    {
      name: 'Customizable profile',
      desc: 'Custom theme on your profile',
      monthly: 2,
      yearly: 20,
      id: 3
    },
  ])


  const dispatch = useDispatch()

  useEffect(()=>{
    setFormData((prev)=> ({...store}))
  }, [])





    const handlePrevious = ()=>{
      dispatch(handlePreviousStep())
    }

    const handleChange = (val, id)=>{
      
      const exist = formData.AddonTypes?.find((ad )=> ad?.id === id)

      if(exist){
        setFormData({
          ...formData, AddonTypes : [...formData?.AddonTypes?.filter(type => type.id !== id)]
        })
      }else{
        setFormData({
          ...formData, AddonTypes : [...formData.AddonTypes, {...val}]
        })
        
      }
      
    }
  
    const handleSubmit = ()=>{

      const {AddonTypes} = formData
      if(AddonTypes.length){
          dispatch(handleNextStep(formData))
      }
    }



  return (
    <div className="stepAddOn" id="stepAddOn">
    <h1>Pick add-ons</h1>
    <p className="description">
      Add-ons help enhance your gaming experience.
    </p>
 
    <div id="addonMois">
      {
        availableAddon?.map(addon=> (
          <label  key={addon.id} htmlFor={`addon${addon.id}`}>
          <div className={`addOnButton ${ formData?.AddonTypes?.some(val => val.id === addon.id ) && 'active'}`}>
            <div className="regroup">

              <input
                type="checkbox"
                id={`addon${addon.id}`}
                name="adOnn"
                checked={ formData?.AddonTypes?.some(val => val.id === addon.id )}
                onChange={(e)=>handleChange(addon, addon.id)}
                />

              <div className="addOn">
                <p className="AddSize">{addon.name}</p>
                <span>{addon.desc}</span>
              </div>
            </div>
            <p className="prix">+${formData?.isYearPlanLength ? addon.yearly : addon.monthly}/ {!formData?.isYearPlanLength  ? "mo" : "yr"}</p>
          </div>
          </label>

        ))
      }
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

export default Addon
