import React from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const ModalFinish = ({ show, onClose }) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Поздравляем!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Вы успешно оформили заказ</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
ModalFinish.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func
};
export default ModalFinish;
