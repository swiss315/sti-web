import {CONTACT, HOME_BANNER, LOGO, PARTNERS, PRESS_RELEASE, SERVICE} from "./routePath.js";
import { unauthorized} from "../../helper/axios.js";
import {useState} from "react";

export const useHomePage = () => {
    const [data, setData] = useState({
        partners: [],
        pressRelease: [],
        service: [],
    })
    const getHomeBarner = async () => {
        try {
            const response = await unauthorized.get(HOME_BANNER);
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }

    const getContact = async () => {
        try {
            const response = await unauthorized.get(CONTACT);
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }

    const getLogo = async () => {
        try {
            const response = await unauthorized.get(LOGO);
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }

    const getPartners = async () => {
        try {
            const response = await unauthorized.get(PARTNERS);
            console.log(response)
            if (response.statusText === 'OK') {
                setData((prevData) => ({
                    ...prevData,
                    partners: response.data.topics
                }));
                // setData({...data, partners: response.data.topics})
            }
        } catch (e) {
            console.log(e)
        }
    }

    const getPressRelease = async () => {
        try {
            const response = await unauthorized.get(PRESS_RELEASE);
            console.log(response)
            if (response.statusText === 'OK') {
                setData((prevData) => ({
                    ...prevData,
                    pressRelease: response.data.topics
                }));
            }
        } catch (e) {
            console.log(e)
        }
    }

    const getService = async () => {
        try {
            const response = await unauthorized.get(SERVICE);
            console.log(response)
            if (response.statusText === 'OK') {
                setData((prevData) => ({
                    ...prevData,
                    service: response.data.topics
                }));
            }
        } catch (e) {
            console.log(e)
        }
    }
    return {
        getHomeBarner,
        getContact,
        getLogo,
        getPressRelease,
        getPartners,
        getService,
        data,
    }
}
