import AuthCard from './../components/authentication/AuthCard'
import AuthSessionStatus from './../components/authentication/AuthSessionStatus'
import AuthValidationErrors from './../components/authentication/AuthValidationErrors'
import Button from './../components/Button'
import GuestLayout from './../components/Layouts/GuestLayout'
import Input from './../components/Input'
import Label from './../components/Label'
import { useAuth } from './../hooks/auth'
import { useState } from 'react'
import { Link, NavLink} from 'react-router-dom';

const Login = () => {

  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/main'
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  const submitForm: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    login({ email, password, setErrors, setStatus })
  }

  return (
    <GuestLayout>
      <AuthCard
        logo={
          <img src="https://svgshare.com/i/ht1.svg" />
        }>
        {/* Session Status */}
        <AuthSessionStatus className="mb-4" status={status} />
        {/* Validation Errors */}
        <AuthValidationErrors className="mb-4" errors={errors} />
        <form onSubmit={submitForm}>
          {/* Email Address */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              className="block mt-1 w-full"
              onChange={event => setEmail(event.target.value)}
              required
              autoFocus
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
              autoComplete="current-password"
            />
          </div>
          {/* Remember Me */}
          <div className="block mt-4">
            <label
              htmlFor="remember_me"
              className="inline-flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                name="remember"
                className="rounded border-gray-300 text-blue-900
                shadow-sm focus:border-blue-900 focus:ring focus:ring-blue-900 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-gray-600">
                  Remember me
              </span>
            </label>
          </div>
          <div className="flex items-center justify-end mt-4">
            <NavLink
              to="/forgot-password"
              className="underline text-sm text-gray-600 hover:text-gray-900"
            >
                Forgot your password?
            </NavLink>
            <Button className="ml-3">
                Login
            </Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  )
}

export default Login
