import api from 'helpers/Api';
import { ProfileCardItem } from 'components/ProfileCard/type';

export const XProfilesService = {
    getProfiles: async () => {
        try {
            const req = await api.get(`/profiles/`);

            let data =req.data;

            return data;
        } catch (err) {
            console.log('Error', err);
        }
    },
    getProfileById: async ( id :string ) => {
        try {
            const req = await api.get(`/profiles/${id}`);

            let data =req.data;

            return data;
        } catch (err) {
            console.log('Error:', err);
            return err;
        }
    },
    createProfile: async (newProfile :ProfileCardItem) => {
        delete newProfile.id;
        
        console.log('newGame:',newProfile);
        try {
            const req = await api.post(`/profiles`, newProfile );

            return req.data;
        } catch (err) {
            console.log('Error:', err);
            return err;
        }
    },
    updateProfile: async ( profile :ProfileCardItem ) => {
        try {
            const req = await api.patch(`/profiles/${profile.id}`, profile );

            return req.data;
        } catch (err) {
            console.log('Error:', err);
            return err;
        }
    },
    deleteProfile: async ( id :string ) => {
        try {
            const req = await api.delete(`/profiles/${id}` );

            return req.data;
        } catch (err) {
            console.log('Error:', err);
            return err;
        }
    }
};
