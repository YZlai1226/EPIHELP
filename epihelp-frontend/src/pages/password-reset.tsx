import ApplicationLogo from './../components/ApplicationLogo'
import AuthCard from './../components/authentication/AuthCard'
import AuthSessionStatus from './../components/authentication/AuthSessionStatus'
import AuthValidationErrors from './../components/authentication/AuthValidationErrors'
import Button from './../components/Button'
import GuestLayout from './../components/Layouts/GuestLayout'
import Input from './../components/Input'
import Label from './../components/Label'
import { useAuth } from './../hooks/auth'
import { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom';

const PasswordReset: React.FC = () => {
  const params = useParams()
  const { resetPassword } = useAuth({ middleware: 'guest', redirectIfAuthenticated: undefined })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  const submitForm: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    resetPassword({
      email,
      password,
      password_confirmation,
      setErrors,
      setStatus
    })
  }

  useEffect(() => {
    setEmail(params.email || '')
  }, [params.email])

  return (
    <GuestLayout>
      <AuthCard
        logo={
          <Link to="/">
            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
          </Link>
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
          <div className="flex items-center justify-end mt-4">
            <Button>Reset Password</Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  )
}

export default PasswordReset
