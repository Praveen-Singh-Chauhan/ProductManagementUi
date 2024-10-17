import React, { useState } from 'react';
import productservice from '../service/productservice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: '',
    description: '',
    price: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const ProductRegister = (e) => {
    e.preventDefault();
    productservice
      .addProduct(product)
      .then((res) => {
        console.log('Product Added Successfully');
        toast.success('Product added successfully!');
        // Clear the form after successful submission
        setProduct({
          productName: '',
          description: '',
          price: '',
          status: '',
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
          <h4 style={{ textAlign: 'center', border: '2px solid #aaa',margin:'10px', padding: '7px', fontWeight: 'bold', color: 'white',  backgroundColor: '#2E8B57',borderRadius: '8px' }}>Add Products</h4>
            <div className='card-body'>
              <form onSubmit={ProductRegister} style={{ textAlign: 'center', border: '2px solid #aaa', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
                <div className='mb-3'>
                  <label>Enter Product Name</label>
                  <input
                    type='text'
                    name='productName'
                    className='form-control'
                    onChange={handleChange}
                    value={product.productName}
                  />
                </div>

                <div className='mb-3'>
                  <label>Enter Product Description</label>
                  <input
                    type='text'
                    name='description'
                    className='form-control'
                    onChange={handleChange}
                    value={product.description}
                  />
                </div>

                <div className='mb-3'>
                  <label>Enter Product Price</label>
                  <input
                    type='text'
                    name='price'
                    className='form-control'
                    onChange={handleChange}
                    value={product.price}
                  />
                </div>

                <div className='mb-3'>
                  <label>Enter Product Status</label>
                  <input
                    type='text'
                    name='status'
                    className='form-control'
                    onChange={handleChange}
                    value={product.status}
                  />
                </div>

                <button className='btn btn-primary col-md-12'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
