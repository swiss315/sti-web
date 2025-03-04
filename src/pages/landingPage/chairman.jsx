import React, {useEffect} from "react";
import {ReactComponent as BigLogo} from "../../assets/svgs/big-logo.svg";
import {ReactComponent as Footer30Logo} from "../../assets/svgs/footer-30-logo.svg";
import {ReactComponent as FooterLogo} from "../../assets/svgs/footer-logo.svg";
import {ReactComponent as AppStore} from "../../assets/svgs/app-store.svg";
import {ReactComponent as PlayStore} from "../../assets/svgs/play-store.svg";
import {NavBar} from "../../components/hompeage/NavBar";
// import {ChairmanSpeech} from "../../components/aboutUs/chaimanSpeech";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
// import {InternationalHighlight} from "../../components/aboutUs/internationalHighlight";
// import {ReAssuranceTreaty} from "../../components/aboutUs/reinsurance";
// import {BoardOfDirectors} from "../../components/aboutUs/boardOfDirectors";
// import {Management} from "../../components/aboutUs/management";
// import {WhoWeAre} from "../../components/aboutUs/whoweare";
import {useHomePage} from "../../service/api/homepage.ts";

export const ChairmanStatement = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;
    let lastPart: string = path.split('/').pop();
    lastPart = decodeURIComponent(lastPart);
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    console.log(lastPart, id)

