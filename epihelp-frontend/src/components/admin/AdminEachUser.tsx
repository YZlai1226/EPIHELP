import React, { useState } from 'react';
import { deleteUser } from './../../services/userService';
import { User } from './../../models/user'
import Button from './../Button'
import EditProfileModal from './../../components/profile/EditProfileModal'

type EachUserProps = {
  user: User
  setUserData: React.Dispatch<React.SetStateAction<User | undefined>>
  getUsers:() => void
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
        <Button
          onClick={() => deleteUser(props.user._id)}
        >
          Delete
        </Button>
        &#160;

        <EditProfileModal
          userData={props.user}
          setUserData={props.setUserData}
          showRole ={showRole}
          getUsers={props.getUsers}
        />
      </td>
    </tr>
  )
}
export default AdminEachUser;