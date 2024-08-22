import { useState } from "react";
import style from "./style.module.scss";
import { Modal, Table } from "react-bootstrap";
import { BiX } from "react-icons/bi";

const PromoCodeModal = ({ modalShow, setModalShow }) => {
  const handleClose = () => {
    setModalShow(false);
  };
  return (
    <>
      {" "}
      <Modal size="sm" centered show={modalShow} className={"history-modal"}>
        <Modal.Header className="bg-dark p-0">
          <Modal.Title className="flex-fill">
            <div className={"modal-bid-history-title-content"}>
              <div className={"modal-bid-history-title"}>Add promo code</div>
              <div className={"modal-bid-history-filter"}>
                <BiX
                  role="button"
                  style={{ color: "#fff" }}
                  size={25}
                  onClick={handleClose}
                />
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table responsive="lg" className={`mb-0 ${"history-table-expand"}`}>
            sss
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PromoCodeModal;
