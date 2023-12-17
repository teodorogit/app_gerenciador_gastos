import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2023');

  const filterChangeHandler = selectorYear => {
    setFilterYear(selectorYear);
    };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
   
    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter  
          selected={filterYear}
          onChangeFilter = {filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
      </div>
    );
  }
  
  export default Expenses;