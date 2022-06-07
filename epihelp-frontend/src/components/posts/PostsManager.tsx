import ComponentsLayout from './../Layouts/ComponentsLayout';
import { Post, PostSummary } from './../../models/post'
import EachPost from './EachPost';
import Button from './../Button';

type PostManagerProps = {
  managerName: string,
  posts: PostSummary[]
}

export const PostsManager: React.FC<PostManagerProps> = (props) => (
  <ComponentsLayout
    title={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        {props.managerName}
      </h2>
    }>
    {/* <Button
      className="ml-3"
      onClick={() => navigate(`/newpost/${categoryData?.id}`)}
    //onClick={() => navigate('/newpost')}
    >
      New post
    </Button> */}
    {props.posts.map((post) => (
      <EachPost post={post} key={post.id} />
    )
    )}
  </ComponentsLayout>
)