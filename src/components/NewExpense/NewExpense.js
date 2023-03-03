import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

export default function NewExpense(props) {
  
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData);
    props.onAddExpense(expenseData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseData}/>
    </div>
  );
}
