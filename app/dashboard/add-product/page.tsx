"use client";

import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

type ProductState = {
  title: String;
  description: String;
  image: String;
  price: Number;
  category: String;
};

const AddProduct = () => {
  const [formData, setFormData] = useState<ProductState | {}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const submitHandler = (e:  React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    axios.post('/api/products', formData).then((value) => {
        
    }).catch((error) => {
        console.log(error);
        toast.error("Something went wrong.")
    })
  }

//   /images/products/camera01.webp

  return (
    <div className="p-3">
      <h2 className="text-center text-lg text-violet-700 font-bold">
        Add Product
      </h2>
      <form>
        <div className="flex flex-col gap-3 w-[400px]">
          <div className="flex items-center justify-between gap-2">
            <label>Title</label>
            <input
              name="title"
              type="text"
              className="border border-slate-600"
              onChange = {handleChange}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label>Description</label>
            <input
              name="description"
              type="text"
              className="border border-slate-600"
              onChange = {handleChange}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label>Price</label>
            <input
              name="price"
              type="text"
              className="border border-slate-600"
              onChange = {handleChange}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label>Image</label>
            <input
              name="image"
              type="text"
              className="border border-slate-600"
              onChange = {handleChange}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label>Category</label>
            <input
              name="category"
              type="text"
              className="border border-slate-600"
              onChange = {handleChange}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label>Colors</label>
            <input
              name="colors"
              type="text"
              className="border border-slate-600"
              onChange = {handleChange}
            />
          </div>
        </div>
        <button onClick={submitHandler} className=" mt-3 px-3 py-2 border bg-yellow-500 text-white rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
