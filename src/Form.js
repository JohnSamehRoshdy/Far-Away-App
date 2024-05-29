import { useState } from "react";

export default function Form({ onHandleItem }) {
  const [description, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onHandleItem(newItem);
    setDesc("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your trip ? 😍</h3>
      <select
        value={quantity}
        onChange={(e) => Number(setQuantity(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((x) => (
          <option value={x}>{x}</option>
        ))}
      </select>
      <input
        value={description}
        onChange={(e) => setDesc(e.target.value)}
        type="text"
        placeholder="Item ..."
      ></input>
      <button>Add</button>
    </form>
  );
}
