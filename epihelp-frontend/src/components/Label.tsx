import React from 'react'

type LabelProps = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>

const Label: React.FC<LabelProps> = ({ className, children, ...props }) => (
  <label
    className={`${className} block font-medium text-sm text-gray-700`}
    {...props}>
    {children}
  </label>
)

export default Label
