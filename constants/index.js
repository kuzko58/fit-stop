import Link from "next/link";
import CurrencyFormat from "react-currency-format";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";


export const featuredCategory = [
  { image: "/images/category-1.jpg" },
  { image: "/images/category-2.jpg" },
  { image: "/images/category-3.jpg" },
];

export const featuredProducts = [
  {
    image: "/images/product-1.jpg",
    title: "Red printed T-shirt",
    rating: 4,
    price: 5000,
  },
  { image: "/images/product-2.jpg", title: "Sneakers", rating: 5, price: 8500 },
  {
    image: "/images/product-3.jpg",
    title: "Sports Trousers",
    rating: 4.5,
    price: 6900,
  },
  {
    image: "/images/product-4.jpg",
    title: "Blue printed polo",
    rating: 3,
    price: 2900,
  },
  {
    image: "/images/product-5.jpg",
    title: "Gray boots",
    rating: 4,
    price: 12000,
  },
  {
    image: "/images/product-6.jpg",
    title: "Sports t-shirt",
    rating: 4,
    price: 4700,
  },
  { image: "/images/product-7.jpg", title: "Socks", rating: 3.5, price: 800 },
  {
    image: "/images/product-8.jpg",
    title: "Wristwatch",
    rating: 4,
    price: 18000,
  },
  {
    image: "/images/product-9.jpg",
    title: "wristwatch",
    rating: 4,
    price: 12000,
  },
  {
    image: "/images/product-10.jpg",
    title: "Black shoes",
    rating: 4,
    price: 10000,
  },
  {
    image: "/images/product-11.jpg",
    title: "Gray shoes",
    rating: 3.5,
    price: 8000,
  },
  {
    image: "/images/product-12.jpg",
    title: "trousers",
    rating: 3,
    price: 3000,
  },
];

export const latestProducts = [
  {
    image: "/images/product-5.jpg",
    title: "Gray boots",
    rating: 4,
    price: 12000,
  },
  {
    image: "/images/product-6.jpg",
    title: "Sports t-shirt",
    rating: 4,
    price: 4700,
  },
  { image: "/images/product-7.jpg", title: "Socks", rating: 3.5, price: 800 },
  {
    image: "/images/product-8.jpg",
    title: "Wristwatch",
    rating: 4,
    price: 18000,
  },
  {
    image: "/images/product-9.jpg",
    title: "wristwatch",
    rating: 4,
    price: 12000,
  },
  {
    image: "/images/product-10.jpg",
    title: "Black shoes",
    rating: 4,
    price: 10000,
  },
  {
    image: "/images/product-11.jpg",
    title: "Gray shoes",
    rating: 3.5,
    price: 8000,
  },
  {
    image: "/images/product-12.jpg",
    title: "trousers",
    rating: 3,
    price: 3000,
  },
];

export const offers = [
  { image: "/images/exclusive.png" },
  {
    title: "Smart band 4",
    description:
      "The Mi Smart Band 4 features a 39.9% larger (than Miband 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be.",
  },
];

export const testimonials = [
  {
    name: "Kate warner",
    review:
      "Simply amazing! This is the best e-commerce platform around. It is simple and easy to use. The beautiful UI is very easy on the eye as well.",
    image: "/images/user-1.png",
    rating: 5,
  },
  {
    name: "Chuck Baz",
    review:
      "Simply amazing! This is the best e-commerce platform around. It is simple and easy to use. The beautiful UI is very easy on the eye as well.",
    image: "/images/user-2.png",
    rating: 5,
  },
  {
    name: "Lauren Paige",
    review:
      "Simply amazing! This is the best e-commerce platform around. It is simple and easy to use. The beautiful UI is very easy on the eye as well.",
    image: "/images/user-3.png",
    rating: 5,
  },
];


// Renderers

export const renderProductDesc = ({ title, price, rating }) => (
  <div>
    <h4 className="product__title">{title}</h4>
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
    <CurrencyFormat
      renderText={(value) => (
        <>
          <p>
            <small>₦</small>
            <strong>{value}</strong>
          </p>
        </>
      )}
      decimalScale={2}
      value={price}
      displayType={"text"}
      thousandSeparator={true}
    />
    <style jsx>{`
      .product__title {
        text-transform: capitalize;
        color: #555;
        font-weight: normal;
      }

      .product__rating {
        color: #ff523b;
        margin: 5px auto;
      }

      p {
        font-size: 14px;
      }
    `}</style>
  </div>
);

export const renderOfferContent = ({ title, description }) => (
  <div>
    {title && (
      <>
        <p>{"Exlussively Available on FitStop"}</p>
        <h1>{title}</h1>
        <small>{description}</small>
        <Link href="/">
          <a className="btn">Buy Now &#8594;</a>
        </Link>
      </>
    )}
    <style jsx>{`
      h1 {
        font-size: 40px;
        line-height: 50px;
        margin: 20px 0;
      }

      small {
        color: #555;
      }

      @media only screen and (max-width: 768px) {
        h1 {
          font-size: 25px;
          line-height: 35px;
        }
      }
    `}</style>
  </div>
);
