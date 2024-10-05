import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Item = ({ addToCart }) => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const getItem = async () => {
      setLoad(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setItem(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
      setLoad(false);
    };
    getItem();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div>
      {load ? (
        <>Loading.....</>
      ) : (
        <div id="itemdiv">
          <div>
            <img className='itemimg' src={item.image} alt={item.title} height="400px" width="400px" />
          </div>
          <div className='des'>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Price: Rs.{item.price}</p>
            <button onClick={handleAddToCart}id="cartbut">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
