import { useNavigate } from 'react-router-dom';
import { XAuthService } from "services/XAuthService";
import { RoutePath } from "assets/types/routes";
import { useEffect } from 'react';

interface credentials {
    email: string;
    senha: string;
}

const Logout = () => {
	const navigate = useNavigate();

    const logout = () => {

        console.log('logout');

        localStorage.setItem("token", '');
        localStorage.setItem("user", '');
        localStorage.clear();
    
        navigate( RoutePath.LOGIN );
        return;
    }

    useEffect(() => {

        logout();

    })

	return (
        <>
        </>
	);
};

export default Logout;