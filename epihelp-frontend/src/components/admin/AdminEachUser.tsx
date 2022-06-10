import React, { useState } from 'react';
import { deleteUser } from './../../services/userService';
import { User } from './../../models/user'
import Button from './../Button'
import EditProfileModal from './../../components/profile/EditProfileModal'

/* eslint-disable max-len */

type EachUserProps = {
  user: User
  setUserData: React.Dispatch<React.SetStateAction<User | undefined>>
  getUsers: () => void
}

const AdminEachUser: React.FC<EachUserProps> = (props) => {
  const [showRole, setShowRole] = useState<boolean>(true)

  return (
    <tr>
      <td className="border-separate border border-slate-300 h-24">{props.user._id}</td>
      <td className="border-separate border border-slate-300 h-24">{props.user.name}</td>
      <td className="border-separate border border-slate-300 h-24">{props.user.email}</td>
      <td className="border-separate border border-slate-300 h-24">{props.user.year}</td>
      <td className="border-separate border border-slate-300 h-24">{props.user.formation}</td>
      <td className="border-separate border border-slate-300 h-24">{props.user.role}</td>
      <td className="border-separate border border-slate-300 h-24">
        <div className="flex justify-center">
          <button
            className="block px-2.5 py-0.5 text-center"
            onClick={() => deleteUser(props.user._id)}
            type="button" >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
          &#160;

          <EditProfileModal
            userData={props.user}
            setUserData={props.setUserData}
            showRole={showRole}
            getUsers={props.getUsers}
          />
        </div>
      </td>
    </tr >
  )
}
export default AdminEachUser;