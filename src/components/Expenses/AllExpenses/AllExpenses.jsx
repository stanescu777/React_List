import { useState } from "react";
import Card from "../../UI/Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../../ExpenseFilter/ExpenseFilter";

import "./AllExpenses.css";

function AllExpenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const handleFilterChange = (selectYear) => {
    setFilteredYear(selectYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onHandleFilterChange={handleFilterChange}
        />

        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default AllExpenses;
