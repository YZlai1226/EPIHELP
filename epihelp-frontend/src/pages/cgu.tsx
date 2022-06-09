import AppLayout from './../components/Layouts/AppLayout'

const CGU = () => (
  <AppLayout
    header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        CGU
      </h2>
    }>
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <h1 className="text-4xl text-purple-600/100">CGU</h1>
            <br />
            <p>Blablabla.</p>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
)

export default CGU
