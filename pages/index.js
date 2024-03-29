import React from "react";
import { client } from "@/lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const index = ({ products, bannerData, nailData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Best Selling Skin Products</h2>
        <p>Products of many variations</p>
      </div>

      <div className="products-container">
        {products?.slice(0, 10).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const nailQuery = '*[_type == "nails"]';
  const nailData = await client.fetch(nailQuery);

  return {
    props: { products, bannerData, nailData },
  };
};

export default index;
