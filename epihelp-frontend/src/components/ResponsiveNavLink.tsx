import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinkProps } from './NavLinkProps'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const ResponsiveNavLink: React.FC<NavLinkProps> = ({ children, ...props }) => (
  <NavLink
    {...props}
    to={''}
    className={({ isActive }) => (isActive
      ? 'block pl-3 pr-4 py-2 hover:border-l-4 hover:text-gray-300 text-base font-medium ' +
      'leading-5 focus:outline-none transition duration-150 ease-in-out ' +
      'border-gray-300 text-white bg-blue-900 focus:text-blue-900' +
      ' focus:bg-blue-100 focus:border-blue-900'
      : 'block pl-3 pr-4 py-2 border-l-4 text-base font-medium ' +
      'leading-5 focus:outline-none transition duration-150 ' +
      'ease-in-out border-transparent text-gray-600 hover:text-gray-800' +
      ' hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 ' +
      'focus:bg-gray-50 focus:border-gray-300')
    }>
    {children}
  </NavLink>
)

export const ResponsiveNavButton: React.FC<ButtonProps> = props => (
  <button
    className="block w-full pl-3 pr-4 py-2 border-l-4 hover:border-l-4 hover:text-gray-300
     text-left text-base font-medium leading-5 focus:outline-none
     transition duration-150 ease-in-out border-transparent
     text-white hover:text-gray-800
     hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
    {...props}
  />
)

export default ResponsiveNavLink
