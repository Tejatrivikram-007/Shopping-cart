import React from 'react';
import CarouselComponent from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';
// import latest from '../components/assets/images/latest.png'
import { Link } from 'react-router-dom';

const Home = () => {
  const mensProducts = [
    { 
      id: 1, 
      name: 'Men\'s T-Shirt', 
      price: 350, 
      image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/a/x/f/-original-imaguabk3j2gxbfa.jpeg?q=70&crop=false', 
      description: 'Comfortable and stylish T-shirt made of soft cotton, perfect for everyday wear.',
      sizes: ['S    ', 'M ', 'L ', 'XL '] 
  },
  { 
      id: 2, 
      name: 'Men\'s Jeans', 
      price: 1240, 
      image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/jean/o/4/m/30-wsjn2098s-wrogn-original-imagzc4yzfyndbuc.jpeg?q=70&crop=false', 
      description: 'Classic fit denim jeans designed for durability and style.',
      sizes: ['28   ', '30  ', '32   ', '34  ', '36   ']
  },
  { 
      id: 3, 
      name: 'Men\'s Hoodie', 
      price: 950, 
      image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/9/y/h/s-wtss7373m-wrogn-original-imah6ypbzfwfgzmq.jpeg?q=70&crop=false', 
      description: 'Warm and cozy hoodie with a front pocket, ideal for chilly days.',
      sizes: ['S  ','M  ','L  ','XL ','XXL  ']
  },
  { 
      id: 5, 
      name: 'Men\'s Casual Shirt', 
      price: 635, 
      image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/u/a/u/xl-31358660-wrogn-original-imah7fhguhhgwghh.jpeg?q=70&crop=false', 
      description: 'A casual button-up shirt made from soft, breathable fabric, perfect for any casual outing.',
      sizes: ['S  ','M  ','L  ','XL ','XXL  ']
  },
  { 
      id: 6, 
      name: 'Men\'s Leather Jacket', 
      price: 2785, 
      image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/h/g/c/-original-imagvq9pnqgzzfhh.jpeg?q=70&crop=false', 
      description: 'Stylish leather jacket with a sleek finish, perfect for any season.',
      sizes: ['S  ','M  ','L  ','XL ','XXL  ']
  },
  ];

  const womensProducts = [
    { "id": 1, "name": "Women's Dress", "price": 849, "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/f/p/o/xl-612dtk7685aar-selvia-original-imah7d7asns88jez.jpeg?q=70&crop=false", "description": "A stylish and elegant dress perfect for any occasion.", "sizes": ['S  ','M  ','L  ','XL ','XXL  '] },
    { "id": 2, "name": "Women's T-Shirt", "price": 350, "image": "https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/r/g/4/m-w136-technosport-original-imah7js3tqhfbv5k.jpeg?q=70&crop=false", "description": "A comfortable and breathable t-shirt for casual wear.", "sizes": ['S  ','M  ','L  ','XL ','XXL  '] },
    { "id": 3, "name": "Women's Jeans", "price": 735, "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/l/u/s/28-ac-40-a-c-creation-original-imah45eychqbzd7t.jpeg?q=70&crop=false", "description": "Classic denim jeans with a perfect fit and timeless design.", "sizes": ["28  ", "30  ", "32  ", "34  ", "36"] },
    { "id": 4, "name": "Women's Blouse", "price": 280, "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/blouse/l/u/r/34-x-large-entibond-original-imaghnwfdfybw8sb.jpeg?q=70", "description": "A chic and versatile blouse for work or casual outings.", "sizes": ['S  ','M  ','L  ','XL ','XXL  '] },
    { "id": 5, "name": "Women's Skirt", "price": 525, "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/skirt/3/j/r/28-1-b1-midi-zwerlon-original-imagn5dydssycg3y.jpeg?q=70", "description": "A trendy skirt that pairs well with any top.", "sizes": ['S  ','M  ','L  ','XL ','XXL  '] },
    ];

  return (
    <>    <div className="home">
       
      <section className="hero">
      <div className="hero-left">
            <h2>New Arrivals only</h2>
            <div>
                <div className="hero-hand-icon">
                <p>New</p>
                <img src='https://www.iconarchive.com/download/i141326/microsoft/fluentui-emoji-flat/Waving-Hand-Flat-Default.1024.png' alt=""  />                     {/*hand icom need to add*/}
                </div>
            <p>Collection</p>
            <p>For Every one</p>
            </div>
            <div className="hero-latest-btn">
                <div>
                    <Link to='/latestcollection'>Latest Collection</Link>
                </div>
                <img src='➡️' alt="" />                   {/*arrow icom need to add*/}
            </div>
            
        </div>
        <div className="hero-right">
            <img src='https://i.pinimg.com/originals/42/30/a6/4230a631755aab86740d4c444230e789.gif' alt="" />
        </div>
      </section>
      <div className="carousel">
        <CarouselComponent />
        </div>
      <section className="popular-section">
        <h2>Popular in Men's</h2>
        <hr />
        <div className="view-more-container"><button className='btn_viewmore'><Link to='/mens'>View more</Link></button></div>
        <div className="product-grid">
          {mensProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="popular-section">

        <h2>Popular in Women's</h2>
        <hr />
        <div className="view-more-container"><button className='btn_viewmore'><Link to='/womens'>View more</Link></button></div>
        

        <div className="product-grid">
          {womensProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for You</h1>
            <p>Only on Best Sellers Products</p>
            <button><Link to={'/offers'}>Check Now</Link> </button>
        </div>
        <div className="offers-right">
            <img src="https://i.pinimg.com/originals/09/85/ca/0985ca3c92154e4ddd6d3d3a776cac62.gif" alt=""  style={{width:'300px',borderRadius:'10px'}}/> 
        </div>
      
    </div>
      </section>
      
        </div>

      
      </>

  );
};

export default Home;