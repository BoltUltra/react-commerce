import Link from "next/link";
import React from "react";
import { AiFillShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Re-Commerce</Link>
      </p>
      <button type="button" className="cart-icon" onClick="">
        <AiFillShopping />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  );
};

export default Navbar;
