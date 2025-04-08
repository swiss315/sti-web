import Modal from "react-bootstrap/Modal";
import React from "react";
import {useTravelpolicy} from "../../../hooks/buy_travelpolicy";
import {useNavigate} from "react-router-dom";
import Loader from "../../../components/Loader";

export default function TravelSummary (props) {
    const navigate = useNavigate();
    const {postInitializePayment, confirmPayment, isLoading} = useTravelpolicy()

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
                customer: {name: "Demo Customer", email: "sam@sam.com"},
                containerId: "payment-container",
                reference: reference,
                metadata: {tester: "Me"},

                onSuccess: async function (data) {
                    console.log("Payment Success:", data);
                    await submitConfirmPayment(reference);
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

        const payload = {
            quote_id: props.quote?.id,
            reference: reference
        }
        const res = await confirmPayment(payload);
        if (res) {
            navigate('/travel')
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
                        <p>Date of Commencement</p>
                        <p>{props.individual.date_of_commencement}</p>
                    </div>
                    <div className="summary-list">
                        <p>Duration of Trip</p>
                        <p>{props.traveldata.trip_duration}</p>
                    </div>
                    <div className="summary-list">
                        <p>Mode of Travel</p>
                        <p>{props.traveldata.travel_mode}</p>
                    </div>
                    <div className="summary-list">
                        <p>Place of Departure</p>
                        <p>{props.traveldata.departure}</p>
                    </div>
                    <div className="summary-list">
                        <p>Place of Arrival</p>
                        <p>{props.traveldata.arrival}</p>
                    </div>
                    <div className="summary-list">
                        <p>Address at Country of Visit</p>
                        <p>{props.traveldata.visitation_address}</p>
                    </div>
                    <div className="summary-list">
                        <p>Premium Payable</p>
                        <p>{props.quote.total}</p>
                    </div>
                    <button className="summary-button" onClick={handlePaymentInitialization}>
                        {isLoading ? <Loader/> : 'Submit'}
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    );
}
