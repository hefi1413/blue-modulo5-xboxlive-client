import { RoutePath } from "../../assets/types/routes"

export interface User {
	id?: string;
    name: string;
    email: string;
    password: string;
    cpf: string;
    isAdmin: boolean;
}