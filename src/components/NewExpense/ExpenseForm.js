import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setNewTitle] = useState('');
    const [enteredAmount, setNewAmount] = useState('');
    const [entederDate, setNewDate] = useState ('');
        
    const titleChangeHandler = (event) => {
        setNewTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setNewAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setNewDate(event.target.value);
    };


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseDate = {
            title: enteredTitle,
            amount:+enteredAmount,
            date: new Date (entederDate),
       };

    props.onSaveExpenseData(expenseDate);
    setNewTitle('');
    setNewAmount('');
    setNewDate('');
    };

    return (
     <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Titutlo</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Valor</label>
                <input type='number'value={enteredAmount}  onChange={amountChangeHandler} min='0.01' step='0.01'/>
            </div>
            <div className='new-expense__control'>
                <label>Data</label>
                <input type='date' value={entederDate} onChange={dateChangeHandler} min='2022-01-01' max='2024-01-01'/>
               </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.whenCancel}>Cancelar</button>
                <button type='submit'>Adicionar</button>
            </div>
     </form>
    );
};

export default ExpenseForm;
;