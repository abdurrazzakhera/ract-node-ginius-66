import React from "react";
import { useForm } from "react-hook-form";

const AddServices = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className='w-50 mx-auto'>
      <h1>Please Add Your services</h1>
      <form
        className='d-flex flex-column p-3'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className='mb-2'
          placeholder='Enter Service name'
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className='mb-2'
          placeholder='Write dec'
          {...register("description")}
        />
        <input
          className='mb-2'
          placeholder='Price'
          type='number'
          {...register("price")}
        />
        <input
          className='mb-2'
          placeholder='Enter Img Url'
          type='text'
          {...register("img")}
        />
        <input type='submit' />
      </form>
    </div>
  );
};

export default AddServices;
