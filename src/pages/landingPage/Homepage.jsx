import React, {useEffect} from "react";
import {ReactComponent as BackgroundSvg} from "../../assets/svgs/backgroundimage.svg";
import {ReactComponent as LandingVehicle} from "../../assets/svgs/landing-vehicle.svg";
import {ReactComponent as Firs} from "../../assets/svgs/brands/firs.svg";
import {ReactComponent as Cheveron} from "../../assets/svgs/brands/cheveron.svg";
import {ReactComponent as Intel} from "../../assets/svgs/brands/intel.svg";
import {ReactComponent as Npa} from "../../assets/svgs/brands/npa.svg";
import {ReactComponent as Cbn} from "../../assets/svgs/brands/cbn.svg";
import {ReactComponent as Total} from "../../assets/svgs/brands/total.svg";
import {ReactComponent as Footer30Logo} from "../../assets/svgs/footer-30-logo.svg";
import {ReactComponent as FooterLogo} from "../../assets/svgs/footer-logo.svg";
import {ReactComponent as ArrowLeft} from "../../assets/svgs/arrow-left.svg";
import {ReactComponent as Strike} from "../../assets/svgs/strike.svg";
import {ReactComponent as AppStore} from "../../assets/svgs/app-store.svg";
import {ReactComponent as PlayStore} from "../../assets/svgs/play-store.svg";

import Family from '../../assets/images/family.png'
import Marine from '../../assets/images/marine.png'
import Motor from '../../assets/images/motor.png'
import MainBuilding from '../../assets/images/mainBuilding.png'
import Press from '../../assets/images/press1.png'
import Press2 from '../../assets/images/press2.png'
import Press3 from '../../assets/images/press3.png'
import {NavBar} from "../../components/hompeage/NavBar";
import {useHomePage} from "../../service/api/homepage.ts";

export function shortenSentence(sentence: string, wordLimit = 25) {
    if (sentence) {
        const words = sentence.split(' ');
        return words.length > wordLimit
            ? words.slice(0, wordLimit).join(' ') + '...'
            : sentence;
    } else return 'null';
}