//     const titleMap = {
//         'who-we-are': 'Who we are',
//         'chairman-speech': 'Chairman’s Statement',
//         'international-highlight': 'International Statements',
//         'financial-highlight': 'Financial Highlights',
//         'reinsurance-treaty': 'Reinsurance Treaty Cover',
//         'board-of-directors': 'Board Of Directors',
//         'management': 'Management',
//         'our-client': 'Our Client',
//     };
//
//
//     const getComponent = (name) => {
//     switch (name) {
//         case 'who-we-are':
//             return <WhoWeAre />;
//         case 'chairman-speech':
//             return <ChairmanSpeech/>;
//         case 'international-highlight':
//             return <InternationalHighlight/>;
//         case 'financial-highlight':
//             return <ReAssuranceTreaty/>;
//         case 'reinsurance-treaty':
//             return <ReAssuranceTreaty/>;
//         case 'board-of-directors':
//             return <BoardOfDirectors/>;
//         case 'management':
//             return <Management/>;
//         case 'our-client':
//             return <ReAssuranceTreaty/>;
//         default:
//             return <ChairmanSpeech/>;
//     }
// }

    const getTitle = (name) => {
        switch (name) {
            case 'who-we-are':
                return 'Who We Are';
            case 'chairman-speech':
                return 'Chairman’s Statement';
            case 'international-highlight':
                return 'International Statements';
            case 'financial-highlight':
                return 'Financial Highlights';
            case 'reinsurance-treaty':
                return 'Reinsurance Treaty Cover';
            case 'board-of-directors':
                return 'Board Of Directors';
            case 'management':
                return 'Management';
            case 'our-client':
                return 'Our Client';
            default:
                return 'About Us';
        }
    }

    const AboutUsContent = async (id) => {
        try {
            if(id.title === 'About Us'){
                navigate('/aboutus')
            } else {
                navigate(`/aboutus/${encodeURIComponent(id.title)}?id=${id.id}`);
                await getAboutUsContent(id.id)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const {
        getAboutUsContent,
        getAboutUs,
        data,
        loading,
        contentLoading
    } = useHomePage()
    console.log(data.aboutUs)
    useEffect(() => {
        if (id) {
             getAboutUsContent(id)
        }

        Promise.all([
            getAboutUs()
        ])
    }, []);

    return (
        <>
            <div className="h-screen flex flex-col items-center overflow-x-hidden">
                <NavBar/>

                <div className="w-full">
                    <div
                        className="w-full flex py-10 lg:py-3 flex-col lg:flex-row items-center justify-between px-12 bg-custom-grey ">
                        <div>
                            <h1 className="font-bold text-2xl">
                                {getTitle(lastPart)}
                            </h1>
                        </div>
                        <div className="hidden lg:block">
                            <BigLogo/>
                        </div>
                    </div>
                </div>

                <div className="flex w-11/12 py-10 gap-5">

                    <div
                        className="flex flex-col py-5 gap-y-4 lg:w-5/12 xl:w-3/12 text-xs lg:text-sm xl:text-sm text-custom-purple">
                        {/*{Object.entries(titleMap).map(([path, title]) => (*/}
                        {/*    <Link*/}
                        {/*        to={path === 'who-we-are' ? '/aboutus' :`/aboutus/${path}`} // Use path as URL*/}
                        {/*        className={`${lastPart === path ? 'bg-custom-orange' : 'bg-custom-grey'} relative block  px-4 py-2 no-underline group overflow-hidden border-l-8 border-orange`}*/}
                        {/*    >*/}
                        {/*        /!* Expanding Background Animation *!/*/}
                        {/*        <span*/}
                        {/*            className="absolute inset-0 left-0 w-0 bg-custom-orange transition-all duration-500 ease-in-out group-hover:w-full"*/}
                        {/*        ></span>*/}

                        {/*        /!* Text Content (Above Background) *!/*/}
                        {/*        <div*/}
                        {/*            className="relative z-10 px-4 transition-colors duration-500 group-hover:text-white">*/}
                        {/*            <h1 className="capitalize font-bold text-custom-purple text-lg">*/}
                        {/*                {title}*/}
                        {/*            </h1>*/}
                        {/*        </div>*/}
                        {/*    </Link>*/}
                        {/*))}*/}

                        {
                            loading ?
                                 Array.from({length: 5}).map((_, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-200 animate-pulse h-8 rounded-md w-full"
                                    ></div>
                                ))
                                :
                            data.aboutUs.map((path, title) => (
                            <div key={title} onClick={() => AboutUsContent(path)}

                                className={`${lastPart === path.title ? 'bg-custom-orange' : 'bg-custom-grey'} cursor-pointer relative block  px-4 py-2 no-underline group overflow-hidden border-l-8 border-orange`}
                            >
                                {/* Expanding Background Animation */}
                                <span
                                    className="absolute inset-0 left-0 w-0 bg-custom-orange transition-all duration-500 ease-in-out group-hover:w-full"
                                ></span>

                                {/* Text Content (Above Background) */}
                                <div
                                    className="relative z-10 px-4 transition-colors duration-500 group-hover:text-white">
                                    <h1 className="capitalize font-bold text-custom-purple text-lg">
                                        {path.title}
                                    </h1>
                                </div>
                            </div>
                        ))}

                        <div className="flex flex-col gap-y-3 py-3">
                            <h1 className="font-bold text-lg xl:text-xl">Contact Info</h1>
                            <p className="text-black">
                                17, Adetokunbo Ademola Street, Victoria Island, Lagos, Nigeria.
                            </p>
                            <p className="text-black">
          <span>
            Phone :
          </span>
                                <span>
            07000784752
          </span>
                            </p>
                            <p className="text-black">
          <span>
            Email :
          </span>
                                <span>
            info@stiplc.com
          </span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h1 className="font-bold text-lg xl:text-xl">Download</h1>
                            <button
                                className="flex justify-center text-xs lg:text-sm xl:text-lg items-center py-2 gap-5 bg-custom-orange text-white rounded">
                                <span className="font-bold ">Download Brochure</span>
                                <span>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M12 16.093L7 11.093L8.4 9.64302L11 12.243V4.09302H13V12.243L15.6 9.64302L17 11.093L12 16.093ZM6 20.093C5.45 20.093 4.97933 19.8974 4.588 19.506C4.19667 19.1147 4.00067 18.6437 4 18.093V15.093H6V18.093H18V15.093H20V18.093C20 18.643 19.8043 19.114 19.413 19.506C19.0217 19.898 18.5507 20.0937 18 20.093H6Z"
                  fill="white"/>
            </svg>
          </span>
                            </button>
                        </div>
                    </div>

                    {
                        contentLoading ?
                            <div className="flex flex-col xl:w-9/12 space-y-4">
                                {/* Skeleton Lines */}
                                {Array.from({length: 5}).map((_, index) => (
                                    <div key={index} className="bg-gray-200 animate-pulse h-6 rounded-md w-full"></div>
                                ))}
                            </div> :
                        data.aboutUsContent ?
                        <div className="flex flex-col xl:w-9/12" dangerouslySetInnerHTML={{__html: data.aboutUsContent}}/>
                        :
                        <div className="flex flex-col xl:w-9/12" >
                            {data.aboutUsContent}
                        </div>
                    }

                    {/*<div className="flex flex-col xl:w-9/12">*/}
                    {/*    {getComponent(lastPart)}*/}
                    {/*</div>*/}

                </div>


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
