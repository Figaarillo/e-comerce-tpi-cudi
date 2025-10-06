const ProductCard = ({ product }) => {

  const handleAddToCart = () => {
    alert("Producto agregado al carrito")
  };

  return (
    <div className="flex w-full relative flex-column overflow-hidden rounded-lg border border-gray-500 shadow-lg">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img src={product.image} alt="imagen del producto" className="object-cover w-full" />
      </div>

      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          {product.name}
        </h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">
            {product.price}$
          </span>
        </div>
        <button onClick={handleAddToCart} className="absolute bottom-0 right-0 mb-4 mr-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded">Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ProductCard