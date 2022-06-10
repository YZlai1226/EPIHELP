import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './../hooks/auth';

function Home() {
  const { user } = useAuth({ middleware: 'guest', redirectIfAuthenticated: undefined })

  return (
    <div className="relative flex items-top justify-center
    min-h-screen bg-gray-100 sm:items-center sm:pt-0">
      <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
        {user ?
          <NavLink
            to="/categories"
            className="ml-4 text-sm text-blue-900 underline"
          >
            Main Page
          </NavLink>
          :
          <>
            <NavLink
              to="/login"
              className="ml-4 text-sm text-blue-900 underline"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="ml-4 text-sm text-blue-900 underline"
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

      </div>
    </div>
  );
}

export default Home;
