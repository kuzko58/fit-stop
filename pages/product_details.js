import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import CurrencyFormat from "react-currency-format";
import Layout from "../components/layout/Layout";
import MiniGallery from "../components/mini-gallery/MiniGallery";
import SimpleCard from "../components/cards/SimpleCard";
import CustomSelect from "../components/custom-inputs/CustomSelect";
import CustomTextInput from "../components/custom-inputs/CustomTextInput";
import { featuredProducts, renderProductDesc } from "../constants";
import styles from "../styles/Product_details.module.css";

const sizeList = [
  { value: "small", label: "small" },
  { value: "medium", label: "medium" },
  { value: "large", label: "large" },
  { value: "xl", label: "XL" },
  { value: "xxl", label: "XXL" },
];

const product = {
  title: "Red Printed T-Shirt by HRX",
  description:
    "This is a super awesome red T-shirt. It comes in different sizes and is ready for shipment. place an order now.",
  images: [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
  ],
  rating: 4.5,
  oldPrice: 10000,
  price: 9000,
  discount: 10,
};

const renderSmallImage = ({ images, bigImage, setBigImage }) => {
  const imageCount = images?.length || 4;
  const margin = (imageCount - 1) * 4;
  return (
    <div className="small_img_row">
      {images?.map((image, index) => (
        <div
          onClick={() => setBigImage(image)}
          className="small_img_col"
          key={index}
        >
          <Image src={image} alt="card image" width={200} height={200} />
          <span
            className="active"
            style={{ height: bigImage === image ? "calc(100% - 5px)" : 0 }}
          ></span>
        </div>
      ))}

      <style>
        {`
            .small_img_row {
                display: flex;
                align-items: center;
            }

            .small_img_col {
                position: relative;
                flex-basis: calc((100% - ${margin}px) / ${imageCount});
                flex-grow: 1;
                margin-right: 4px;
            }

            .small_img_col:last-of-type {
                margin-right: 0;
            }

            .small_img_col:hover {
                cursor: pointer;
            }

            .active {
                height: 0;
                width: 100%;
                max-width: 200px;
                // background: #ff523b;
                background: rgba(0, 0, 0, .3);
                position: absolute;
                left: 0;
                bottom: 5px;
                border-radius: 3px;
                transition: all 0.5s linear;
            }
            `}
      </style>
    </div>
  );
};

const renderDesc = ({
  handleChange,
  list,
  state,
  product: { title, description, price, oldPrice, discount, rating },
}) => {
  return (
    <div>
      <p>Home / T-Shirt</p>
      <h1>{title}</h1>
      <div className="product__rating">
        {Array(5)
          .fill(0)
          .fill(2, 0, Math.floor(rating))
          .fill(
            Math.round(rating) === rating ? 0 : 1,
            Math.floor(rating),
            Math.round(rating)
          )
          .map((val, i) => {
            if (val === 2) return <StarIcon key={i} />;
            if (val === 1) return <StarHalfIcon key={i} />;
            return <StarBorderIcon key={i} />;
          })}
      </div>
      <div className="price_section">
      <CurrencyFormat
        renderText={(value) => (
          <div className="price_box">
            <p className="product__price">{value}</p>
          </div>
        )}
        decimalScale={2}
        value={price}
        displayType={"text"}
        thousandSeparator={true}
        prefix="₦"
      />
      {
          oldPrice ? (
            <CurrencyFormat
            renderText={(value) => (
              <div className="price_box">
                <p className="product__old_price">{value}</p>
                { discount && <p className="product__price_discount">{discount}% off</p>}
              </div>
            )}
            decimalScale={2}
            value={oldPrice}
            displayType={"text"}
            thousandSeparator={true}
            prefix="₦"
          />
          ) : ""
      }
      </div>
      <div className={styles.mini_row}>
        <div className={styles.mini_row__col}>
          <CustomSelect
            label="size"
            name="size"
            value={state?.size}
            options={list}
            onChange={handleChange}
            componentProps={{ isSearchable: false, placeholder: "select size" }}
          />
        </div>
        <div className={styles.mini_row__col}>
          <CustomTextInput
            label="quantity"
            name="quantity"
            value={state?.quantity}
            onChange={handleChange}
            componentProps={{ type: "number", min: 1 }}
          />
        </div>
      </div>
      <div className={styles.mini_row}>
        <div className={styles.mini_row__col}>
          <a className="btn_hz_tr product_btn">add to basket</a>
        </div>
        <div className={styles.mini_row__col}>
          <a className="btn_hz product_btn">Checkout Now</a>
        </div>
      </div>
      <h3>Product Details</h3>
      <p className="product__desc">{description}</p>

      <style>
        {`
        .price_box, .price_section {
            display: flex;
            align-items: center;
        }

        .price_section {
            margin-bottom: 30px;
        }

        .product__old_price {
            font-size: 18px;
            font-weight: 500;
            text-decoration: line-through;
            margin-right: 10px;
            color: #cfcfcf;
        }
              .product__price {
                  font-size: 25px;
                  font-weight: 500;
                  margin-right: 10px;
              }

              .product__price_discount {
                  font-size: 16px;
                  font-weight: 600;
                  color: #32a852;
              }

              .product__rating {
                color: #ff523b;
                margin: 5px auto 15px;
              }

              h1 {
                  font-weight: 600;
                  margin: 20px 0 10px;
                  font-size: 30px;
              }

              h3 {
                text-transform: capitalize;
                font-weight: 500;
                margin: 50px 0 5px;
              }

              p {
                margin-bottom: 5px;
                color: #777;
              }
              .product_btn {
                  width: 100%;
                  text-align: center;
                  margin: 20px 0 5px;
              }

              .product__desc {
                font-size: 14px;
              }

              @media only screen and (max-width: 768px) {
                .product__price {
                    font-size: 20px;
                }
  
                h1 {
                    font-size: 20px;
                }
              }
              `}
      </style>
    </div>
  );
};

export default function ProductDetails() {
  const [state, setState] = useState({ size: null, quantity: 1 });
  const [bigImage, setBigImage] = useState(product?.images[0]);

  const handleChange = (e) => {
    if (e.value) {
      return setState((prevVal) => ({
        ...prevVal,
        size: e,
      }));
    }
    const { name, value } = e.target;
    return setState((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  };

  return (
    <div>
      <Layout>
        <Head>
          <title>FitStop | Product_details</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
        <div className="container">
          <MiniGallery>
            <SimpleCard
              classes="shdw pad_1"
              size={2}
              image={bigImage}
              renderContent={() =>
                renderSmallImage({
                  images: product?.images,
                  bigImage,
                  setBigImage,
                })
              }
            />
            <SimpleCard
              classes="pad_dyn_2"
              size={2}
              renderContent={() =>
                renderDesc({
                  handleChange,
                  list: sizeList,
                  state,
                  product,
                })
              }
            />
          </MiniGallery>
          {/* <div className={clsx("row", styles.row)}>
          <h2>Related Products</h2>
          <Link href=""><a className="btn_tr">more &#8594;</a></Link>
        </div> */}
        <MiniGallery classes={styles.gallery} title="Related Products" button={{ text: "Explore", link: "" }}>
          {featuredProducts.slice(0, 4).map((item, index) => (
            <SimpleCard
              classes="shdw pad_1 card_3d"
              key={index}
              size={4}
              image={item.image}
              renderContent={() => renderProductDesc(item)}
            />
          ))}
        </MiniGallery>
        </div>
      </Layout>
    </div>
  );
}
