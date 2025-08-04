import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faRedoAlt, faSort, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [showCategory, setShowCategory] = useState(true);
  const [showSubCategory, setShowSubCategory] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 pt-10 border-t">
      {/* Filter Section */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          <FontAwesomeIcon icon={faFilter} />
          FILTERS
          <img
            className={`h-3 sm:hidden transition-transform duration-200 ${
              showFilter ? 'rotate-90' : ''
            }`}
            src={assets.dropdown_icon}
            alt="toggle"
          />
        </p>

        <div
          className={`border border-gray-300 p-5 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block rounded-lg shadow-md`}
        >
          {/* Reset Filters */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-medium">Filters</p>
            <button
              onClick={() => {
                setCategory([]);
                setSubCategory([]);
              }}
              className="text-sm text-red-500 flex items-center gap-1 hover:underline"
            >
              <FontAwesomeIcon icon={faRedoAlt} />
              Reset Filters
            </button>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <p
              onClick={() => setShowCategory(!showCategory)}
              className="flex justify-between items-center text-sm font-medium cursor-pointer"
            >
              CATEGORIES
              <FontAwesomeIcon icon={showCategory ? faChevronUp : faChevronDown} />
            </p>
            {showCategory && (
              <div className="mt-3 flex flex-col gap-2 text-sm font-light text-gray-700">
                {['Men', 'Women', 'Kids'].map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-2 cursor-pointer hover:text-purple-600"
                  >
                    <input
                      type="checkbox"
                      value={cat}
                      checked={category.includes(cat)}
                      onChange={toggleCategory}
                      className="accent-purple-600"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* SubCategory Filter */}
          <div>
            <p
              onClick={() => setShowSubCategory(!showSubCategory)}
              className="flex justify-between items-center text-sm font-medium cursor-pointer"
            >
              TYPE
              <FontAwesomeIcon icon={showSubCategory ? faChevronUp : faChevronDown} />
            </p>
            {showSubCategory && (
              <div className="mt-3 flex flex-col gap-2 text-sm font-light text-gray-700">
                {['Topwear', 'Bottomwear', 'Winterwear'].map((subCat) => (
                  <label
                    key={subCat}
                    className="flex items-center gap-2 cursor-pointer hover:text-pink-500"
                  >
                    <input
                      type="checkbox"
                      value={subCat}
                      checked={subCategory.includes(subCat)}
                      onChange={toggleSubCategory}
                      className="accent-pink-500"
                    />
                    {subCat}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="flex-1">
        {/* Title and Sort Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} className="text-center sm:text-left" />

          {/* Sort Dropdown */}
          <div className="relative w-full sm:w-40 mt-4 sm:mt-0">
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="appearance-none w-full border-2 border-gray-300 rounded-md bg-white text-gray-700 py-2 px-3 text-sm cursor-pointer shadow focus:ring-2 focus:ring-purple-600"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
            <FontAwesomeIcon
              icon={faSort}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden border-2 border-transparent transform transition-transform hover:border-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-red-500"
            >
              <div className="p-2 bg-white rounded-lg h-full">
                <ProductItem
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
