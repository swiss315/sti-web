import Modal from "react-bootstrap/Modal";
import React from "react";
import {ReactComponent as CloseIcon} from "../../../assets/icons/closeicon.svg";
import {formatAmount} from "../../../utils/formatAmount";

export default function VehicleDetails(props) {

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
                    <p className="text-[#011152] font-bold">Policy Details</p>

                    <div className=" lg:w-10/12">
                        <hr className="mt-2"/>
                        <hr className="mt-2"/>
                        <hr className="mt-2 border-[#011152]  border-2"/>
                    </div>
                </div>
                <div className="pt-6 relative metaData_container">
                    <div className="flex flex-wrap justify-between p-2.5">
                        <div>
                            <label>Vehicle Make</label>
                            <p className="font-semibold">{props.data?.quote?.make_id}</p>
                        </div>
                        <div>
                            <label>Vehicle Model</label>
                            <p className="font-semibold">{props.data?.quote?.model_id}</p>
                        </div>
                        <div>
                            <label>Vehicle Value</label>
                            <p className="font-semibold">{formatAmount(props.data?.quote?.vehicle_value) || 'nill'}</p>
                        </div>
                        <div>
                            <label>Plate Number</label>
                            <p className="font-semibold">{props.data?.quote?.license}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between p-2.5">
                        <div>
                            <label>Engine Number</label>
                            <p className="font-semibold">{props.data?.quote?.engine_number || 'nil'}</p>
                        </div>
                        <div>
                            <label>Chasis No</label>
                            <p className="font-semibold">{props.data?.quote?.chasis_number}</p>
                        </div>

                        <div>
                            <label>Vehicle Class</label>
                            <p className="font-semibold">{props.data?.quote?.usage_id}</p>
                        </div>
                        <div>
                            <label>Vehicle Usage</label>
                            <p className="font-semibold">{props.data?.quote?.usage_id}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between w-1/2 p-2.5">
                        <div>
                            <label>Vehicle Color</label>
                            <p className="font-semibold">{props.data?.quote?.vehicle_color}</p>
                        </div>
                        <div>
                            <label>Year of Make</label>
                            <p className="font-semibold">{props.data?.quote?.year}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-start p-2.5">
                        <div>
                            <label>Premium</label>
                            <p className="font-semibold">{formatAmount(props.data?.quote?.total)}</p>
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
