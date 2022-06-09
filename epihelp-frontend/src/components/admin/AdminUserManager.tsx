// import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { User } from './../../models/user';
import AdminEachUser from './AdminEachUser'

type UserProps = {
  users: User[]
  setUserData: React.Dispatch<React.SetStateAction<User | undefined>>
  getUsers:() => void
  // setUserRole: React.Dispatch<React.SetStateAction<string>>
  // setUserId: React.Dispatch<React.SetStateAction<string>>
  // handleSubmit: any
  // userRole: string
}

const AdminUserManager: React.FC<UserProps> = (props) => (
  <table className="border-separate border border-slate-400 w-full">
    <thead>
      <tr>
        <th className="border-separate border border-slate-300 w-2/8 h-20 bg-gray-600 text-gray-200">ID</th>
        <th className="border-separate border border-slate-300 w-1/6 h-20 bg-gray-600 text-gray-200">Name</th>
        <th className="border-separate border border-slate-300 w-3/8 h-20 bg-gray-600 text-gray-200">Email</th>
        <th className="border-separate border border-slate-300 w-3/8 h-20 bg-gray-600 text-gray-200">Year</th>
        <th className="border-separate border border-slate-300 w-3/8 h-20 bg-gray-600 text-gray-200">Formation</th>
        <th className="border-separate border border-slate-300 w-3/8 h-20 bg-gray-600 text-gray-200">Role</th>
        <th className="border-separate border border-slate-300 w-1/6 h-20 bg-gray-600 text-gray-200">actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.map((user) => (
        <AdminEachUser user={user} key={user._id} setUserData={props.setUserData} getUsers={props.getUsers}/>
      )
      )}
    </tbody>
  </table>
) 

export default AdminUserManager