import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { goods } from "../../../../mockData/goods";
import { rateStar } from "../../../../styles/rateImg";
// import { useSelector } from "react-redux";

const ProductPage = ({ id }) => {
    const history = useHistory();
    // const params = useParams();
    // const { productId } = params;
    const currentUser = true;
    // const user = useSelector(getUserById(userId));
    // const isLoading = useSelector(getProfessionsIoadingStatus());
    const isAdmin = true;
    const prodId = goods.find(
        (product) => JSON.stringify(product._id) === JSON.stringify(id)
    );
    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
        localStorage.setItem("currentProduct", prodId._id);
    };
    const handleAllGoods = () => {
        if (isAdmin) {
            history.push("/admin");
        } else {
            
            history.push("/");
        }
    };
    console.log(localStorage.getItem("currentProduct"));

    return (
        <div className="container-fluid">
            <div className="row rounded">
                <div className="col-6">
                    <button
                        className="btn btn-primary m-3 w-100 rounded"
                        onClick={() => handleAllGoods()}
                    >
                        Все товары
                    </button>
                </div>
                <div className="card mb-3 align-self-center">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={prodId.image}
                                className="img-fluid rounded-start"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                {currentUser && (
                                    <button
                                        className="position-absolute top-0 end-0 btn btn-close btn-sm"
                                        onClick={handleClick}
                                    ></button>
                                )}
                                <h3 className="card-title">{prodId.name}</h3>
                                <p className="card-text">
                                    {prodId.description}
                                </p>
                                <div>
                                    <p className="p-2 text-start">
                                        <img
                                            src={rateStar}
                                            alt=""
                                            width="21"
                                            height="21"
                                        />
                                        {prodId.rate}
                                    </p>
                                </div>

                                <h2>
                                    <p className="card-text text-start">
                                        <small className="text-muted">
                                            {prodId.price} ₽
                                        </small>
                                    </p>
                                </h2>
                            </div>
                            <button
                                type="button"
                                className="btn btn-outline-success m-3 rounded align-self-end"
                                // onClick={handlePushBasket}
                            >
                                В корзину
                            </button>
                            <div className="card-text text-center justify-content-end">
                                Наличие в пунктах выдачи: {prodId.amount}
                            </div>
                        </div>
                        <h6 className="card-text text-start">
                            Код товара: {prodId._id}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductPage.propTypes = {
    prodId: PropTypes.object,
    id: PropTypes.string
};

export default ProductPage;
