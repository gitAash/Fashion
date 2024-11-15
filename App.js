import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Jeans from './Jeans'; // Import specific components

// Import other service components here...

const App = () => {
  const services = [
    { name: 'T-shirts', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU9QxOu8jWmzr2QgoAIORWr8ZqY9iafVPIvg&s', path: '/t-shirts' },
    { name: 'Tops', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zp7Cm4hvrzbjAFi3MWfNbegiaxkDbVwIHw&s', path: '/tops' },
    { name: 'Kurta\'s', image: 'https://www.lovesummer.in/cdn/shop/products/green-dutch-straight-kurta-set-for-women.jpg?v=1713693126&width=1080', path: '/kurtas' },
    { name: 'Jeans', image: 'https://cdn.shopify.com/s/files/1/0614/0903/4456/files/compress_0923-fhdnmcrg-43-blue__1.jpg?v=1720757717', path: '/jeans' },
    { name: 'Short\'s', image: 'https://i.pinimg.com/564x/a1/2b/56/a12b56195964e22a4955eb25ddf80403.jpg' },
    { name: 'Necklace set', image: 'https://i.etsystatic.com/17631060/r/il/6393a1/3842502329/il_570xN.3842502329_c4lx.jpg' },
    { name: 'Shoe\'s', image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/351195376/KU/OJ/KM/39807035/bucik-women-black-sports-shoes-500x500.jpg' },
    { name: 'Saree\'s', image: 'https://www.jiomart.com/images/product/original/rvd0p8xkfg/brulry-women-pink-embroidered-silk-blend-bollywood-saree-product-images-rvd0p8xkfg-1-202209211025.jpg?im=Resize=(500,630)' },
    { name: 'Bracelet', image: 'https://www.swashaa.com/cdn/shop/files/BUTTERFLYSNAKECHAINBRACELET-Krina-M-Styling-Inhouse-27-09-2023.jpg?v=1713633968&width=1080' },
    { name: 'Sandal\'s', image: 'https://www.tresmode.com/cdn/shop/files/the-makol-gold-women-s-dress-wedge-sandals-tresmode-tresmode-1.jpg?v=1722884912' },
    { name: 'Jumpsuit\'s', image: 'https://sassafras.in/cdn/shop/products/SFJMPS8022-1.jpg?v=1666383252' },
    { name: 'Watches', image: 'https://www.jiomart.com/images/product/500x630/rvlljtoouz/iloz-luxury-new-elegant-look-classique-rose-gold-white-square-design-women-watches-ladies-crystal-bracelet-belt-watch-female-analog-wrist-watches-for-girls-product-images-rvlljtoouz-0-202405062308.jpg' },
  
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home services={services} />} />
        <Route path="/t-shirts" />
        <Route path="/tops" />
        <Route path="/kurtas"  />
        <Route path="/jeans" element={<Jeans />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

const Home = ({ services }) => (
  <div className="min-h-screen bg-gray-100">
    <section className="text-center py-10">
      <h2 className="text-3xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
        {services.map((service, index) => (
          <Link to={service.path} key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={service.image} alt={service.name} className="w-full h-32 object-cover rounded-md" />
            <p className="mt-2 text-lg font-medium">{service.name}</p>
          </Link>
        ))}
      </div>
    </section>
  </div>
);


    

export default App;
