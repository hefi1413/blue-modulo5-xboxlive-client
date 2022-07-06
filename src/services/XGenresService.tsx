import axios from 'axios';
import { GenreCardItem } from "../components/GenreCard/type";
import { baseURL } from 'assets/env.js';

axios.defaults.baseURL = baseURL;
axios.defaults.headers.post["content-type"] = "application/json";
axios.defaults.headers.common = {'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vbWUyQGdtYWlsLmNvbSIsImlhdCI6MTY1NzA1NzAzMSwiZXhwIjoxNjU3MDkzMDMxfQ.RInDCUEjyTuP74XlaGT9bs-pUD9dhBxnFWLJPYP2BEU'};

export const XGenresService = {
    getGenres: async () => {
        try {
            const req = await axios.get(`/genres/`);

            let data =req.data;

            console.log( 'req data', data );

            return data;
        } catch (err) {
            alert(err);
        }
    },
};