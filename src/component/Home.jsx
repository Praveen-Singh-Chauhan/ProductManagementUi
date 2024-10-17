import React, { useState, useEffect } from 'react';
import productService from '../service/productservice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [searchedProduct, setSearchedProduct] = useState(null);

  useEffect(() => {
    productService.getAllProduct()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteProduct = (id) => {
    productService.deleteProductById(id)
      .then((res) => {
        // Update products state by filtering out the deleted product
        setProducts(products.filter(product => product.id !== id));
        console.log("Deleted successfully")
        toast.success('Product deleted successfully!');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    productService.getProductById(searchId)
      .then((res) => {
        setSearchedProduct(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Product not found!');
        setSearchedProduct(null);
      });
  };

  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-12'>
          <h3 style={{ textAlign: 'center', border: '2px solid #aaa', padding: '10px', fontWeight: 'bold', color: 'white', backgroundColor: '#2E8B57', borderRadius: '10px' }}>Products</h3>
          <form onSubmit={handleSearch} className='mb-3' style={{ display: 'flex', alignItems: 'center' }}>
            <input type='text' placeholder='Search by ID' value={searchId} onChange={(e) => setSearchId(e.target.value)} className='form-control' style={{ marginRight: '10px' }} />
            <button type='submit' className='btn btn-primary'>Search</button>
          </form>
          <table className='table' style={{ textAlign: 'center', border: '2px solid #aaa', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
            <thead style={{ fontWeight: 'bold', color: 'yellow', backgroundColor: '#2E8B57' }}>
              <tr>
                <th>Si. No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody style={{ fontWeight: 'bold', fontSize: '12px' }}>
              {searchedProduct ? (
                <tr key={searchedProduct.id}>
                  <td>{searchedProduct.id}</td>
                  <td>{searchedProduct.productName}</td>
                  <td>{searchedProduct.description}</td>
                  <td>{searchedProduct.price}</td>
                  <td>{searchedProduct.status}</td>
                  <td>
                    <Link to={ 'editProduct/'+searchedProduct.id} className='btn btn-sm btn-primary'>Edit</Link>
                    <button onClick={() => deleteProduct(searchedProduct.id)} className='btn btn-sm btn-danger'>Delete</button>
                  </td>
                </tr>
              ) : (
                products.map((product, index) => (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.productName}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.status}</td>
                    <td>
                      <Link to={'editProduct/'+product.id} className='btn btn-sm btn-primary'>Edit</Link>
                      <button onClick={() => deleteProduct(product.id)} className='btn btn-sm btn-danger'>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
