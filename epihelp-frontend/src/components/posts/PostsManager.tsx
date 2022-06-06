import ComponentsLayout from './../Layouts/ComponentsLayout';
import { Post, PostSummary } from './../../models/post'
import EachPost from './EachPost';

type PostManagerProps = {
  managerName: string,
  posts: PostSummary[]
}

export const PostsManager: React.FC<PostManagerProps> = (props) => {
  console.log(props.posts);
  return (
    <ComponentsLayout
      title={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          {props.managerName}
        </h2>
      }>
      {props.posts.map((post) => (
        <EachPost post={post} key={post.id} />
      )
      )}
    </ComponentsLayout>
  )
}