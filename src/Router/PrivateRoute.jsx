
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import useAuth from './../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import  PropTypes  from 'prop-types';

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading) {
        return (
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <p>
                <Skeleton count={3} />
                </p>
            </SkeletonTheme>
        )
    }
    if(user) return children;

    return <Navigate to={'/login'} state={location.pathname} replace='true' />

};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}