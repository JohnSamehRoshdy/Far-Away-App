export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>You can add your laugage items now 🚀</em>
      </footer>
    );
  }

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentage = (packedItems / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ! Ready to go ✈"
          : `You already have ${numItems} items in your list and already packed
        ${packedItems} of them (${percentage} %)`}
      </em>
    </footer>
  );
}
