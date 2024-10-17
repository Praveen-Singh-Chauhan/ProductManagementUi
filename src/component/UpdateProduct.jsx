import React, { useState, useEffect } from 'react';
import productService from '../service/productservice';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  useEffect(() => {
    productService.getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    productService.updateProduct(product)
      .then((res) => {
        console.log("Product Updated Successfully");
        toast.success('Product updated successfully!');
        // Navigate to the home page after successful update
        window.location.href = '/';
      })
      .catch((error) => {
        console.log(error);
        toast.error('Failed to update product');
      });
  };

  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-header fs-3 text-center'>
              Update Product
            </div>
            <div className='card-body'>
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <label>Product ID</label>
                  <input type='text' name='id' className='form-control' value={product.id} readOnly />
                </div>

                <div className='mb-3'>
                  <label>Enter Product Name</label>
                  <input type='text' name='productName' className='form-control' onChange={handleChange} value={product.productName} />
                </div>

                <div className='mb-3'>
                  <label>Enter Product Description</label>
                  <input type='text' name='description' className='form-control' onChange={handleChange} value={product.description} />
                </div>

                <div className='mb-3'>
                  <label>Enter Product Price</label>
                  <input type='text' name='price' className='form-control' onChange={handleChange} value={product.price} />
                </div>

                <div className='mb-3'>
                  <label>Enter Product Status</label>
                  <input type='text' name='status' className='form-control' onChange={handleChange} value={product.status} />
                </div>

                <button type="submit" className='btn btn-primary col-md-12'>Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
