import AuthCard from './../components/authentication/AuthCard'
import AuthValidationErrors from './../components/authentication/AuthValidationErrors'
import Button from './../components/Button'
import GuestLayout from './../components/Layouts/GuestLayout'
import Input from './../components/Input'
import Label from './../components/Label'
import { useAuth } from './../hooks/auth'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const Register = () => {
  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/categories'
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])

  const submitForm: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    register({ name, email, password, password_confirmation, setErrors })
  }

  return (
    <GuestLayout>
      <AuthCard
        logo={
          <img src="https://svgshare.com/i/ht1.svg" />
        }>
        {/* Validation Errors */}
        <AuthValidationErrors className="mb-4" errors={errors} />
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
          <h1>Code of conduct</h1>
          <br />
          <strong>
            Whether you’ve come to ask questions or to generously share what you know,
            join us in building a community where all people feel welcome and can participate,
            regardless of expertise or identity.
          </strong>
          <ul>
            <br />
            <li>
              If you’re here to get help, make it as easy as possible for others to help you.
              Follow our guidelines and remember that our community is made possible by volunteers.
            </li>
            <br />
            <li>
              If you’re here to help others, be patient and welcoming.
              Learning how to participate in our community can be hard.
              Offer support if you see someone struggling or otherwise in need of help.
            </li>
            <br />
            <li>
              Be clear and constructive when giving feedback, and be open when receiving it.
              Edits, comments, and suggestions are healthy parts of our community.
            </li>
            <br />
            <li>
              Be inclusive and respectful. Avoid sarcasm and be careful with jokes — tone is hard to decipher online.
              Prefer gender-neutral language when uncertain.
              If a situation makes it hard to be friendly, stop participating and move on.
            </li>
          </ul>
        </div>
        <br></br>
        <form onSubmit={submitForm}>
          {/* Name */}
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              className="block mt-1 w-full"
              onChange={event => setName(event.target.value)}
              required
              autoFocus
            />
          </div>
          {/* Email Address */}
          <div className="mt-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              className="block mt-1 w-full"
              onChange={event => setEmail(event.target.value)}
              required
            />
          </div>
          {/* Password */}
          <div className="mt-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              className="block mt-1 w-full"
              onChange={event => setPassword(event.target.value)}
              required
              autoComplete="new-password"
            />
          </div>
          {/* Confirm Password */}
          <div className="mt-4">
            <Label htmlFor="password_confirmation">
              Confirm Password
            </Label>
            <Input
              id="password_confirmation"
              type="password"
              value={password_confirmation}
              className="block mt-1 w-full"
              onChange={event =>
                setPasswordConfirmation(event.target.value)
              }
              required
            />
          </div>
          {/* Confirm Password */}
          <div className="mt-4">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              className="focus:ring-blue-900 h-4 w-4 text-blue-900 border-gray-300 rounded"
            />
            <span> </span>
            <span>
              I have read and agree to the <Link to='/cgu'>terms and conditions</Link>.
            </span>
            <div className="flex items-center h-5">
            </div>
          </div>
          <div className="flex items-center justify-end mt-4">
            <NavLink
              to="/login"
              className="underline text-sm text-gray-600 hover:text-gray-900"
            >
              Already registered?
            </NavLink>
            <Button className="ml-4">Register</Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  )
}

export default Register
