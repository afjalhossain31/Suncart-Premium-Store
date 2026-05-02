import { products } from "@/data/products"; import ProductCard from "@/components/ProductCard";
export default function Products(){return <section className="max-w-6xl mx-auto p-6"><h1 className="text-4xl font-bold mb-8">All Summer Products</h1><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{products.map(p=><ProductCard key={p.id} p={p}/>)}</div></section>}
