import AppLayout from './../components/Layouts/AppLayout'
import PostForm from './../components/Forms/PostForm'
import { useParams } from 'react-router-dom'

const NewPost = () => {
  const { categoryId } = useParams<string>();
  return (
    <AppLayout
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Create a post
        </h2>
      }>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              {categoryId &&
              <PostForm categoryId={categoryId}/>}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default NewPost
