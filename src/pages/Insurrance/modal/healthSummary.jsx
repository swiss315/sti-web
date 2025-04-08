import {useNavigate} from "react-router-dom";
import {useBuyHealthPolicy} from "../../../hooks/buyHealthPolicy";
import Modal from "react-bootstrap/Modal";
import Loader from "../../../components/Loader";
import React, {useRef} from "react";

export default function HealthSummary(props) {
    const navigate = useNavigate();
    const {isLoading, confirmPayment, postInitializePayment} = useBuyHealthPolicy();
    // const [reference, setReference] = useState(null);
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


    const getHospital = (data) => {
        return props.data.hospital.find(policy => policy.id.toString() === data)?.name || "";
    }

    const getPolicyName = (data) => {
        return props.data.policyType.find(policy => policy.id.toString() === data)?.name || "";
    }

    const submitConfirmPayment = async (reference) => {
        if (hasSubmittedRef.current) return; // Prevent double execution
        hasSubmittedRef.current = true;
        const payload = {
            quote_id: props.quote?.id,
            reference: reference
        }
        const res = await confirmPayment(payload);
        if (res) {
            navigate('/health')
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
                        <p>{getPolicyName(props.individual.policy_type_id)}</p>
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
                        <p>Hospital</p>
                        <p>{getHospital(props.individual.hospital_id)}</p>
                    </div>
                    <div className="summary-list">
                        <p>Premium Payable</p>
                        <p>{props.quote?.total}</p>
                    </div>
                    <button onClick={handlePaymentInitialization} className="summary-button">
                        {isLoading ? <Loader/> : 'submit'}
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    );
}
