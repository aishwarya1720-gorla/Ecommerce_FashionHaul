import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const Product = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoad] = useState(false);

  useEffect(() => {
    let componentMounted = true;

    const getProducts = async () => {
      setLoad(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        if (componentMounted) {
          setProducts(products);
          setFilter(products);
          setLoad(false);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoad(false);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const filterProducts = (category) => {
    if (category === 'All') {
      setFilter(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilter(filtered);
    }
  };

  return (
    <>
      <div>
        <h1 id="h1">Latest Products</h1>
      </div>
      <div id="button-1">
        <button className='b1' onClick={() => filterProducts('All')}>All</button>
        <button className='b1' onClick={() => filterProducts("men's clothing")}>Men's Clothing</button>
        <button className='b1' onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>
        <button className='b1' onClick={() => filterProducts('jewelery')}>Jewellery</button>
        <button className='b1' onClick={() => filterProducts('electronics')}>Electronic</button>
      </div>

      <div id="products">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="product-list">
            {filter.map((product) => (
              <div key={product.id} className="product-item">
                <h2>{product.title}</h2>
                <img src={product.image} alt={product.title} />
                <p><b>Rs.{product.price}</b></p>
                <div id="buy">
                  <NavLink to={`/items/${product.id}`} className="but1">
                    Buy
                  </NavLink>
                  <NavLink to={`/cart/${product.id}`} className="but1">
                    Add to cart
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
