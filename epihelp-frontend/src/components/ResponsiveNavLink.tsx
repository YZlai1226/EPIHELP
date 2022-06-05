import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinkProps } from './NavLinkProps'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const ResponsiveNavLink: React.FC<NavLinkProps> = ({ children, ...props }) => (
  <NavLink
    {...props}
    to={''}
    className={({ isActive }) => (isActive
      ? 'block pl-3 pr-4 py-2 border-l-4 text-base font-medium ' +
      'leading-5 focus:outline-none transition duration-150 ease-in-out ' +
      'border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800' +
      ' focus:bg-indigo-100 focus:border-indigo-700'
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
    className="block w-full pl-3 pr-4 py-2 border-l-4
     text-left text-base font-medium leading-5 focus:outline-none
     transition duration-150 ease-in-out border-transparent
     text-gray-600 hover:text-gray-800 hover:bg-gray-50
     hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
    {...props}
  />
)

export default ResponsiveNavLink
