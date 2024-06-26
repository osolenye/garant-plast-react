import { useState } from 'react';
import './App.css';
import Navbar from './Navbar.jsx';
import Product from './Product.jsx';
import data from "./data";
import About from "./About.jsx";

import windowLogo from "./assets/window.webp";
import "./Product.css";

function App() {
  const dataKeys = Object.keys(data);

  // Собираем все продукты в один массив
  const allProducts = [];
  for (let i = 0; i < dataKeys.length; i++) {
    for (let j = 0; j < data[dataKeys[i]].length; j++ ) {
      allProducts.push(data[dataKeys[i]][j]);
    }
  }

  // Инициализируем состояние с исходными данными продуктов
  const [products, setProducts] = useState(allProducts);

  // Функция для обработки клика и изменения класса продукта
  function handleClick(id) {
    setProducts(oldProducts => 
      oldProducts.map(product => {
        if (product.id === id && product.productClass === "product-chosen") {
          return { ...product, productClass: "product" };
        } else if (product.id !== id) {
          return {...product, productClass: "product"};
        } else if( product.id === id) {
          return {...product, productClass: "product-chosen"}
        }
      })
    );
  }

  // Создаем JSX элементы для каждого продукта
  const allElements = products.map(product => (
    <Product
      key={product.id}
      name={product.name}
      desc={product.desc}
      price={product.square}
      productId={product.id}
      handleClick={handleClick}
      productClass={product.productClass || "product"} // Устанавливаем класс по умолчанию, если не задан
    />
  ));

  return (
    <>
      <Navbar />
      <About />
      <div className='products-container' id='products'>
        {allElements}
      </div>
    </>
  );
}

export default App;
