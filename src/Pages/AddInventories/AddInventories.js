import React from 'react';
import { useForm } from "react-hook-form";
import './AddInventories.css'

const AddInventories = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/inventory/`
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
        <div className='container'>
            <h2 className='text-center my-3'>Add Your Inventories</h2>
            <div className="add-inventory-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Enter product name' type="product Name" {...register("productName", { required: true })} />
                    <textarea type="description" {...register("description")} />
                    <input type="price" {...register("price")} />
                    <input type="quantity" {...register("quantity")} />
                    <input type="img url" {...register("img")} />
                    <input type="suplierName" {...register("suplierName")} />
                    <input value='Add Inventories' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddInventories;