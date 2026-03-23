import { products } from "@/app/data/products";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  return <div className="pt-44">ID: {product?.name}</div>;
}
