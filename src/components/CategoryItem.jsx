import { Link } from "react-router-dom"

const CategoryItem = ({ category }) => {
  return (
    <div className="relative overflow-hidden h-96 w-full rounded-lg group">
      <Link to={`/category/${category.href}`}>
        <div className="w-full h-full cursor-pointer relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
          <img
            src={category.imageURL}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          />

          <div className="absolute bottom-0 left-0 w-full p-4 z-20">
            <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-2">
              {category.name}
            </h3>
            <p className="text-gray-300 text-sm">Explora {category.name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryItem
