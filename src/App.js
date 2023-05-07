import { useState } from "react";
import './App.css';
import WarningBox from './components/WarningBox';
import Budget from './components/Budget';





function App() {

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [budget, setBudget] = useState([]);
  const [budgetCreate, setBudgetCreate] = useState();
  const [edit, setEdit] = useState(false);
  const [changedIndex, setChangedIndex] = useState(false);
  const [warningType, setWarningType] = useState();

  const totalAmount = budget.reduce((acc, curr) => acc + parseInt(curr.amount), 0);
  

  return (
    <div className="App">
      <h1>BUDGET CALCULATOR</h1>
      <WarningBox
      warningType={warningType}
      />
      <Budget
        charge={charge}
        setCharge={setCharge}
        amount={amount}
        setAmount={setAmount}
        budget={budget}
        setBudget={setBudget}
        budgetCreate={budgetCreate}
        setBudgetCreate={setBudgetCreate}
        edit={edit}
        setEdit={setEdit}
        changedIndex={changedIndex}
        setChangedIndex={setChangedIndex}
        setWarningType={setWarningType}
      />
      <h1>TOTAL SPENDİNG: {totalAmount}</h1>

    </div>
  );
}

export default App;
