import AddToCartBtn from "@/components/AddToCartBtn";
import { getProducts } from "@/lib/data";
import Image from "next/image";
import { redirect } from "next/navigation";
import {
  IoStar,
  IoCartOutline,
  IoShieldCheckmarkOutline,
  IoBriefcaseOutline,
  IoRefreshOutline,
  IoLeafOutline,
} from "react-icons/io5";
import ProductDetailsClient from "@/components/ProductDetailsClient";

export async function generateMetadata({ params }) {
  const singleProduct = await params;
  const prodductId = singleProduct.id;
  const products = await getProducts();
  const product = products.find((item) => item.id === parseInt(prodductId));

  if (!product) {
    return {
      title: "Product Not Found - Solis",
    };
  }

  return {
    title: `${product.name} - Solis`,
    description: product.description || `Buy ${product.name} at Solis Summer.`,
  };
}

const ProductDetailsPage = async ({ params }) => {
  const singleProduct = await params;
  const prodductId = singleProduct.id;
  console.log(prodductId);

  const products = await getProducts();

  const product = products.find((item) => item.id === parseInt(prodductId));

  const { name, brand, price, rating, image, stock, category, description } =
    product;
  console.log(name, "Single Product");

  const trustFeatures = [
    {
      icon: <IoShieldCheckmarkOutline className="text-orange-500" size={24} />,
      title: "Secure Payment",
      desc: "100% encryption on all transactions.",
    },
    {
      icon: <IoBriefcaseOutline className="text-orange-500" size={24} />,
      title: "Free Shipping",
      desc: "On all orders above $50.",
    },
    {
      icon: <IoRefreshOutline className="text-orange-500" size={24} />,
      title: "Easy Returns",
      desc: "30-day no-questions-asked policy.",
    },
    {
      icon: <IoLeafOutline className="text-orange-500" size={24} />,
      title: "Eco-Friendly",
      desc: "Sustainably sourced materials.",
    },
  ];

  return (
    <ProductDetailsClient
      name={name}
      brand={brand}
      price={price}
      rating={rating}
      image={image}
      stock={stock}
      category={category}
      description={description}
      trustFeatures={trustFeatures}
    />
  );
};

export default ProductDetailsPage;
