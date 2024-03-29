import { urlFor } from "@/lib/client";
import Link from "next/link";
import React from "react";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <h2>{discount}</h2>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <h2>{smallText}</h2>
          <h3>{midText}</h3>
          <p>{desc}</p>
          {/* <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link> */}
        </div>
        <img src={urlFor(image)} className="footer-banner-image" alt="" />
      </div>
    </div>
  );
};

export default FooterBanner;
