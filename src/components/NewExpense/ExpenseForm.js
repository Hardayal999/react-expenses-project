import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm=(props)=>{
    const[enteredTitle,setEnteredTitle]= useState('')
    const[enteredAmount,setEnteredAmount]=useState('')
    const[enteredDate,setEnteredDate]=useState('')

    const titleChangeHandler=(event)=>{
            setEnteredTitle(event.target.value)
    }

    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:+enteredAmount,
            date:new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
       
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

    }
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input required value={enteredTitle} onChange={titleChangeHandler} type='text' placeholder='Type the expense here'/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input required value={enteredAmount} onChange={amountChangeHandler} type='number' min='0.01' step='0.01'/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input required value={enteredDate} onChange={dateChangeHandler} type='date' min='2017-01-01' max='2025-01-01'/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'> Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;