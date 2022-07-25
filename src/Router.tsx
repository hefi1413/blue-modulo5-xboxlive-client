import { RoutePath } from 'assets/types/routes';
import { Route, Routes } from 'react-router-dom';
import Homepage  from 'pages/Homepage'
import Login from 'pages/Login';
import GamesSettings from 'pages/GamesSettings';
import GameEdit from 'pages/GameEdit';
import GenresSettings from 'pages/GenresSettings';
import GenreEdit from 'pages/GenreEdit';
import ProfilesSettings from 'pages/ProfilesSettings';
import ProfileEdit from 'pages/ProfileEdit';
import Logout from 'components/Logout';

const Router = () => {

    return (
        <Routes>
            <Route path={RoutePath.LOGIN} element={<Login />} />
            <Route path={RoutePath.HOME} element={<Homepage />} />
            <Route path={RoutePath.SETTINGS_GAMES} element={ <GamesSettings />} />
            <Route path={RoutePath.SETTINGS_GAMES+'/:id'} element={ <GamesSettings />} />
            <Route path={RoutePath.SETTINGS_GAMES_ADD} element={ <GameEdit />} />
            <Route path={RoutePath.SETTINGS_GAMES_EDIT} element={ <GameEdit />} />
            <Route path={RoutePath.SETTINGS_GENRES} element={ <GenresSettings />} />
            <Route path={RoutePath.SETTINGS_GENRES_ADD} element={ <GenreEdit />} />
            <Route path={RoutePath.SETTINGS_GENRES_EDIT} element={ <GenreEdit />} />
            <Route path={RoutePath.SETTINGS_PROFILES} element={ <ProfilesSettings />} />
            <Route path={RoutePath.SETTINGS_PROFILES_ADD} element={ <ProfileEdit />} />
            <Route path={RoutePath.SETTINGS_PROFILES_EDIT} element={ <ProfileEdit />} />            
            <Route path={RoutePath.LOGOUT} element={ <Logout />} />            
            
        </Routes>
    )
}

export default Router;
