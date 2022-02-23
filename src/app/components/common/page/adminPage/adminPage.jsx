import React, { useState, useEffect } from "react";
import { paginate } from "../../../../utils/paginate";
import _ from "lodash";
import { goods } from "../../../../mockData/goods";
import GoodsTable from "../../../ui/goodsTable";
import Pagination from "../../pagination";
import useValue from "../../../../hooks/useValue";
import CreateProductForm from "../../../ui/createProductForm";

const AdminPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
    const [goodsList, setGoodsList] = useState([]);
    const [show, setShow] = useValue(false);
    const pageSize = 8;

    useEffect(() => {
        setGoodsList(goods);
    }, []);

    const handleDelete = (prodId) => {
        setGoodsList(goods.filter((prod) => prod._id !== prodId));
    };
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    const sortedGoods = _.orderBy(goodsList, [sortBy.path], [sortBy.order]);
    const goodsCrop = paginate(sortedGoods, currentPage, pageSize);
    const count = sortedGoods.length;
    const handleClose = () => {
        setShow(false);
    };

    const handleProductCreate = () => {
        setShow(true);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <button
                    className="btn btn-outline-success m-1 rounded bg-dark"
                    onClick={handleProductCreate}
                >
                    Добавить новый товар
                </button>

                <CreateProductForm onClose={handleClose} show={show} />

                <div className="col border border-primary rounded">
                    <GoodsTable
                        goods={goodsCrop}
                        onSort={handleSort}
                        selectedSort={sortBy}
                        onHandleDelete={handleDelete}
                    />
                </div>
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

export default AdminPage;
