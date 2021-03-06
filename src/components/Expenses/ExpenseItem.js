import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.titleName);
  const clickHandaler = () => {
    setTitle("Update!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}> </ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandaler}> change Title</button>
    </Card>
  );
};
export default ExpenseItem;
