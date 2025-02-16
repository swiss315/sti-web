import React from "react";
import {ReactComponent as ArrowLeft} from "../../assets/svgs/arrow-left.svg";
import {ReactComponent as CustomerService} from "../../assets/svgs/customer_service.svg";
import {ReactComponent as Innovation} from "../../assets/svgs/innovation.svg";
import {ReactComponent as Professionalism} from "../../assets/svgs/professionalism.svg";
import {ReactComponent as TeamSpirit} from "../../assets/svgs/team-spirit.svg";
import {ReactComponent as Empathy} from "../../assets/svgs/empathy.svg";
import {ReactComponent as Integerity} from "../../assets/svgs/integerity.svg";
import {ReactComponent as Objectives} from "../../assets/svgs/objectives.svg";

import {ReactComponent as Footer30Logo} from "../../assets/svgs/footer-30-logo.svg";
import {ReactComponent as FooterLogo} from "../../assets/svgs/footer-logo.svg";
import {ReactComponent as AppStore} from "../../assets/svgs/app-store.svg";
import {ReactComponent as PlayStore} from "../../assets/svgs/play-store.svg";
import WhoWeAreImg from "../../assets/images/WhoWeAre-img.png";
import {NavBar} from "../hompeage/NavBar";
import {Link} from "react-router-dom";

