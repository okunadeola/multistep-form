
import './App.css';
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';
import "./style.css";
import SelectPlan from './pages/SelectPlan/SelectPlan';
import Addon from './pages/Addon/Addon';
import Summary from './pages/Summary/Summary';
import Thanks from './pages/Thanks/Thanks';
import Steppers from './components/Steppers';
import { useSelector } from 'react-redux';


function App() {

  const currentIndex = useSelector(state => state.plan.planData.currentStep)


  return (

    <div className="container" >
      <Steppers currentIndex={currentIndex} />
      <div className="stepContainer" >
        <div className=''>
            {currentIndex === 0 && (
              <PersonalInfo />
            )}
            {currentIndex === 1 && (
              <SelectPlan />
            )}
            {currentIndex === 2 && (
              <Addon />
            )}
            {currentIndex === 3 && (
              <Summary />
            )}
            {currentIndex === 4 && (
              <Thanks />)}
        </div>
      </div>


    </div>

    
  );
}

export default App;
