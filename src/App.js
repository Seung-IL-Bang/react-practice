import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { title: "e1", amount: 100, date: new Date(2021, 1, 12) },
    { title: "e2", amount: 200, date: new Date(2021, 2, 12) },
    { title: "e3", amount: 300, date: new Date(2021, 3, 12) },
  ];


  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
