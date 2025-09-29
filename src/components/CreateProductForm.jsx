import { useState } from "react";

const CreateProductForm = ({ addProduct }) => {
  const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    image: '',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewProduct({
          ...newProduct,
          image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log(e.target.value)

    try {
      await addProduct(newProduct)
      setNewProduct({
        title: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        image: '',
      });
    } catch (error) {
      console.error('Error creando el producto: ', error);
    }
  };

  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-8 mb-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-emerald-300 text-center">Crear nuevo producto</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Título"
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
          className="w-full p-2 rounded-md bg-gray-700 text-gray-300"
        />
        <textarea
          placeholder="Descripción"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          className="w-full p-2 rounded-md bg-gray-700 text-gray-300"
        />
        <input
          type="number"
          placeholder="Precio"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="w-full p-2 rounded-md bg-gray-700 text-gray-300"
        />
        <select
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          className="w-full p-2 rounded-md bg-gray-700 text-gray-300"
        >
          <option value="">Categoría</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
          className="w-full p-2 rounded-md bg-gray-700 text-gray-300"
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="w-full p-2 rounded-md bg-gray-700 text-gray-300"
        />
        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md"
        >
          Crear producto
        </button>
      </form>
    </div>
  )
}

export default CreateProductForm
