import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("data here", selectedYear);
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onChangeFilter={filterChangeHandler}
      />
      { // Conditional Rendering Alt - 1
      /* {filteredExpenses.length === 0 && <p>No Expense found.</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
