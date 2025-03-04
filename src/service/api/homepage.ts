import {
    ABOUT_US,
    ABOUT_US_DETAILS,
    CONTACT,
    HOME_BANNER,
    LOGO,
    PARTNERS,
    PRESS_RELEASE,
    SERVICE
} from "./routePath.js";
import { unauthorized} from "../../helper/axios.js";
import {useState} from "react";

export const useHomePage = () => {
    const [data, setData] = useState({
        partners: [],
        pressRelease: [],
        service: [],
        aboutUs: [],
        aboutUsContent: null
    })
    const [loading, setLoading] = useState(false);
    const [contentLoading, setContentLoading] = useState(false);
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


    const getAboutUs = async () => {
        try {
            setLoading(true)
            const response = await unauthorized.get(ABOUT_US);
            console.log(response)
            if (response.statusText === 'OK') {
                setData((prevData) => ({
                    ...prevData,
                    aboutUs: response.data.topics
                }));
                setLoading(false)
            }
        } catch (e) {
            setLoading(false)
            console.log(e)
        }
    }

    const getAboutUsContent = async (id) => {
        try {
            setContentLoading(true);
            const response = await unauthorized.get(`${ABOUT_US_DETAILS}/${id}/en`);
            console.log(response)
            if (response.statusText === 'OK') {
                setData((prevData) => ({
                    ...prevData,
                    aboutUsContent: response.data.topic[0].details === null ? 'Null' : response.data.topic[0].details
                }));
                setContentLoading(false);
            }
        } catch (e) {
            setContentLoading(false);
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
        getAboutUs,
        getAboutUsContent,
        contentLoading,
        loading
    }
}
