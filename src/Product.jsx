import windowLogo from "./assets/window.webp"
import "./Product.css"

function Product(props) {


    return (
        <div className={props.productClass} id={props.productId} onClick={() => props.handleClick(props.productId)}>
            <img src={windowLogo} alt="" className="product-img" />
            <p className="product-name">{props.name}</p>
            <p className="product-desc">{props.desc}</p>

            {props.productClass === "product-chosen" && 
                <div className="price-wrapper">
                    <input type="numeric" placeholder="Высота" />
                    <input type="numeric" placeholder="Ширина" />
                    <p className="product-price">Цена: 100$</p>
                </div>
            
            }
        </div>
    )
}

export default Product