import React, { useEffect, useState } from 'react';
import routes from './Routes';
import { Routes, Route, useLocation , Navigate} from 'react-router-dom';
import { useAuth } from './context/auth';

const AppRoute = ():JSX.Element =>{



    const [pageTile, setPageTitle] = useState("");
    const location = useLocation();
    const {currentUser} = useAuth();


    useEffect(() => {
        

        // check the currentroute

        const currentRoute = routes.find(route => route.path === location.pathname);


        if(currentRoute && currentRoute.pageTile){
            document.title = currentRoute.pageTile;
        }
        
        
      }, [location.pathname]);

    return (
        <>

            {/* return routes here */}
{/* 
            <Routes>
                    {
                        routes.map(({id, path,component:Component, exact, auth}) => (
                            <Route
                            key={id}
                            path={path}
                            element={<ProtectedRoute element={<Component />} auth={auth}/>}
                          />
                        ))
                    }
            </Routes> */}

            <Routes>
                {routes.map(({ id, path, component: Component, auth }) => {
                    const isAuthenticated = currentUser !== null;
                    
                    if (auth && !isAuthenticated) {
                    // Redirect to login if authentication is required and user is not authenticated
                    return <Route key={id} path={path} element={<Navigate to="/login" state={{ from: location }} replace />} />;
                    }

                    // Render component if authentication is not required or user is authenticated
                    return <Route key={id} path={path} element={<Component />} />;
                })}
                </Routes>

        
        </>
    );
}

export default AppRoute;