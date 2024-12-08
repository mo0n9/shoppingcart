import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  const handleCheckout = () => {
    alert("돈이 없습니다!");
  };

  return (
    <div className="cart">
      <div>
        <h1>장바구니</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> 총 결제 금액: {formatPrice(totalAmount)}원 </p>
          <button onClick={() => navigate("/")}> 쇼핑 계속하기 </button>
          <button onClick={handleCheckout}> 결제하기 </button>
        </div>
      ) : (
        <h1>장바구니가 비었습니다.</h1>
      )}
    </div>
  );
};
