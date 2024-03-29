import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    children: JSX.Element;
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
    const auth = useSelector(getUserAuthData)?.id;
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
};
