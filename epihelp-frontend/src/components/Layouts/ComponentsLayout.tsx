import React from 'react'

interface ComponentsLayoutProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
}
const ComponentsLayout: React.FC<ComponentsLayoutProps> = ({ title, children }) => (
  <div /*className="min-h-screen bg-gray-100"*/>
    <main>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 shadow">
            {title}
          </div>
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </div>
    </main>
  </div>
)

export default ComponentsLayout;