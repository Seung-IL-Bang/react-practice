import './ExpenseDate.css'

export default function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear(); // 연도를 네 자리로 표현
  const day = props.date.toLocaleString("en-US", { day: "2-digit" }); // 날짜를 두 자리로 표현

  return (
    <div className="expense-date">
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}
