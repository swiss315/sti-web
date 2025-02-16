import {CONTACT, HOME_BANNER, LOGO, PARTNERS, PRESS_RELEASE, SERVICE} from "./routePath.js";
import { unauthorized} from "../../helper/axios.js";

export const useHomePage = () => {
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
        } catch (e) {
            console.log(e)
        }
    }

    const getPressRelease = async () => {
        try {
            const response = await unauthorized.get(PRESS_RELEASE);
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }

    const getService = async () => {
        try {
            const response = await unauthorized.get(SERVICE);
            console.log(response)
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
        getService
    }
}
