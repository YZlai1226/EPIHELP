import { Menu } from '@headlessui/react'
import React from 'react';
import { NavLink } from 'react-router-dom';

const DropdownLink: React.FC = ({ children, ...props }) => (
  <Menu.Item>{({ active }: any) => (
    <NavLink
      to={''}
      className={`w-full text-left block px-4 
      py-2 text-sm leading-5 text-gray-700 ${active ?
        'bg-gray-100' : ''} focus:outline-none transition duration-150 ease-in-out`}>
      {children}
    </NavLink>
  )}
  </Menu.Item>
)

interface DropdownButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement>
}

export const DropdownButton: React.FC<DropdownButtonProps> = ({ children, ...props }) => (
  <Menu.Item>
    {({ active }: any) => (
      <button
        className={`w-full text-left block px-4 py-2 
        text-sm leading-5 text-gray-700 ${active ? 'bg-gray-100' : ''}
         focus:outline-none transition duration-150 ease-in-out`}
        {...props}>
        {children}
      </button>
    )}
  </Menu.Item>
)

export default DropdownLink
