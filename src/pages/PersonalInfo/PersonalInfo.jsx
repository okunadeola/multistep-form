
import {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { handleNextStep } from "../../redux/game_plan";





const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/


  const Schema = yup.object().shape({
    Phone: yup.string().matches(phoneRegExp, 'Invalid phone').required(),
    Email: yup.string().email('Invalid email format').required(),
    Name: yup.string().required()
  })


const PersonalInfo = () => {
    const store = useSelector(state => state.plan.planData)

      const {register, handleSubmit, setValue, formState: {errors}} = useForm({
        resolver: yupResolver(Schema)
      })





      
    const dispatch = useDispatch()




    useEffect(()=>{
      setValue("Name", store?.Name)
      setValue("Email", store?.Email)
      setValue("Phone", store?.Phone)
    }, [])
  

    const onSubmit = (data)=>{
      let form = {...store, ...data}
      dispatch(handleNextStep(form))
    }



  return (
    <div className="stepInfo" id="stepInfo">
    <h1>Personal Info</h1>
    <p className="description">
      Please provide your name, email address, and phone number.
    </p>


    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flexError">
          <p>Name</p>
          <span id="errorName">{errors.Name?.message}</span>
        </div>
        
        <input
          type="text"
          name="Name"
          className={`${errors.Name?.message && 'error'}`}
          {...register('Name')}
          placeholder=" e.g. Stephen king"
        />
        <div className="flexError">
          <p>Email Address</p>
          <span id="errorName">{errors.Email?.message}</span>
        </div>
        <input
          type="text"
          className={`${errors.Email?.message && 'error'}`}
          name="Email"
          {...register('Email')}
          placeholder=" e.g. stephenking@lorem.com"
        />
        <div className="flexError">
          <p>PhoneNumber</p>
          <span id="errorName">{errors.Phone?.message}</span>
        </div>
        <input
          
          type="text"
          name="Phone"
          className={`${errors.Phone?.message && 'error'}`}
          {...register('Phone')}
          placeholder=" e.g. +1 234 567 890"
        />

              <div className="buttonContainer">
                <div></div>
                <button type="submit" className="nextBtn">
                  Confirm
                </button>
              </div>
    </form>
  </div>
  );
};
export default PersonalInfo;
