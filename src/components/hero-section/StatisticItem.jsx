
function StatisticItem({ value, label, category }) {
  return (
    <div className="grow">
      <span className="font-bold">{value}</span>
      <span className="text-black dm-sans-font font-bold">{label}</span>
      <p className="text-gray text-sm dm-sans-font">{category}</p>
    </div>
  );
}

export default StatisticItem;
