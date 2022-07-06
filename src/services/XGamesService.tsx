import axios from 'axios';
import { GameCardItem } from "../components/GameCard/type";
import { baseURL } from 'assets/env.js';

axios.defaults.baseURL = baseURL;
axios.defaults.headers.post["content-type"] = "application/json";
axios.defaults.headers.common = {'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vbWUyQGdtYWlsLmNvbSIsImlhdCI6MTY1NzA1NzAzMSwiZXhwIjoxNjU3MDkzMDMxfQ.RInDCUEjyTuP74XlaGT9bs-pUD9dhBxnFWLJPYP2BEU'};

export const XGamesService = {
    getHomepage: async (idperfil) => {
        try {
            const req = await axios.get(`/auth/${idperfil}`);

            let data =req.data[0].games;

            //console.log( 'req data', data );

            return data;
        } catch (err) {
            alert(err);
        }
    },
    getGamesByGenre: async (idGenre : number) => {
        try {
            const req = await axios.get(`/home/${5}`);

            let data =req.data;

            console.log( 'req data', data );

            return data;
        } catch (err) {
            alert(err);
        }
    },
    postGame: async (newGame: GameCardItem) => {
        try {
            const req = await axios.post("/games", {
                data: {
                title: newGame.title,
                Description: newGame.Description,
                ImdbScore: newGame.ImdbScore
                },
            });
            return req.data;
        } catch (err) {
            alert(err);
        }
    },
};