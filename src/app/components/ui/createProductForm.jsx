import React from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import { catalog } from "../../mockData/catalog";
import FormOfProduct from "./formOfProduct";

const CreateProductForm = ({ show, onClose }) => {
    const [{ data, errors, isValid }, onChange] = useForm({
        name: "",
        group: "",
        price: 0,
        image: "",
        amount: 0,
        rate: "",
        description: ""
    });

    const catalogList = catalog.map((с) => ({
        label: с.name,
        value: с._id
    }));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValid) return;
        // dispatch(createProduct(data))
        console.log(data);
        onClose();
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title className="text-center">Добавить новый товар</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormOfProduct
                    onSubmit={handleSubmit}
                    data={data}
                    errors={errors}
                    isValid={isValid}
                    onChange={onChange}
                    catalogList={catalogList}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Отмена
                </Button>
                <Button
                    disabled={!isValid}
                    variant="primary"
                    onClick={handleSubmit}
                >
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

CreateProductForm.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default CreateProductForm;
