import { useEffect, useState } from 'react';
import AdminTabs from '../components/AdminTabs';
import CreateProductForm from '../components/CreateProductForm';
import ProductList from '../components/ProductList';
import Analytics from '../components/Analytics';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('create');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const addProduct = product => {
    console.log('Se esta agregando el producto: ', product);
    setProducts([...products, product]);
  };

  const removeProduct = productId => {
    console.log('Se esta eliminando el producto: ', productId);
    setProducts(products.filter(product => product.id !== productId));
  };

  const toggleActive = productId => {
    console.log('Se esta cambiando el estado del producto: ', productId);

    if (products.active === undefined) {
      products.active = true
    }

    setProducts(
      products.map(product =>
        product.id === productId
          ? { ...product, active: !product.active }
          : product
      )
    );
  };

  async function fetchAllProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
  return (
    <div className='min-h-screen relative overflow-hidden'>
      <div className='relative z-10 container mx-auto px-4 py-16'>
        <h1 className='text-4xl font-bold mb-8 text-emerald-400 text-center'>Admin Panel</h1>

        <AdminTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'create' && (
          <CreateProductForm addProduct={addProduct} />
        )}
        {activeTab === 'products' && (
          <ProductList products={products} removeProduct={removeProduct} toggleActive={toggleActive} />
        )}
        {activeTab === 'analytics' && <Analytics />}
      </div>
    </div>
  );
};

export default AdminPage;
