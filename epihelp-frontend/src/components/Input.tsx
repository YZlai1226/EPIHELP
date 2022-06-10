import React from 'react'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: React.FC<InputProps> = ({ disabled = false, className, ...props }) => (
  <input
    disabled={disabled}
    className={`${className} rounded-md shadow-sm border-gray-300
     focus:border-blue-900 focus:ring focus:ring-blue-900 focus:ring-opacity-50`}
    {...props}
  />
)

export default Input
