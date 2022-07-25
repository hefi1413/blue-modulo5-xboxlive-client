import api from 'helpers/Api';


interface credentials {
    email: string;
    senha: string;
}

export const XAuthService = {
    login: async ( req: credentials) => 
        api.post('/auth', req )
            .then((response: any) => {
                return response;
            })
            .catch((error: any) => {
                console.log('Error:', error);
                return error;
            })
}

