import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PaystackButton } from "react-paystack";
import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/lib/client";

const Checkout = () => {
  const router = useRouter();
  const publicKey = "pk_test_1af9a281e9136deb43f66672ef69771a4ca46b3b";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const amount = router.query.totalPrice * 100;
  // const items = router.query.cartItems;
  const { cartItems } = useStateContext();
  console.log(cartItems);

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      alert("Thanks for doing business with us! Come back soon!!");
      router.push("/");
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  return (
    <div>
      <div className="payment-form">
        <div>
          <div className="checkout-products">
            {cartItems.map((item) => (
              <div className="checkout-product" key={item._id}>
                <img src={urlFor(item?.image[0])} className="checkout-img" />
                <div className="">
                  <div className="">
                    <h5 className="font-semibold">{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length >= 1 && (
            <div className="">
              <div className="">
                <h3>SubTotal: </h3>
                <h3>${amount / 100}</h3>
              </div>
            </div>
          )}
        </div>
        <div className="checkout">
          <div className="checkout-form">
            <div className="checkout-field">
              <label>Name</label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
