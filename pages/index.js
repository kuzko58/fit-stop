import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/layout/Layout";
import Hero from "../components/hero/Hero";
import MiniGallery from "../components/mini-gallery/MiniGallery";
import SimpleCard from "../components/cards/SimpleCard";
import ReviewCard from "../components/cards/ReviewCard";
import {
  featuredCategory,
  featuredProducts,
  latestProducts,
  offers,
  testimonials,
  renderProductDesc,
  renderOfferContent,
} from "../constants";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>FitStop | Ecommerce Website Design</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="container">
        <Hero />
        <MiniGallery>
          {featuredCategory.map((item, index) => (
            <SimpleCard key={index} size={3} image={item.image ? item.image[0] : undefined} />
          ))}
        </MiniGallery>
        <MiniGallery title="Featured Products" button={{ text: "Explore", link: "/products" }}>
          {featuredProducts.slice(0, 4).map((item, index) => (
            <SimpleCard
              classes="shdw pad_1 card_3d"
              key={index}
              size={4}
              image={item.image ? item.image[0] : undefined}
              renderContent={() => renderProductDesc(item)}
              onClick={() => router.push({ pathname: '/product_details', query: { product: JSON.stringify(item) } })}
            />
          ))}
        </MiniGallery>
        <MiniGallery title="Latest Products" button={{ text: "Explore", link: "/products" }}>
          {latestProducts.map((item, index) => (
            <SimpleCard
              classes="shdw pad_1 card_3d"
              key={index}
              size={4}
              image={item.image ? item.image[0] : undefined}
              renderContent={() => renderProductDesc(item)}
              onClick={() => router.push({ pathname: '/product_details', query: { product: JSON.stringify(item) } })}
            />
          ))}
        </MiniGallery>
        <MiniGallery classes="theme_bg pad_dyn">
          {offers.map((item, index) => (
            <SimpleCard
              key={index}
              size={2}
              image={item.image ? item.image[0] : undefined}
              renderContent={() => renderOfferContent(item)}
            />
          ))}
        </MiniGallery>
        <MiniGallery title="Testimonials">
          {testimonials.map((item, index) => (
            <ReviewCard
              key={index}
              size={3}
              image={item.image[0]}
              author={item.name}
              review={item.review}
              rating={item.rating}
            />
          ))}
        </MiniGallery>
      </div>
    </Layout>
  );
}
