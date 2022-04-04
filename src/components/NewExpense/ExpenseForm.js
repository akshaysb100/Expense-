import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enterTitle, setEntertitle] = useState('');
  const [enterAmount, setEnterAmount] = useState('');
  const [enterDate, setEnterDate] = useState('');

  // const [userInput, setUserInPut] = useState({
  //   enterTitle: '',
  //   enterAmount: '',
  //   enterDate: '',
  // });

  const titleChangeHandaler = (event) => {
    setEntertitle(event.target.value);
    // setUserInPut({
    //   ...userInput,
    //   enterTitle: event.target.value,
    // });

    // setUserInPut((prevState) => {
    //   return { ...prevState, enterTitle: event.target.value }; 
    // });
  };

  const AmountChangeHandaler = (event) => {
    setEnterAmount(event.target.value);      
    //  setUserInPut({
    //   ...userInput,
    //   enterAmount: event.target.value,
    // });
  };

  const DateChangeHandaler = (event) => {
    setEnterDate(event.target.value);
    //  setUserInPut({
    //   ...userInput,
    //   enterDate: event.target.value,
    // });
  };

const submitHander = (event) => {
  event.preventDefault();
  
  const expenseData = {
    title : enterTitle,
    Amount : enterAmount,
    Date : new Date(enterDate)
  };
 
 console.log(expenseData)
 setEntertitle('');
 setEnterAmount('');
 setEnterDate('');
}


  return (
    <form onSubmit={submitHander}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandaler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={AmountChangeHandaler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enterDate}
            onChange={DateChangeHandaler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
