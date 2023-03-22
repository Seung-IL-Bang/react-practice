import {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

export default function NewExpense(props) {

  const [isEditing, setIsEditing] = useState(false);
  
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };



  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={stopEditingHandler}/>}
    </div>
  );
}
