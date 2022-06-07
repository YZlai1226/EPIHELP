import Navigation from './Navigation'
import { useAuth } from './../../hooks/auth'
import React from 'react'

interface AppLayoutProps {
  header: React.ReactNode;
}
const AppLayout: React.FC<AppLayoutProps> = ({ header, children }) => {
  const { user } = useAuth({ middleware: 'auth', redirectIfAuthenticated: undefined })

  return (
    <div >
      <div className="min-h-screen bg-gray-100">
        <Navigation user={user} />
        {/* Page Heading */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {header}
          </div>
        </header>
        {/* Page Content */}
        <main>{children}</main>
      </div>
    </div>
  )
}

export default AppLayout;