export const WhoWeAre = () => {
    return (
        <>
        <div className="h-screen flex flex-col items-center overflow-x-hidden">
            <NavBar/>

            {/*Who we are*/}
            <section className={'w-full text-center'}>
               <h1 className={'text-custom-primary font-bold'}>Who We Are</h1>

                <div className={'flex w-10/12 justify-evenly items-center mx-auto gap-10'}>
                    <div className="relative bg-custom-primary w-fit rounded-xl ">
                        <div className="relative left-7 top-7 w-full">
                            <img src={WhoWeAreImg} alt="placeholder" className="w-full"/>
                        </div>
                    </div>

                    <div className={'text-start w-7/12 '}>
                        <h1 className={'text-lg text-custom-primary font-bold'}>
                            Welcome to Sovereign Trust Insurance Plc
                        </h1>
                        <p className={'line'}>
                            Sovereign Trust Insurance Plc commenced business in January 1995 following the restructuring
                            and recapitalization of the then Grand Union assurances Limited. We operate currently
                            through a network of branches Nationwide with our Head Office on 17, Adetokunbo Ademola
                            Street, VI, Lagos. The company is licensed as an insurer by the Federal Government with
                            authority to underwrite all Classes of Non-Life business. Currently our authorized share
                            capital is N5.25Billion divided into 10.5 billion units of 50 kobo per share. We have a
                            fully paid-up capital and Shareholders' funds of over N3.4 Billion. The ownership of the
                            company is made up of diverse shareholders from different walks of life.
                        </p>
                        <div className="md:pt-8 pt-3 block ">
                            <Link to={'chairman-speech'} id="getStarted"
                                    className="flex w-fit text-xs md:text-sm xl:text-sm items-center justify-center gap-3 text-white no-underline bg-custom-orange rounded py-1.5 px-2 xl:py-2.5 xl:px-4">
                                  <span>
                                    <ArrowLeft/>
                                  </span>
                                <span>Get In Touch</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>


            <section className={'w-full flex items-center my-20'}>
                <div className={'px-10'}>
                    <div className={'flex flex-col gap-y-5'}>
                        <div className="flex flex-col  w-fit">
                            <h1 className=" font bold text-sm md:text-lg xl:text-xl text-custom-primary">Mission</h1>
                            <span className=" h-1.5 rounded-full bg-custom-orange block w-full"
                                  ></span>
                        </div>
                        <p className={'text-sm'}>
                            To enhance the everyday life of our customers through innovative insurance and financial
                            services while creating exceptional value for our shareholders
                        </p>
                    </div>
                    <div className={'flex flex-col gap-y-5'}>
                        <div className="flex flex-col w-fit">
                            <h1 className=" font bold text-sm md:text-lg xl:text-xl text-custom-primary">Vision</h1>
                            <span className=" h-1.5 rounded-full bg-custom-orange block w-full"
                            ></span>
                        </div>
                        <p className={'text-sm'}>
                            To be a leading brand providing insurance and financial services of global standards.
                        </p>
                    </div>
                </div>
                <div className={'py-5 px-9 rounded bg-[#E9EAED]'}>
                    <h1 className={'text-xl pb-5'}>
                        Our core values are
                    </h1>
                    <div className={'flex flex-wrap gap-20 justify-evenly '}>
                        <div className={'flex flex-col items-center gap-y-3'}>
                            <CustomerService/>
                            <p className={'text-sm'}>Superior Customer Services</p>
                        </div>
                        <div className={'flex flex-col items-center gap-y-3'}>
                            <Innovation/>
                            <p className={'text-sm'}>Superior Customer Services</p>
                        </div>
                        <div className={'flex flex-col items-center gap-y-3'}>
                            <Professionalism/>
                            <p className={'text-sm'}>Superior Customer Services</p>
                        </div>
                        <div className={'flex flex-col items-center gap-y-3'}>
                            <TeamSpirit/>
                            <p className={'text-sm'}>Superior Customer Services</p>
                        </div>
                        <div className={'flex flex-col items-center gap-y-3'}>
                            <Empathy/>
                            <p className={'text-sm'}>Superior Customer Services</p>
                        </div>
                        <div className={'flex flex-col items-center gap-y-3'}>
                            <Integerity/>
                            <p className={'text-sm'}>Superior Customer Services</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className={'w-10/12 py-4'}>
                <h1 className={'text-custom-primary text-2xl font-bold text-center py-4'}>
                    Objectives
                </h1>
                <div className={'flex items-center'}>
                    <div className="text-sm w-1/2">
                        <p>It is the intention of the company to achieve the following key objectives:</p>
                        <ul className="list-disc ml-3 space-y-3 leading-10">
                            <li>
                                To be a highly professional organization providing unique risk management services as
                                well as improved claims settlement procedures.
                            </li>
                            <li>
                                To achieve a leadership position in the market within the shortest possible time in line
                                with the company's strategic focus.
                            </li>
                            <li>
                                To consistently exploit the under-developed areas of the market by creating innovative
                                products to meet customers' needs.
                            </li>
                            <li>
                                To continuously motivate and enhance the quality of the company's human resources
                                through the development of a well-articulated training and welfare program.
                            </li>
                            <li>
                                To be a highly professional organization providing unique risk management services as
                                well as improved claims settlement procedures.
                            </li>
                            <li>
                                To be a highly profitable organization that would consistently provide satisfactory
                                returns on investment for our shareholders.
                            </li>
                        </ul>
                    </div>
                    <div className={'w-1/2 flex justify-center'}>
                        <Objectives/>
                    </div>
                </div>
                <p className={'leading-10 text-sm'}>
                    To achieve these objectives, we have assembled a vibrant and purposeful management team made up of
                    highly experienced and result-oriented professionals who are fully poised and determined to
                    contribute meaningfully towards the upliftment of insurance practice in Nigeria. We are also fully
                    computerised and maintain a good cash reserve for claims settlement.
                </p>
            </section>


            <section className="">
                <div className="whychooseus py-10">
                    <div
                        className="flex gap-y-3 flex-wrap lg:justify-start justify-around footer w-11/12 mx-auto title-color">
                        <div className=" w-1/3 lg:w-1/4">
                            <div>
                                <FooterLogo/>
                            </div>
                            <p className="spacing text-xs xl:text-sm title-color">
                                Sovereign Trust Insurance Plc commenced business in January 1995 following the
                                restructuring and recapitalization of the then Grand Union assurances Limited.
                            </p>
                        </div>
                        <div className="w-1/3 lg:w-1/4 px-3">
                            <div className="flex flex-col gap-y-1">
                                <h1 className="title-color font bold text-sm md:text-lg xl:text-xl">Insurance
                                    Products</h1>
                                <span className=" h-1.5 rounded-full bg-custom-orange block"
                                      style={{width: "5%"}}></span>
                            </div>
                            <div>
                                <ul className="text-xs xl:text-sm py-2">
                                    <li>Motor Insurance</li>
                                    <li>Family Wellbeing Insurance</li>
                                    <li>Marine Insurance</li>
                                    <li>Easy Travel Insurance Cover</li>
                                    <li>Contractors All Risk</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-1/3 lg:w-1/4">
                            <div className="flex flex-col gap-y-1">
                                <h1 className="title-color font bold text-sm md:text-lg xl:text-xl">Insurance
                                    Products</h1>
                                <span className=" h-1.5 rounded-full bg-custom-orange block"
                                      style={{width: "5%"}}></span>
                            </div>
                            <div>
                                <ul className="text-xs xl:text-sm py-2">
                                    <li>All Risk Insurance</li>
                                    <li>Aviation Insurance</li>
                                    <li>Burglary House Breaking Insurance</li>
                                    <li>Consequential Loss Insurance</li>
                                    <li>Fire & Extraneous Perils Insurance</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-1/3 lg:w-1/4">
                            <div className="flex flex-col gap-y-1">
                                <h1 className="title-color font bold text-sm md:text-lg xl:text-xl">Get in
                                    Touch</h1>
                                <span className=" h-1.5 rounded-full bg-custom-orange block"
                                      style={{width: "5%"}}></span>
                            </div>
                            <div className="title-color flex flex-col gap-y-2">
                                <p className="title-color xl:text-lg text-sm">
                                    07000784752, 09085689063
                                </p>
                                <p className="text-xs xl:text-sm">
                                    17, Adetokunbo Ademola Street, Victoria Island, Lagos, Nigeria.
                                </p>
                                <p className="text-xs xl:text-sm">
                                    info@stiplc.com
                                </p>
                                <div className="flex gap-3">
                                    <div>
                                        <AppStore/>
                                    </div>
                                    <div>
                                        <PlayStore/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:w-full w-2/3 px-6 lg:px-0">
                            <div className=" flex flex-col md:flex-row ml-auto w-full lg:w-5/12 pt-3">
                                <div className="w-full md:w-1/3">
                                    <div className="flex flex-col gap-y-1">
                                        <h1 className="title-color font bold text-lg xl:text-xl">
                                            Whistle Blowing
                                        </h1>
                                        <span className=" h-1.5 rounded-full bg-custom-orange block"
                                              style={{width: "5%"}}></span>
                                    </div>
                                    <p className="spacing text-xs cursor-pointer text-custom-orange">
                                        Click here to blow a whistle
                                    </p>
                                </div>
                                <div className="w-2/3">
                                    <div className="w-full">
                                        <Footer30Logo/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-custom-purple w-full">
                    <div
                        className=" flex justify-between w-10/12  mx-auto text-white items-center text-xs lg:text-sm py-2">
                        <p>
                            © Sovereign Trust Insurance 2024. All right reserved.
                        </p>
                        <div className="text-white text-xs lg:text-sm">
                            <p>
                                Webmail
                            </p>
                            <p>
                                Privacy Policy
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </>)
}
