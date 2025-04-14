import Modal from "react-bootstrap/Modal";
import React from "react";
import {ReactComponent as CloseIcon} from "../../../assets/icons/closeicon.svg";

export default function HealthDetails(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className={'flex justify-end py-2.5'}>
                    <CloseIcon onClick={props.close} className={'text-black fill-current cursor-pointer'}/>
                </div>
                <div className="flex justify-between p-2.5 items-center">
                    <p className="text-green-500 font-bold">Policy Details</p>

                    <div className=" lg:w-10/12">
                        <hr className="mt-2"/>
                        <hr className="mt-2"/>
                        <hr className="mt-2 border-green-500 bg-green-500 border-2"/>
                    </div>
                </div>
                <div className="pt-6 relative metaData_container">
                    <div className="flex flex-wrap justify-between p-2.5">
                        <div>
                            <label>Hospital</label>
                            <p className="font-semibold">{props.data?.quote?.hospital_id}</p>
                        </div>
                        <div>
                            <label>Name</label>
                            <p className="font-semibold">{props.data?.quote?.customer.lastname + " " + props.data?.quote?.customer.firstname}</p>
                        </div>
                        <div>
                            <label>dob</label>
                            <p className="font-semibold">{props.data?.quote?.customer.dob || 'nill'}</p>
                        </div>
                        <div>
                            <label>Email</label>
                            <p className="font-semibold">{props.data?.quote?.customer.email}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between p-2.5">
                        <div>
                            <label>Address</label>
                            <p className="font-semibold">{props.data?.quote?.customer.address || 'nil'}</p>
                        </div>
                        <div>
                            <label>Occupation</label>
                            <p className="font-semibold">{props.data?.quote?.occupation}</p>
                        </div>

                        <div>
                            <label>Country</label>
                            <p className="font-semibold">{props.data?.quote?.nationality}</p>
                        </div>
                        <div>
                            <label>Blood group</label>
                            <p className="font-semibold">{props.data?.quote?.blood_group}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between p-2.5">
                        <div>
                            <label>Plan</label>
                            <p className="font-semibold">{props.data?.quote?.policy_type.name}</p>
                        </div>
                        <div>
                            <label>Marital Status</label>
                            <p className="font-semibold">{props.data?.quote?.marital_status}</p>
                        </div>
                        <div>
                            <label>Genotype</label>
                            <p className="font-semibold">{props.data?.quote?.genotype}</p>
                        </div>
                        <div>
                            <label>Medical History</label>
                            <p className="font-semibold">{props.data?.quote?.medical_history}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-start p-2.5">
                        <div>
                            <label>Employer</label>
                            <p className="font-semibold">{props.data?.quote?.lga_of_residence}</p>
                        </div>


                    </div>
                    <hr className="p-2.5"/>
                    <section className="w-10/12">
                        <div>
                            <p className=" underline text-blue-400 cursor-pointer">View Certificate</p>
                        </div>
                    </section>
                </div>
            </Modal.Body>
        </Modal>
    );
}
