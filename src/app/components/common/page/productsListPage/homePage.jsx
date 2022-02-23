import React, { useState, useEffect } from "react";
import Pagination from "../../pagination";
import { paginate } from "../../../../utils/paginate";
import _ from "lodash";
import ProductCard from "../../../ui/productCard";
import SortDropdown from "../../../ui/sortDropdown";
import GroupList from "../../groupList";
import { goods } from "../../../../mockData/goods";
import { catalog } from "../../../../mockData/catalog";
// import ProductPage from "../components/common/page/productPage/productPage";

const HomePage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState();
    const [searchProduct, setSearchProduct] = useState("");
    const [sortBy, setSortBy] = useState({path: "name", order: "asc"});
    const pageSize = 9;

    // const handleToggleBookMark = (id) => {
    //     const newArray = users.map((user) => {
    //         if (user._id === id) {
    //             return { ...user, bookmark: !user.bookmark };
    //         }
    //         return user;
    //     });
    //     // setUsers(newArray);
    //     console.log(newArray);
    // };
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, searchProduct]);

    const handleCategorySelect = (item) => {
        if (searchProduct !== "") setSearchProduct("");
        setSelectedCategory(item._id);
    };
    const handleSearchProduct = ({ target }) => {
        setSelectedCategory(undefined);
        setSearchProduct(target.value);
    };
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleSort = (item) => {
        setSortBy(item);
    };

    function filterUsers(data) {
        const filteredGoods = searchProduct
            ? data.filter(
                  (product) =>
                      product.name
                          .toUpperCase()
                          .indexOf(searchProduct.toUpperCase()) !== -1
              )
            : selectedCategory
            ? goods.filter(
                  (product) =>
                      JSON.stringify(product.group) ===
                      JSON.stringify(selectedCategory)
              )
            : data;
        return filteredGoods.filter((p) => p._id !== data._Id);
    }

    const filteredGoods = filterUsers(goods);
    const count = filteredGoods.length;
    const sortedGoods = _.orderBy(filteredGoods, [sortBy.path], [sortBy.order]);
    const goodsCrop = paginate(sortedGoods, currentPage, pageSize);
    const clearFilter = () => {
        setSelectedCategory();
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <form className="d-flex">
                        <span className="badge m-1 rounded form-control bg-dark">
                            <input
                                className="form-control me-sm-2 readonly"
                                type="text"
                                placeholder="Поиск..."
                                value={searchProduct}
                                onChange={handleSearchProduct}
                            />
                        </span>
                    </form>
                </div>
                <div className="col-6">
                    <span className="badge m-1 rounded form-control bg-dark">
                        <SortDropdown onSort={handleSort} />
                    </span>
                </div>
                <GroupList
                    items={catalog}
                    onItemSelect={handleCategorySelect}
                    selectedItem={selectedCategory}
                    handleClick={clearFilter}
                />
                <div className="col-9">
                    {goodsCrop.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
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
        </div>
    );
};
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

export default HomePage;
