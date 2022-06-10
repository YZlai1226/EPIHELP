import Navigation from './Navigation'
import { useAuth } from './../../hooks/auth'
import React from 'react'

/* eslint-disable max-len */

interface AppLayoutProps {
  header: React.ReactNode;
}
const AppLayout: React.FC<AppLayoutProps> = ({ header, children }) => {
  const { user } = useAuth({ middleware: 'auth', redirectIfAuthenticated: undefined })

  return (
    <div >
      <div className="min-h-screen bg-gray-100 ">
        <Navigation user={user} />
        {/* Page Heading */}
        <div className="bg-blue-900 sm:bg-header-image bg-cover bg-center bg-no-repeat">
          <header className="sm:bg-gradient-to-r from-blue-900 via-transparent to-blue-900 z-30 shadow">
            <div className="max-w-7xl mx-auto py-5 sm:pt-40 px-4 sm:px-6 lg:px-8">
              {header}
            </div>
          </header>
        </div>
        {/* Page Content */}
        <main className="z-20">{children}</main>
      </div>
    </div >
  )
}

export default AppLayout;