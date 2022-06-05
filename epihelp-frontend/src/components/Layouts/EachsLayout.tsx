import React from 'react'

interface EachsLayoutProps {
  title?: React.ReactNode;
}
const EachsLayout: React.FC<EachsLayoutProps> = ({ title, children }) => (
  <div /*className="min-h-screen bg-gray-100"*/>
    <main>
      <div className="max-w-7xl mx-auto py-1">
        <div className="bg-gray-500 shadow-xl">
          <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 shadow text-xl text-white">
            {title}
          </div>
          <div className="max-w-7xl mx-auto py-2 px-2 sm:px-6 lg:px-8 bg-gray-100">
            {children}
          </div>
        </div>
      </div>
    </main>
  </div>
)

export default EachsLayout;