import { useState } from "react";
import Card from "../../UI/Card/Card";
// import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpenseChart from "../ExpenseChart";
import ExpensesFilter from "../../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpenseList/ExpensesList";

import "./AllExpenses.css";

function AllExpenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const handleFilterChange = (selectYear) => {
    setFilteredYear(selectYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onHandleFilterChange={handleFilterChange}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default AllExpenses;
