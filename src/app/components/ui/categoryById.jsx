import React from "react";
import PropTypes from "prop-types";
import { catalog } from "../../mockData/catalog";
// import { useSelector } from "react-redux";
// import {
// getProfessionById,
//  getProfessionsIoadingStatus
// } from "../../store/professions";

const CategoryById = ({ id }) => {
    // const isLoading = useSelector(getProfessionsIoadingStatus());
    // const prof = useSelector(getProfessionById(id));
    const category = catalog.find(
        (cat) => JSON.stringify(cat._id) === JSON.stringify(id)
    );

    // if (isLoading) return "Loading....";
    return <p>{category.name}</p>;
};
CategoryById.propTypes = {
    id: PropTypes.string
};

export default CategoryById;
