
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList=(props)=>{
    if(props.filteredItems.length===0){
        return <h1 className='expenses-list__fallback'>No Found Expenses!!</h1>
    }
    
        return(
            <ul className='expenses-list '>
                {
                props.filteredItems.map(filterItem=>{
                return <ExpenseItem date={filterItem.date} title={filterItem.title} amount={filterItem.amount}/>
                   })
                }
            </ul>
            )
}

export default ExpensesList