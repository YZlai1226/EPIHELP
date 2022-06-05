import ComponentsLayout from './../Layouts/ComponentsLayout';
import { Comment } from './../../models/comment'
import EachComment from './EachComment';

type CommentManagerProps = {
  managerName: string,
  Comments: Comment[]
}

const CommentsManager: React.FC<CommentManagerProps> = (props) => (
  <ComponentsLayout
    title={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        {props.managerName}
      </h2>
    }>
    {props.Comments.map((Comment) => (
      <EachComment Comment={Comment} key={Comment.id}/>
    )
    )}
  </ComponentsLayout>
)
export default CommentsManager;