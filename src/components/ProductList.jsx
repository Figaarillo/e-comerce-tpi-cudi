import { Star, Trash } from "lucide-react";

const ProductList = ({products, removeProducts, toggleActive}) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden mx-w-4xl mx-auto">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-700">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Product
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Category
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Featured
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {products.map(p => (
            <tr key={p.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={p.image}
                      alt={p.name}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-white">
                      {p.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-400">
                  {p.price.toFixed(2)}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {p.category}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  type="button"
                  className={`p-1 rounded-full text-indigo-600 hover:text-indigo-900 %{porduct.isFeatured  || product.isFeatured === undefined ? "bg-indigo-100" : "bg-gray-100" : "bg-gray-600 text-gray-300" hover:bg-indigo-300 transition duration-300 ease-in-out"}`}
                  onClick={() => toggleActive(p.id)}
                >
                  <Star className="h-5 w-5" />
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  className="text-red-800 hover:text-red-600 transition duration-300 ease-in-out"
                  onClick={() => removeProducts(p.id)}
                >
                  <Trash className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList
