// eslint-disable-next-line no-restricted-imports
import { useParams } from 'react-router-dom'
// eslint-disable-next-line no-restricted-imports
import CommentForm from '../components/Forms/CommentForm'
import AppLayout from './../components/Layouts/AppLayout'

const Categories = () => {
  const { id } = useParams() 
  const StrId = id as any as string
  return (
    <AppLayout
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Categories
        </h2>
      }>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              You're logged in!
            </div>
            <CommentForm post_id={StrId} />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Categories
