
import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: 'https://us-central1-clone-a437c.cloudfunctions.net/api'
    // baseURL: 'http://localhost:5001/clone-a437c/us-central1/api'
});

export default instance;