import { Product, products } from "@/app/data/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p: Product) => p.id === Number(id));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <span className="text-6xl font-bold text-zinc-200">404</span>
        <p className="text-xl font-medium">Product not found!</p>
      </div>
    );
  }

  return <div className="pt-44">ID: {product?.name}</div>;
}
