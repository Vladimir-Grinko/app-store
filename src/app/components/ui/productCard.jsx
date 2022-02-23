import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import { rateStar } from "../../styles/rateImg";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { getCurrentUserData } from "../../store/users";

const ProductCard = ({ product }) => {
    const history = useHistory();
    // const currentUser = true;
    // useSelector(getCurrentUserData());

    const goToProductPage = () => {
        history.push("/product/" + product._id);
    };

    const handlePushBasket = () => {
        console.log(product);
    };
    return (
        <div className="card mb-3 align-self-end">
            <div className="row g-0">
                <div className="col-md-3 align-items-center position-relative">
                    <img
                        src={product.image}
                        className="img-fluid rounded-start"
                        alt="..."
                        width="150"
                        height="120"
                    />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <Link to={`/product/${product._id}`}>
                            <h5 className="card-title">{product.name}</h5>
                        </Link>

                        
                        <div>
                            <p className="p-2">
                                <img
                                    src={rateStar}
                                    alt=""
                                    width="21"
                                    height="21"
                                />
                                {product.rate}
                            </p>
                        </div>
                        <h2>
                            <p className="card-text">
                                <small className="text-muted">
                                    {product.price} ₽
                                </small>
                            </p>
                        </h2>
                    </div>
                    <button
                        type="button"
                        className="btn btn-outline-secondary m-3 rounded"
                        onClick={goToProductPage}
                    >
                        Подробнее
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-success m-3 rounded"
                        onClick={handlePushBasket}
                    >
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object
};

export default ProductCard;
