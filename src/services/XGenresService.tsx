import api from 'helpers/Api';
import { GenreCardItem } from 'components/GenreCard/type';

export const XGenresService = {
    getGenres: async () => {
        try {
            const req = await api.get(`/genres/`);

            let data =req.data;
            console.log( 'req data', data );

            return data;
        } catch (err) {
            console.log('Error', err);
        }
    },
    getGenreById: async ( id :string ) => {
        try {
            const req = await api.get(`/genres/${id}`);

            let data =req.data;

            console.log( 'req data', data );

            return data;
        } catch (err) {
            console.log('Error:', err);
            return err;
        }
    },
    createGenre: async (newGenre :GenreCardItem) => {
        delete newGenre.id;
        
        console.log('newGame:',newGenre);
        try {
            const req = await api.post(`/genres`, newGenre );

            return req.data;
        } catch (err) {
            console.log('Error:', err);
            return err;
        }
    },
    updateGenre: async ( genre :GenreCardItem ) => {
        try {
            const req = await api.patch(`/genres/${genre.id}`, genre );

            return req.data;
        } catch (err) {
            console.log('Error:', err);
            return err;
        }
    },
    deleteGenre: async ( id :string ) => {
        try {
            const req = await api.delete(`/genres/${id}` );

            return req.data;
        } catch (err) {
            console.log('Error:', err);
            return err;
        }
    }
};
