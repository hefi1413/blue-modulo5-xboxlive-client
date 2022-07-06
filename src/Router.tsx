import { RoutePath } from 'assets/types/routes';
import GamesEdit from 'components/GamesEdit';
import  Homepage  from 'components/Homepage'
import { Route, Routes } from 'react-router-dom';

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.LOGIN} element={<Homepage />} />
            <Route path={RoutePath.HOME} element={<Homepage />} />
            <Route path={RoutePath.SETTINGS_GAMES} element={ <GamesEdit />} />
        </Routes>
    );
}

export default Router;