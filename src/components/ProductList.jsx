import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import "./ProductList.css";

const products = [
    { id: 1, name: "Snake Plant", price: 15, img: "/paradise-nursery/images/images1.jpg" },
    { id: 2, name: "Aloe Vera", price: 12, img: "/paradise-nursery/images/images2.jpg" },
    { id: 3, name: "Fiddle Leaf Fig", price: 30, img: "/paradise-nursery/images/images3.jpg" },
];

const ProductList = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.cart.cartItems );
    console.log(selector);
    const [addedItems, setAddedItems] = useState({});

    const handleAddToCart = (product) =>{
            dispatch(addToCart(product));

            setAddedItems((prev) => ({
               ...prev,
               [product.id]:true
             }))
    }

    return (
        <div className="product-container">
            <h2>Our Plants</h2>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                    <img src={product.img} alt={product.name} />
                    <h3>{product.name}</h3>
                    <h4>${product.price}</h4>

                     <button onClick={() => handleAddToCart(product)}
                        disabled = {addedItems[product.id]}
                        className={addedItems[product.id] ? "Added To Cart" : ""}
                     > 
                      {addedItems[product.id] ? "Added To Cart" : "Add To Cart"}
                     </button>


                    {/* <button  onClick = {() =>{
                        console.log("add cart", product);
                        dispatch(addToCart(product));
                    }}>Add To Cart</button> */}
                    {/* <button 
                        disabled={selector.find((item) => item.id === product.id)?.quantity !== 0} 
                        onClick={() => dispatch(addToCart(product))}
                    > 
                        {selector.find((item) => item.id === product.id)?.quantity > 0 
                            ? 'Added to Card' 
                            : 'Add to Cart'}
                    </button> */}
                </div>
                
                ))}
            </div>
        </div>
    );
};

export default ProductList;
