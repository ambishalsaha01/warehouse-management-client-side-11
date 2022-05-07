import React from 'react';
import { useForm } from "react-hook-form";
import './AddInventories.css'

const AddInventories = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://cryptic-wildwood-92945.herokuapp.com/inventory/`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => { console.log(result) })
    };
    return (
        <div className='add-inventory mx-auto'>
            <h2 className='text-center my-3'>Add Your Inventories</h2>
            <div className="add-inventory-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Enter product name' type="product Name" {...register("productName", { required: true })} />
                    <textarea placeholder='Enter description' type="description" {...register("description")} />
                    <input placeholder='Enter price' type="price" {...register("price")} />
                    <input placeholder='Enter quantity' type="quantity" {...register("quantity")} />
                    <input placeholder='Enter image url' type="img url" {...register("img")} />
                    <input placeholder='Enter suplier name' type="suplierName" {...register("suplierName")} />
                    <input className='bg-dark text-white' value='Add Inventories' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddInventories;