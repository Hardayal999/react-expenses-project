import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart';
const Expenses=(props)=>{
   
    const[enteredYear,setEnteredYear]=useState('2020')
    const filteredYearChangeHandler=(year)=>{
        setEnteredYear(year)
    }
    const filteredItems= props.expenses.filter(expense=>{
        return enteredYear===expense.date.getFullYear().toString()
    })

    
    return(
        <Card className='expenses'>
            <ExpenseFilter default={enteredYear} onFilteredYear={filteredYearChangeHandler}/>
            <ExpensesChart filteredExpenses={filteredItems}/>
            <ExpensesList filteredItems={filteredItems}/>
        </Card>
    )
}

export default Expenses;