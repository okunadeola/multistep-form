// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'


const initialData = () => {

  const item = window.localStorage.getItem('gamePlan')
  //** Parse stored json or if none return initialValue
  return item ? JSON.parse(item) : {
    currentStep : 0,

    Name: '',
    Email: '',
    Phone: '',

    isYearPlanLength: false,
    planType: '',
    planAmount: 0,

    AddonTypes: [],
    AddonTotalAmount: 0,

  }
}

export const gamePlanSlice = createSlice({
  name: 'gameplan',
  initialState: {
    planData: initialData()
  },
  reducers: {
        
    handleNextStep: (state, action)=>{
      state.planData = {...state.planData, ...action.payload}
      state.planData.currentStep++
      localStorage.setItem('gamePlan', JSON.stringify(state.planData))
    },
    handlePlanLength: (state, action)=>{
    state.planData.PlanLength = action.payload



    },
    handlePreviousStep: (state, action)=>{
      state.planData.currentStep--

    },
    handleConfirm: (state, action)=>{
      state.planData.currentStep++

    },
    handleChange: (state, action)=>{
      state.planData.currentStep = 1
    },

  }
})

export const { handleNextStep, handlePlanLength, handlePreviousStep, handleConfirm, handleChange } = gamePlanSlice.actions

export default gamePlanSlice.reducer
