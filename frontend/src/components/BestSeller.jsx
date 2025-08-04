import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-16 px-4 lg:px-10">
      {/* Header Section */}
      <div className="text-center py-8">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-3/4 m-auto text-sm text-gray-600">
          Check out our top-selling items, loved by our customers.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {bestSeller.length > 0 ? (
          bestSeller.map((item) => (
            <div
              key={item._id}
              className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            >
              {/* Bestseller Tag */}
              <span className="absolute top-3 left-3 text-xs font-semibold text-white bg-yellow-500 px-2 py-1 rounded-full shadow-md">
                Bestseller
              </span>
              
              <ProductItem
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                className="rounded-lg" // Ensures ProductItem image and content are rounded
              />
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No best sellers available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
