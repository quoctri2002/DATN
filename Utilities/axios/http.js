import axios from "axios";

class Http {
    baseUrl = "http://206.189.45.141/api/";
    instance

    constructor() {
        axios.interceptors.request.use((config) => {
            config.url = this.baseUrl
            return config
        })

        this.instance = axios

        console.log(this.instance.getUri())
    }


}

export const http = new Http().instance;
