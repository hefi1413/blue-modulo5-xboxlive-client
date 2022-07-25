import api from 'helpers/Api';
import { GameCardItem } from "../components/GameCard/type";
import { baseURL } from 'assets/env.js';

export const XGamesService = {
    getHomepage: async (idperfil) => {
        try {
            const req = await api.get(`/auth/${idperfil}`);

            let data =req.data[0].games;

            return data;
        } catch (err) {
            console.log('Error:', err);
            return err;
        }
    },
    getGamesByGenre: async (idGenre :string) => {
        try {
            const req = await api.get(`/home/${idGenre}`);

            let data =req.data[0].games;

            console.log( 'req data', data );

            return data;
        } catch (err) {
            console.log('Error:', err);
            return err;
        }
    },
    getGames: async () => {
        try {
            const req = await api.get(`/games`);

            let data =req.data;

            console.log( 'req data', data );

            return data;
        } catch (err) {
            console.log('Error:', err);
            return err;
        }
    },
    getGameById: async ( id :string ) => {
        try {
            const req = await api.get(`/games/${id}`);

            let data =req.data;

            console.log( 'req data', data );

            return data;
        } catch (err) {
            console.log('Error:', err);
            return err;
        }
    },
    createGame: async (newGame :GameCardItem) => {
        delete newGame.id;
        
        console.log('newGame:',newGame);
        try {
            const req = await api.post(`/games`, newGame );

            return req.data;
        } catch (err) {
            console.log('Error:', err);
            return err;
        }
    },
    updateGame: async ( game :GameCardItem ) => {
        console.log('game:', game);

        try {
            const req = await api.patch(`/games/${game.id}`, game );

            return req.data;
        } catch (err) {
            console.log('Error:', err);
            return err;
        }
    },
    deleteGame: async ( id :string ) => {
        try {
            const req = await api.delete(`/games/${id}` );

            return req.data;
        } catch (err) {
            console.log('Error:', err);
            return err;
        }
    }
};