export const Homepage = () => {
    const {getHomeBarner, getContact, getLogo, getService, getPartners, getPressRelease, data} = useHomePage()
    console.log(data)
    useEffect(() => {
        Promise.all([
            getHomeBarner(),
            getLogo(),
            getContact(),
            getPressRelease(),
            getService(),
            getPartners()

        ])
    }, []);
    return (<>
            <div className="h-screen flex flex-col items-center overflow-x-hidden">
                <NavBar />

                <section className="relative">
                    <div className="w-full flex overflow-hidden">
                        <BackgroundSvg/>
                    </div>

                    <div className="absolute h-full py-3 md:py-0 top-0 flex items-center justify-around w-full mx-auto">
                        <div className="flex flex-col gap-y-3 w-8/12 md:w-1/2">
                            <h1 className="font-bold  text-xl xl:text-4xl title-color">Motor Insurance</h1>
                            <p className="line title-color text-xs md:text-sm xl:text-lg">This is the most commonly
                                known
                                className of insurance for vehicle owners in respect of accidental loss or damage to the
                                insured’s vehicle, his legal liability to compensate third parties for bodily injury or
                                death and loss or damage to third party properties.</p>
                            <div className="md:pt-8 pt-1 block ">
                                <button id="getStarted"
                                        className="flex text-xs md:text-sm xl:text-lg items-center justify-center gap-3 text-white bg-custom-orange rounded py-1.5 px-2 xl:py-2.5 xl:px-4">
              <span>
                <ArrowLeft/>
              </span>
                                    <span>Get Started</span>
                                </button>
                            </div>
                        </div>
                        <div className="hidden md:flex justify-center">
                            <LandingVehicle/>
                        </div>
                    </div>
                </section>

                <section className="bg-custom-purple w-full py-7 md:my-0  my-5">
                    <div className="flex w-11/12 md:w-9/12 xl:w-7/12 justify-around mx-auto">
                        <div className="flex flex-col gap-y-2 items-center ">
                            <h1 className="text-white text-lg md:text-2xl xl:text-4xl">
                                34K +
                            </h1>
                            <p className="text-white text-xs md:text-sm xl:text-lg">Success Stories</p>
                        </div>
                        <div><span className=" bg-white block h-full" style={{width: "1px"}}></span></div>
                        <div className="flex flex-col gap-y-2 items-center ">
                            <h1 className="text-white text-lg md:text-2xl xl:text-4xl">
                                210 +
                            </h1>
                            <p className="text-white text-xs md:text-sm xl:text-lg">Professional Team</p>
                        </div>
                        <div><span className=" bg-white block h-full" style={{width: "1px"}}></span></div>
                        <div className="flex flex-col gap-y-2 items-center ">
                            <h1 className="text-white text-lg md:text-2xl xl:text-4xl">
                                54K +
                            </h1>
                            <p className="text-white text-xs md:text-sm xl:text-lg">Branches Nationwide</p>
                        </div>
                        <div><span className=" bg-white block h-full" style={{width: "1px"}}></span></div>
                        <div className="flex flex-col gap-y-2 items-center ">
                            <h1 className="text-white text-lg md:text-2xl xl:text-4xl">
                                34K +
                            </h1>
                            <p className="text-white text-xs md:text-sm xl:text-lg">Worldwide Clients</p>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col gap-y-7 py-8">
                    <div className="w-9/12 md:w-6/12 mx-auto flex flex-col gap-y-2 items-center text-center">
                        <h1 className="line text-custom-purple text-lg md:text-2xl xl:text-4xl text-center">
                            Need a cover as an individual
                            or corporate body?
                        </h1>
                        <p className="title-color text-xs md:text-sm xl:text-lg">
                            Our products are designed with you in mind. Enjoy access to personalized portfolios and a
                            variety of expert-crafted solutions. We provide a diverse range of products and services,
                            all tailored to meet your unique needs.
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-10 items-center">
                        <div className="flex flex-wrap md:flex-nowrap justify-center gap-5 w-11/12 xl:w-9/12 mx-auto">
                            {
                                data.service.map((services, index) => (
                                    <div key={index} className="card product w-1/3 md:w-1/4">
                                        <div>
                                            <img src={services.photo_file} alt="family" className="w-full"/>
                                        </div>
                                        <div className="px-3 py-4 pb-5 xl:pb-10 flex flex-col gap-y-5">
                                            <h1 className="xl:text-lg text-sm">{services.title}</h1>
                                            <p className="title-color font-light text-xs xl:text-sm ">
                                                {shortenSentence(services.details)}
                                            </p>
                                        </div>
                                    </div>

                                ))
                            }
                            {/*<div className="card product w-1/3 md:w-1/4">*/}
                            {/*    <div>*/}
                            {/*        <img src={Family} alt="family" className="w-full"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="px-3 py-4 pb-5 xl:pb-10 flex flex-col gap-y-5">*/}
                            {/*        <h1 className="xl:text-lg text-sm">Family Wellbeing Insurance </h1>*/}
                            {/*        <p className="title-color font-light text-xs xl:text-sm ">*/}
                            {/*            Accident could be an unfortunate misfortune in different forms. It is more*/}
                            {/*            worrisome when it concerns the continued existence of our loved ones living*/}
                            {/*            their daily normal life.*/}
                            {/*        </p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="card product w-1/3 md:w-1/4">*/}
                            {/*    <div>*/}
                            {/*        <img src={Marine} alt="marine" className="w-full"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="px-3 py-4 pb-5 xl:pb-10 flex flex-col gap-y-5">*/}
                            {/*        <h1 className="xl:text-lg text-sm">Marine Insurance </h1>*/}
                            {/*        <p className="title-color font-light text-xs xl:text-sm ">*/}
                            {/*            The insurance issued here is to provide indemnity for loss or damage to goods*/}
                            {/*            being conveyed by sea or air into or*/}
                            {/*            outside the country.*/}
                            {/*        </p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="card product w-1/3 md:w-1/4">*/}
                            {/*    <div>*/}
                            {/*        <img src={Motor} alt="motor" className="w-full"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="px-3 py-4 pb-5 xl:pb-10 flex flex-col gap-y-5">*/}
                            {/*        <h1 className="xl:text-lg text-sm">Motor Insurance </h1>*/}
                            {/*        <p className="title-color font-light text-xs xl:text-sm ">*/}
                            {/*            Accident could be an unfortunate misfortune in different forms. It is more*/}
                            {/*            worrisome when it concerns the continued existence of our loved ones living*/}
                            {/*            their daily normal life.*/}
                            {/*        </p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="card product w-1/3 md:w-1/4">*/}
                            {/*    <div>*/}
                            {/*        <img src={Family} alt="gas" className="w-full"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="px-3 py-4 pb-5 xl:pb-10 flex flex-col gap-y-5">*/}
                            {/*        <h1 className="xl:text-lg text-sm">Oil & Gas Insurance</h1>*/}
                            {/*        <p className="title-color font-light text-xs xl:text-sm ">*/}
                            {/*            Oil & Energy insurance can be defined as the insurance of all operations and*/}
                            {/*            assets relating to the exploration, exploitation, drilling, refining, storage*/}
                            {/*            and transportation of oil, gas or other energy resources.*/}
                            {/*        </p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div>
                            <p className="title-color font-light text-xs xl:text-sm ">Ready to explore? <span
                                className="underline">Browse all services</span></p>
                        </div>
                    </div>
                </section>

                <section className="flex w-full whychooseus">
                    <div className="hidden md:block md:w-1/2">
                        <img src={MainBuilding} alt="main building" className="h-full"/>
                    </div>
                    <div
                        className="w-9/12 md:w-6/12 xl:w-4/12 lg:mx-10 my-3 mx-0 flex flex-col gap-y-3 lg:gap-y-8 justify-center">
                        <div className="flex flex-col gap-y-5 md: text-center lg:text-start">
                            <p className="spacing xl:text-lg text-sm font-light text-custom-purple uppercase">
                                Why Choose Us
                            </p>
                            <h1 className="text-custom-purple text-2xl xl:text-4xl font-bold">
                                Why Sovereign Trust Stands Out in the Insurance Industry
                            </h1>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <div className="flex gap-4 h-full">
                                <div
                                    className="bg-custom-purple rounded flex flex-col justify-center items-center px-4 xl:px-6">
                                    <Strike/>
                                </div>
                                <div>
                                    <h1 className="xl:text-lg text-sm">
                                        Experience and Expertise
                                    </h1>
                                    <p className="text-xs xl:text-sm title-color">
                                        Aenean adipiscing amet dui cursus rhoncus nibh nec tortor fusce. Elementum dui
                                        tempor eget ac vitae hendrerit nisl. Erat id sit.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 h-full">
                                <div
                                    className="bg-custom-purple rounded flex flex-col justify-center items-center px-4 xl:px-6">
                                    <Strike/>
                                </div>
                                <div>
                                    <h1 className="xl:text-lg text-sm">
                                        Comprehensive Coverage
                                    </h1>
                                    <p className="text-xs xl:text-sm title-color">
                                        Aenean adipiscing amet dui cursus rhoncus nibh nec tortor fusce. Elementum dui
                                        tempor eget ac vitae hendrerit nisl. Erat id sit.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 h-full">
                                <div
                                    className="bg-custom-purple rounded flex flex-col justify-center items-center px-4 xl:px-6">
                                    <Strike/>
                                </div>
                                <div>
                                    <h1 className="xl:text-lg text-sm">
                                        Customer-Centric Approach
                                    </h1>
                                    <p className="text-xs xl:text-sm title-color">
                                        Aenean adipiscing amet dui cursus rhoncus nibh nec tortor fusce. Elementum dui
                                        tempor eget ac vitae hendrerit nisl. Erat id sit.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="flex flex-col gap-y-3 xl:gap-y-6 text-center py-6 xl:py-12">
                    <h1 className="title-color font-light uppercase xl:text-lg text-sm">Trusted by leading brands</h1>
                    <p className="title-color xl:text-lg text-sm">
                        We are catalysts for change, trusted by customers ranging
                        from individuals to leading industry players.
                    </p>
                    <div className="flex w-full pt-5">
                        {
                            data.partners.map((image, index) => (
                                <div>
                                    <img src={image.photo_file} alt={index} key={index}/>
                                </div>
                            ))
                        }
                        {/*<div>*/}
                        {/*    <Firs/>*/}
                        {/*</div>*/}

                        {/*<div>*/}
                        {/*    <Cheveron/>*/}
                        {/*</div>*/}

                        {/*<div>*/}
                        {/*    <Intel/>*/}
                        {/*</div>*/}

                        {/*<div>*/}
                        {/*    <Npa/>*/}
                        {/*</div>*/}

                        {/*/!*cbn logo*!/*/}
                        {/*<div>*/}
                        {/*    <Cbn/>*/}
                        {/*</div>*/}

                        {/*/!*total logo*!/*/}
                        {/*<div>*/}
                        {/*    <Total/>*/}
                        {/*</div>*/}
                    </div>
                </section>

                <section className="flex flex-col gap-y-7 py-8" style={{backgroundColor: "#E9EAED"}}>
                    <div className="w-9/12 md:w-6/12 mx-auto flex flex-col gap-y-2 items-center text-center">
                        <p className="spacing font-light text-custom-purple uppercase xl:text-lg text-sm">
                            Press Releases
                        </p>
                        <p className="title-color xl:text-lg text-sm">
                            Explore our latest stories, company updates, videos, and news coverage about us and our
                            subsidiaries. Stay informed by signing up for email alerts.
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-10 items-center">
                        <div
                            className="flex justify-center md:justify-start flex-wrap md:flex-nowrap gap-5 md:gap-5 w-11/12 xl:w-10/12 mx-auto">
                            {
                                data.pressRelease.map((news, index) => (
                                <div key={index} className="card product w-5/12 md:w-1/3">
                                <div>
                                <img src={news.photo_file} alt="family" className="w-full"/>
                    </div>
                    <div className="px-3 py-4 pb-5 xl:pb-10 flex flex-col gap-y-5">
                        <p className="text-xs xl:text-sm font-light text-custom-purple uppercase">
                            {news.date}
                        </p>
                        <h1 className="title-color font-bold text-sm xl:text-lg">{news.title} </h1>
                        <p className="title-color font-light text-xs xl:text-sm ">
                            {shortenSentence(news.details)}
                        </p>
                        <p className="text-red-500 cursor-pointer text-xs xl:text-sm">
                            Read More ...
                        </p>
                    </div>
            </div>

            ))
                            }
                            {/*<div className="card product w-5/12 md:w-1/3">*/}
                            {/*    <div>*/}
                            {/*        <img src={Press} alt="family" className="w-full"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="px-3 py-4 pb-5 xl:pb-10 flex flex-col gap-y-5">*/}
                            {/*        <p className="text-xs xl:text-sm font-light text-custom-purple uppercase">*/}
                            {/*            02 December 2024*/}
                            {/*        </p>*/}
                            {/*        <h1 className="title-color font-bold text-sm xl:text-lg">STI PLC Set September 27*/}
                            {/*            Date*/}
                            {/*            For 23rd AGM, Grows PAT By 569% </h1>*/}
                            {/*        <p className="title-color font-light text-xs xl:text-sm ">*/}
                            {/*            Sovereign Trust Insurance Plc has announced that its 23rd Annual General Meeting*/}
                            {/*            will hold on Thursday.......*/}
                            {/*        </p>*/}
                            {/*        <p className="text-red-500 cursor-pointer text-xs xl:text-sm">*/}
                            {/*            Read More ...*/}
                            {/*        </p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="card product w-5/12 md:w-1/3">*/}
                            {/*    <div>*/}
                            {/*        <img src={Press2} alt="marine" className="w-full"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="px-3 py-4 pb-5 xl:pb-10 flex flex-col gap-y-5">*/}
                            {/*        <p className="text-xs xl:text-sm font-light text-custom-purple uppercase">*/}
                            {/*            02 December 2024*/}
                            {/*        </p>*/}
                            {/*        <h1 className="title-color font-bold text-sm xl:text-lg">STI Promotes Academic*/}
                            {/*            Excellence In Primary Schools - Donates School Bags Et All </h1>*/}
                            {/*        <p className="title-color font-light text-xs xl:text-sm ">*/}
                            {/*            Sovereign Trust Insurance Plc recently demonstrated another noble gesture in*/}
                            {/*            line with its Corporate Social Responsibility by giving out school bags*/}
                            {/*        </p>*/}
                            {/*        <p className="text-red-500 cursor-pointer text-xs xl:text-sm">*/}
                            {/*            Read More ...*/}
                            {/*        </p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="card product w-5/12 md:w-1/3">*/}
                            {/*    <div>*/}
                            {/*        <img src={Press3} alt="motor" className="w-full"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="px-3 py-4 pb-5 xl:pb-10 flex flex-col gap-y-5">*/}
                            {/*        <p className="text-xs xl:text-sm font-light text-custom-purple uppercase">*/}
                            {/*            02 December 2024*/}
                            {/*        </p>*/}
                            {/*        <h1 className="title-color font-bold text-sm xl:text-lg">2022 Sovereign Trust*/}
                            {/*            Insurance*/}
                            {/*            Financial Condition Report</h1>*/}
                            {/*        <p className="title-color font-light text-xs xl:text-sm ">*/}
                            {/*            Click here to view the Financial Condition Report for 2022*/}
                            {/*        </p>*/}
                            {/*        <p className="text-red-500 cursor-pointer text-xs xl:text-sm">*/}
                            {/*            Read More ...*/}
                            {/*        </p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div>
                            <p className="title-color font-light text-xs xl:text-sm">Ready to explore? <span
                                className="underline">Browse all press release</span></p>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col justify-center items-center py-8">
                    <div className="w-10/12 bg-custom-purple rounded-xl  text-center">
                        <div className="  flex py-12 w-10/12 mx-auto flex-col justify-center items-center gap-5">
                            <h1 className="text-xl xl:text-3xl font-bold text-white">Since 1995… we've got you
                                covered</h1>
                            <p className="spacing text-xs xl:text-sm text-custom-grey">For nearly three decades, we've
                                delivered trusted solutions, tailored to your needs. Experience reliability and
                                innovation with a name you can trust.</p>
                            <button className="bg-white rounded-full px-5 py-3 w-fit text-sm xl:text-lg"
                                    style={{width: "fit-content"}}>
                                Join Our Team
                            </button>
                        </div>
                    </div>
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
