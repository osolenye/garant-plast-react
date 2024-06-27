import windowLogo from "./assets/window.webp"
import "./Product.css"
import { useState } from 'react';

function Product(props) {
    const [price, setPrice] = useState(0);

    function handleInputClick(event) {
        event.stopPropagation();
    }

    const [product, setProduct] = useState({
        height: 0,
        width: 0
    });



    function onChange(event) {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        })

        setPrice(product.height * product.width * props.price)
    }


    return (
        <div className={props.productClass} id={props.productId} onClick={() => props.handleClick(props.productId)}>
            <img src={windowLogo} alt="" className="product-img" />
            <p className="product-name">{props.name}</p>
            <p className="product-desc">{props.desc}</p>

            {props.productClass === "product-chosen" &&
                <div className="price-wrapper">
                    <input type="number" placeholder="Высота" onClick={handleInputClick} name="height" onChange={onChange} />
                    <input type="number" placeholder="Ширина" onClick={handleInputClick} name="width" onChange={onChange} />
                    <p className="product-price">Цена: {price}$</p>
                </div>

            }
        </div>
    )
}

export default Product