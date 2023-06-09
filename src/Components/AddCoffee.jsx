import { useState } from "react";
import { db } from "../Utils/firebase";
import { v4 } from "uuid";
import { editStore } from "../Utils/Stores";

export default function AddCoffee(
  props = {
    user: null,
  }
) {
  const [name, setName] = useState(
    editStore.getState().show ? editStore.getState().coffee.name : ""
  );
  const [price, setPrice] = useState(
    editStore.getState().show ? editStore.getState().coffee.price : 0.01
  );
  const [img, setImg] = useState(
    editStore.getState().show ? editStore.getState().coffee.img : ""
  );

  const handleAdd = async () => {
    return new Promise((resolve, reject) => {
      const randId = v4();
      const isEdit = editStore.getState().show;
      db.collection("flavors")
        .doc(isEdit ? editStore.getState().coffee.id : randId)
        .set({
          name: name,
          price: price,
          img: img,
          owner: props.user.email,
        })
        .then((res) => {
          setName("");
          setPrice(0.01);
          setImg("");
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd().catch((err) => {
      console.log(err);
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-6 space-y-2 text-center text-white bg-secondary"
    >
      <label htmlFor="name_input" className="block">
        Name
      </label>
      <input
        className="text-center text-black rounded-md"
        type="text"
        name="name_input"
        id="name_input"
        value={name}
        onChange={(nameVal) => {
          setName(nameVal.target.value);
        }}
        required
      />
      <label htmlFor="price_input" className="block">
        Price
      </label>
      <input
        className="text-center text-black rounded-md"
        type="number"
        name="price_input"
        id="price_input"
        step={0.01}
        min={0.01}
        value={price}
        onChange={(priceVal) => {
          setPrice(priceVal.target.value);
        }}
        required
      />
      <label htmlFor="img_input" className="block">
        Image link
      </label>
      <input
        className="text-center text-black rounded-md"
        type="text"
        name="img_input"
        id="img_input"
        value={img}
        onChange={(imgVal) => {
          setImg(imgVal.target.value);
        }}
        required
      />
      <div className="pt-6">
        <button
          className="px-[1.5rem] py-[0.5rem] font-semibold rounded-md bg-black"
          type="submit"
        >
          {editStore.getState().show ? "Edit" : "Add"}
        </button>
      </div>
    </form>
  );
}
