import Modal from "react-bootstrap/Modal";
import React, {useRef} from "react";
import {useRiskPolicy} from "../../../hooks/buy_allriskpolicy";
import {useNavigate} from "react-router-dom";
import Loader from "../../../components/Loader";

export default function AllRiskSummary(props) {
    const navigate = useNavigate();
    const {isLoading, postInitializePayment, confirmPayment} = useRiskPolicy();
    const hasSubmittedRef = useRef(false);

    const handlePaymentInitialization = async () => {
        try {
            const payload = {
                quote_id: props.quote?.id
            }
            const {success, data} = await postInitializePayment(payload)
            console.log(success, data, 'response')
            if (success) {
                const paymentDetails = data.sarepaykey
                console.log(paymentDetails["public-key"], 'paymentDetails["public-key"]')
                props.onHide()
                await handlePayment(
                    paymentDetails["public-key"],
                    paymentDetails.token,
                    data.reference,
                    data.total
                )
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handlePayment = (key, token, reference, total) => {
        console.log("Launching actual modal");

        if (window.Sarepay) {
            window.Sarepay.initialize({
                key: key,
                token: token,
                amount: total,
                currency: "NGN",
                feeBearer: "merchant",
                customer: {name: "Paddycover", email: props.individual.email},
                containerId: "payment-container",
                reference: reference,
                metadata: {tester: "Me"},
                onClose: function () {
                    console.log("😩, you are gone");
                },
                onSuccess: function (data) {
                    console.log("Payment Success:", data);
                    submitConfirmPayment(reference);
                },
                onFailed: function (data) {
                    console.log("Payment Failed:", data);
                },
            });
        } else {
            console.error("Sarepay not available on window.");
        }
    };


    const submitConfirmPayment = async (reference) => {
        if (hasSubmittedRef.current) return; // Prevent double execution
        hasSubmittedRef.current = true;
        const payload = {
            quote_id: props.quote?.id,
            reference: reference
        }
        const res = await confirmPayment(payload);
        if (res) {
            navigate('/risk')
        }
    }

    return (
        <Modal
            {...props}
            size="xs"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Summary
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className="summary-list">
                        <p>Insurance Type</p>
                        <p>{props.type?.name}</p>
                    </div>
                    <div className="summary-list">
                        <p>First Name</p>
                        <p>{props.individual.first_name}</p>
                    </div>
                    <div className="summary-list">
                        <p>Last Name</p>
                        <p>{props.individual.last_name}</p>
                    </div>
                    <div className="summary-list">
                        <p>Phone No</p>
                        <p>{props.individual.phone}</p>
                    </div>
                    <div className="summary-list">
                        <p>Premium Payable</p>
                        <p>{props.quote.total}</p>
                    </div>
                    <button onClick={handlePaymentInitialization} className="summary-button">
                        {isLoading ? <Loader/> : 'submit'}
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    );
}
