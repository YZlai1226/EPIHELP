import AppLayout from './../components/Layouts/AppLayout'
import { useEffect, useState } from 'react';
import { User } from './../models/user';
import { useAuth } from './../hooks/auth';
import { PostsManager } from './../components/posts/PostsManager'
import ComponentsLayout from './../components/Layouts/ComponentsLayout';
import CommentsManager from './../components/comments/CommentsManager';
import EditProfileModal from './../components/profile/EditProfileModal';
import myAxios from './../services/axios';
import axios from 'axios';

const Profile: React.FC = () => {

  const { user } = useAuth({ middleware: 'auth' });
  const [userData, setUserData] = useState<User>();
  const [showRole, setShowRole] = useState<boolean>(false)
  const [profilePic, setProfilePic] = useState('');

  async function getUserData(_id: string) {
    type userResponse = {
      data: User;
    };
    try {
      const res = await myAxios.get<userResponse>(`/users/${_id}`);
      setUserData(res.data.data);
    } catch (e) {
      console.error(e);
    }
  }

  async function getProfilePicture() {
    const res: any = await axios('https://randomuser.me/api/');
    console.log('res:', res.data.results[0].picture.large);
    setProfilePic(res.data.results[0].picture.large);
  }

  useEffect(() => {
    getUserData(user?._id);
    getProfilePicture();
  }, [user]);

  return (
    <AppLayout
      header={
        <h2 className="font-semibold text-3xl text-white align-text-bottom leading-tight">
          Profile
        </h2>
      }>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              {userData ?
                <div className="p-6 bg-white border-b border-gray-200">
                  <ComponentsLayout
                    title={
                      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        My informations
                      </h2>
                    }>
                    <div className="flex flex-col sm:flex-row justify-around mx-20">
                      <img
                        className="w-24 h-24 md:w-48 md:h-auto rounded-full"
                        src={profilePic}
                        alt="profile"
                        width="400" height="400">
                      </img>
                      <div>
                        <h1><strong>Username:</strong> {userData.name}</h1>
                        <p><strong>Email:</strong> {userData.email}</p>
                        <p><strong>Member since</strong> {userData.created_at.substring(0, 10)}</p>
                        <p><strong>Enrolled in:</strong> {userData.formation}</p>
                        <p><strong>City:</strong> {userData.city}</p>
                        <p><strong>Year #</strong> {userData.year}</p>
                        {/* <p><strong>I can help others with:</strong> {userData.tags?.map(tag => (tag))}</p> */}
                        <p><strong>Bio:</strong> {userData.bio}</p>
                        <br></br>
                      </div>
                    </div>
                    <EditProfileModal
                      userData={userData}
                      setUserData={setUserData}
                      showRole={showRole}
                    />
                  </ComponentsLayout>
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
      </div>
    </AppLayout >
  )
}
export default Profile