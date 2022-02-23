import React from "react";
import { useHistory } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// import { getCurrentUserData, updateUser } from "../../../../store/users";
import { catalog } from "../../../../mockData/catalog";
import { goods } from "../../../../mockData/goods";
import useForm from "../../../../hooks/useForm";
import FormOfProduct from "../../../ui/formOfProduct";

const UserPageEdit = () => {
    const history = useHistory();
    // const dispatch = useDispatch();
    // const [isLoading, setLoading] = useState(true);

    // const currentUser = useSelector(getCurrentUserData());

    // const professions = useSelector(getProfessions());
    //const isLoadingProf = useSelector(getProfessionsIoadingStatus());
    const currentProduct = goods.find(
        (product) =>
            JSON.stringify(product._id) ===
            JSON.stringify(localStorage.getItem("currentProduct"))
    );
    const [{ data, errors, isValid }, onChange] = useForm(currentProduct);
    // useEffect(() => {
    //     if (currentProduct) {
    //         setData({
    //             ...currentProduct
    //         });
    //     }
    // }, [data]);

    const catalogList = catalog.map((с) => ({
        label: с.name,
        value: с._id
    }));

    const handleBack = () => {
        history.push(`/admin/${currentProduct._id}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValid) return;
        // const newData = {
        //     ...data
        // };

        // dispatch(updateUser(newData));
        console.log(data);
    };

    return (
        <div className="container mt-5">
            <button onClick={handleBack} className="btn btn-primary">
                <i className="bi bi-caret-left me-1"></i>
                Назад
            </button>
            <div className="row">
                <div className="col-md-8 offset-md-3 shadow p-4">
                    <h3 className="mb-4">Изменение данных о товаре</h3>
                    <FormOfProduct
                        onSubmit={handleSubmit}
                        data={data}
                        errors={errors}
                        isValid={isValid}
                        onChange={onChange}
                        catalogList={catalogList}
                    />

                    <button
                        type="submit"
                        className="btn btn-primary w-100 mx-auto"
                        disabled={!isValid}
                        onClick={handleSubmit}
                    >
                        Обновить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserPageEdit;
