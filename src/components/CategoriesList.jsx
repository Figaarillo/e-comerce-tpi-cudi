import CategoryItem from './CategoryItem';

const CategoriesList = () => {
  const categories = [
    {
      href: 'mens-clothings', 
      name: "Men's clothing",
      imageURL: '/images/mens-clothing.jpeg',
    },
    {
      href: 'womens-clothing',
      name: "Women's clothing",
      imageURL: '/images/womens-clothing.jpeg',
    },
    {
      href: 'jewelery',
      name: 'Jewelery',
      imageURL: '/images/jewelery.jpeg',
    },
    {
      href: 'electronics',
      name: 'Electronics',
      imageURL: '/images/electronics.jpeg',
    },
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-emerald-400 sm:text-5xl md:text-6xl lg:text-7xl mb-4">
          Explora nuestras categorías
        </h1>
        <p className="text-lg font-medium text-gray-400 mb-8">
          Inicio, novedades, ofertas, más vendidos
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {categories.map(category => (
            <CategoryItem key={category.name} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
