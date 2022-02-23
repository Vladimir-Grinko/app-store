import React from "react";

const SearchForm = () => {
    return (
        <form className="d-flex">
            <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Поиск..."
                // value={searchProduct}
                // onChange={handleSearchProduct}
            />
        </form>
    );
};

export default SearchForm;
