import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //! Object combined state
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const handleChangeTitle = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((previousState) => {
    //   //! Best Practice
    //   return {
    //     ...previousState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };

  const handleChangeAmount = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };

  const handleChangeDate = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     enteredDate: event.target.value,
    //   };
    // });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={handleChangeTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={handleChangeAmount}
            min="0.01"
            step="0.01"
          />
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={handleChangeDate}
              min="2019-01-01"
              max="2022-12-31"
            />
          </div>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
