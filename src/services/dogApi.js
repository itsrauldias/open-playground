// import axios from 'axios';
import { errorToast } from '../Components/SimpleToast';

// const api_url = 'https://dog-api.kinduff.com/api/facts';
const testFact = {
    facts: [
        "Dogs have a wet nose to collect more of the tiny droplets of smelling chemicals in the air."
    ],
    success: true
}

const get = async () => {
    try {
        // const response = await axios.get(api_url);
        // return response.data;
        return testFact;
    } catch (error) {
        errorToast('Falha ao buscar fatos!');
    }
}

export {
    get
}
