import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './../hooks/auth';

function Home() {
  const { user } = useAuth({ middleware: 'guest', redirectIfAuthenticated: undefined })

  return (
    <div className="relative flex items-top justify-center
    min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
      <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
        {user ?
          <NavLink
            to="/dashboard"
            className="ml-4 text-sm text-gray-700 underline"
          >
            Dashboard
          </NavLink>
          :
          <>
            <NavLink
              to="/login"
              className="ml-4 text-sm text-white underline"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="ml-4 text-sm text-white underline"
            >
              Register
            </NavLink>
          </>
        }
      </div>
      <div>
        <div className="flex sm:justify-center">
          <img src="https://svgshare.com/i/ht1.svg" />
        </div>

{/*uncomment this to see the difference*/}    
  
   {/*         <div className="flex sm:justify-center mt-8 bg-grey text-2xl p-12">
          <span style={{
            color: 'darknavy',
            fontWeight: 'lighter',
            fontFamily: 'monospace'
          }}>
            Epihelp, the best place to find help !</span>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
