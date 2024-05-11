import Header from "./components/Header.jsx";
import CalNumberBox from "./components/CalNumberBox.jsx";
import {useState} from "react";
import Logo from "./components/Logo.jsx";

function App() {
    const [investment, setInvestment] = useState({
            initial:15000,
            annual:900,
            returnVal:5.5,
            duration:12,
        }
    );
    const inputIsValid = investment.duration >= 1;
    function onValChange(symbol,val){
        setInvestment((prevUserInput) => {
            return{
                ...prevUserInput,
                [symbol] : +val // 앞에 +를 붙여줌으로써 숫자 값을 받을 수 있음
            }
        });
    }
  return (
    <div>
      <Header/>
      <CalNumberBox onValChanged={onValChange} investment={investment}/>
        {!inputIsValid && <p className="center">Please enter a duration grater</p>}
        {inputIsValid && <Logo input={investment}/>}
    </div>
  )
}

export default App