import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ p }) {
  return (
    <div className="card bg-white shadow-xl hover:-translate-y-1 transition">
      <figure className="h-52 relative">
        <Image src={p.image} alt={p.name} fill className="object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-black">{p.name}</h3>
        <p className="text-gray-600">⭐ {p.rating}</p>
        <p className="text-xl font-bold text-orange-500">${p.price}</p>
        <Link href={`/products/${p.id}`} className="btn btn-warning">
          View Details
        </Link>
      </div>
    </div>
  );
}