import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]);

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBrowseAll = () => {
        navigate('/collection');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="my-16 px-4 lg:px-10 bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Header Section */}
            <div className="text-center py-10">
                <Title text1="EXPLORE" text2="OUR LATEST COLLECTION" />
                <p className="w-full md:w-3/4 lg:w-1/2 m-auto text-base md:text-lg text-gray-700 font-light italic leading-relaxed">
                    Unveil the beauty of new trends and timeless classics that inspire and elevate your style. Your next favorite awaits.
                </p>
                
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {latestProducts.length > 0 ? (
                    latestProducts.map((item) => (
                        <div
                            key={item._id}
                            className="group relative bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 cursor-pointer"
                            onClick={() => handleProductClick(item._id)}
                        >
                            <ProductItem
                                id={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                className="rounded-lg"
                            />
                            <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-25 transition duration-300 flex flex-col justify-center items-center rounded-lg">
                                <h3 className="text-white opacity-0 group-hover:opacity-100 text-lg font-semibold transition-opacity">
                                    {item.name}
                                </h3>
                                <p className="text-white opacity-0 group-hover:opacity-100 text-sm mt-1 transition-opacity">
                                ₹{item.price.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">
                        No products available at the moment. Please check back soon!
                    </p>
                )}
            </div>

            {/* Call-to-Action */}
            <div className="mt-16 text-center">
                <p className="text-base md:text-lg text-gray-700 font-light italic">
                    Stay ahead of the curve with the freshest designs. Your style deserves nothing less.
                </p>
                <button
                    onClick={handleBrowseAll}
                    className="mt-6 px-8 py-3 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white text-base font-medium rounded-full shadow-lg hover:from-pink-500 hover:to-indigo-600 hover:scale-105 transition-transform duration-300"
                >
                    Browse All Products
                </button>
            </div>
        </div>
    );
};

export default LatestCollection;
