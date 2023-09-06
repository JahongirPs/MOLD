

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { instance } from '../../api/axios';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  let { categoryId } = useParams();

  useEffect(() => {

    instance(`/products/byCategory/${categoryId}`)
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, [categoryId]);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          {product.name}
         <h1>dsdff</h1>
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;
