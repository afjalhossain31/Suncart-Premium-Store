import AllProducts from "../components/AllProducts";
import Brands from "../components/Brands";
import HeroSlider from "../components/HeroSlider";
import PopularProducts from "../components/PopularProducts";
import Tips from "../components/Tips";

export default async function Home() {
  return (
    <>
      <HeroSlider />
      <PopularProducts />
      <Tips />
      <AllProducts />
      <Brands />
    </>
  );
}
