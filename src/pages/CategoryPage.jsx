import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByCategory();
  });
  //mens-clothing
  //https://fakestoreapi.com/products/category/mens-clothing

  async function fetchProductsByCategory() {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  return (
    <div className="min-h-screen">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px--6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-emerald-400 sm:text-5xl md:text-6xl lg:text-7xl mb-8">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {products.length === 0 && (
            <h2 className="text-3xl font-semibold text-gray-400">
              No hay productos en esta categoría
            </h2>
          )}

          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage