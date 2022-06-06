import AppLayout from './../components/Layouts/AppLayout'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { User } from './../models/user';
import { useAuth } from './../hooks/auth';
import { PostsManager } from './../components/posts/PostsManager'
import ComponentsLayout from './../components/Layouts/ComponentsLayout';
import CommentsManager from './../components/comments/CommentsManager';

const Profile: React.FC = () => {

  const { user } = useAuth({ middleware: 'auth' });
  const [userData, setUserData] = useState<User>();

  async function getUserData(id: string) {
    type userResponse = {
      data: User;
    };
    try {
      const res = await axios.get<userResponse>(`http://localhost:8000/api/users/${id}`);
      setUserData(res.data.data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getUserData(user?._id)
  }, [user]);

  return (
    <AppLayout
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Profile
        </h2>
      }>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              Profile page
            </div>
            {userData ?
              <div className="p-6 bg-white border-b border-gray-200">
                <h1>{userData.name}</h1>
                <p>Email: {userData.email}</p>
                <p>Member since {userData.created_at}</p>
                <br></br>
                <h2>My activity:</h2>
                {userData?.posts &&
                  <PostsManager
                    managerName={'My posts'}
                    posts={userData?.posts}
                  />}
                {userData.comments &&
                  <CommentsManager managerName='My comments' Comments={userData.comments} />
                }
              </div>
              : 'Loading user information...'
            }
          </div>
        </div>
      </div>
    </AppLayout >
  )
}
export default Profile