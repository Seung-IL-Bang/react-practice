import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "e1", amount: 100, date: new Date(2021, 1, 12) },
    { title: "e2", amount: 200, date: new Date(2021, 2, 12) },
    { title: "e3", amount: 300, date: new Date(2021, 3, 12) },
  ];


  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
