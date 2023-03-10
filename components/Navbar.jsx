import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import React from "react";
import { AiFillShopping } from "react-icons/ai";
import { Cart } from "./";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Re-Commerce</Link>
      </p>
      <button
        type="button"
        className="cart-icon flex flex-col"
        onClick={() => setShowCart(true)}
      >
        <AiFillShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
