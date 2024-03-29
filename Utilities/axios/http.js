import axios from "axios";

class Http {
    baseUrl = "http://localhost:8080/api/v1/";
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
