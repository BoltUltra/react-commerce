import { FooterBanner, Product } from "@/components";
import { client } from "@/lib/client";
import Head from "next/head";
import React from "react";

const Products = ({ products, bannerData, nailData }) => {
  return (
    <div>
      <Head>
        <title>Products</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
          referrerpolicy="no-referrer"
        />
      </Head>
      <div className="products-heading">
        <h2>Best Selling Skin Products</h2>
        <p>Products of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
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

export default Products;
