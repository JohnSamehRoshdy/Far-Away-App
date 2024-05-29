import { useState } from "react";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortedBy, setSortedBy] = useState("input");
  let sortedItems;
  if (sortedBy === "input") sortedItems = items;
  if (sortedBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortedBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul className="menuList">
        {sortedItems.map((item) => (
          <Item
            itemObject={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by descreption</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  );

  function Item({ itemObject, onDeleteItem, onToggleItem }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={itemObject.packed}
          onChange={() => onToggleItem(itemObject.id)}
        ></input>
        <button onClick={() => onDeleteItem(itemObject.id)}>❌</button>
        <span
          style={itemObject.packed ? { textDecoration: "line-through" } : {}}
        >
          {itemObject.description}&nbsp;
          {itemObject.quantity}
        </span>
      </li>
    );
  }
}
