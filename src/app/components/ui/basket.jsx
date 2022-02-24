import React, { useState, useEffect } from "react";
import { goods } from "../../mockData/goods";
import { paginate } from "../../utils/paginate";
import Pagination from "../common/pagination";
import BasketCard from "./basketCard";
import ProductCardBasket from "./productCardBasket";

const Basket = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [goodsList, setGoodsList] = useState([]);

    useEffect(() => {
        setGoodsList(goods);
    }, []);

    const handleDelete = (prodId) => {
        setGoodsList(goodsList.filter((prod) => prod._id !== prodId));
    };
    const pageSize = 4;
    const count = goodsList.length;

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    function getSummPrice(key) {
        return goodsList.reduce((a, b) => a + (b[key] || 0), 0);
    }
    const summPrice = getSummPrice("price");

    const goodsCrop = paginate(goodsList, currentPage, pageSize);
    return (
        <div className="container-fluid">
            <h2 className="d-flex justify-content-center">
                <span>Корзина</span>
            </h2>
            <div className="row">
                <div className="col-9">
                    {goodsCrop.map((product) => (
                        <ProductCardBasket
                            key={product._id}
                            product={product}
                            onHandleDelete={handleDelete}
                        />
                    ))}
                </div>
                <BasketCard lenght={count} summPrice={summPrice} />
            </div>

            <div className="d-flex justify-content-center">
                <Pagination
                    itemsCount={count}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default Basket;
