import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinkProps } from './NavLinkProps'
// interface NavLinkProps {
//   to: To,
// }

const CustomNavLink: React.FC<NavLinkProps> = ({ children, ...props }) => (
  <NavLink {...props}
    to={props.to}
    className={({ isActive }) => (isActive
      ? 'inline-flex items-center px-1 pt-1 border-b-2 ' +
      'text-sm font-medium leading-5 focus:outline-none transition ' +
      'duration-150 ease-in-out border-blue-900 text-gray-900 focus:border-blue-900'
      : 'inline-flex items-center px-1 pt-1 border-b-2 text-sm ' +
      'font-medium leading-5 focus:outline-none transition duration-150 ' +
      'ease-in-out border-transparent text-white hover:text-gray-300 ' +
      'hover:border-gray-300 focus:text-gray-700 focus:border-gray-300')
    }>
    {children}
  </NavLink>
)

export default CustomNavLink
