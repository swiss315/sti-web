import Modal from "react-bootstrap/Modal";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Loader from "../../../components/Loader";

export  default function PlateNumberDetails(props) {
    const [plateNumber, setPlateNumber] = useState('');
    const navigate = useNavigate();
    const [loading, setIsloading] = useState(false);

    const handleClose = () => {
        navigate(-1); // Navigates back instead of just closing the modal
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsloading(true)
        console.log('Plate Number', plateNumber)
        const payload = {
            plate_number: plateNumber
        }
        await props.getDetails(payload);
        setIsloading(false);
    }
    return (
        <Modal
            {...props}
            size="xs"
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Enter Plate Number
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div>
                        <input type={"text"} onChange={(e) => setPlateNumber(e.target.value)} className={'w-full border rounded py-2.5'} />
                    </div>
                    <button onClick={handleSubmit} className="summary-button">
                        {loading ? <Loader/> : 'Submit'}
                    </button>
                </form>
            </Modal.Body>
        </Modal>
    );
}
