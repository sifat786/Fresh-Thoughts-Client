
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import useAuth from './../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import  PropTypes  from 'prop-types';

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading) {
        return (
            <SkeletonTheme baseColor="#e6e9ed" highlightColor="#c1c4c7">
                    <p className='text-center mx-auto'><Skeleton count={20} /></p>
            </SkeletonTheme>
        )
    }
    if(user) return children;

    return <Navigate to={'/login'} state={location.pathname} replace={true} />

};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}