import React, { useState } from "react";
import PropTypes from "prop-types";
import ModalFinish from "./modalFinish";

const BasketCard = ({ lenght, summPrice }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="col-3">
            <ModalFinish show={show} onClose={handleClose} />
            <div className="card border-success mb-3">
                <div className="card-header text-center">Итого в корзине: </div>
                <div className="card-body">
                    <h4 className="card-title">Количество товаров: {lenght}</h4>
                    <hr />
                    <h3 className="card-title">На сумму: {summPrice} ₽</h3>
                </div>
                <button
                    type="button"
                    className="btn btn-outline-success m-3 rounded"
                    onClick={handleShow}
                >
                    Оформить
                </button>
            </div>
        </div>
    );
};

BasketCard.propTypes = {
    lenght: PropTypes.number,
    summPrice: PropTypes.number
};
export default BasketCard;
