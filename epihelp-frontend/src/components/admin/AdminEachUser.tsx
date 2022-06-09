import React, { useState } from 'react';
import { deleteUser } from './../../services/userService';
import { User } from './../../models/user'
import Button from './../Button'
import EditProfileModal from './../../components/profile/EditProfileModal'

type EachUserProps = {
  user: User
  setUserData: React.Dispatch<React.SetStateAction<User | undefined>>
  getUsers:() => void
  // setUserRole: React.Dispatch<React.SetStateAction<string>>
  // setUserId: React.Dispatch<React.SetStateAction<string>>
  // handleSubmit: any
  // userRole: string
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
        {/* <Button
      >
        Edit
      </Button> */}
        <EditProfileModal
          userData={props.user}
          setUserData={props.setUserData}
          showRole ={showRole}
          getUsers={props.getUsers}
        />
      </td>
    </tr>
    // <tr>
    //   <td className="border-separate border border-slate-300 h-24">{props.user._id}</td>
    //   <td className="border-separate border border-slate-300 h-24">{props.user.name}</td>
    //   <td className="border-separate border border-slate-300 h-24">{props.user.email}</td>
    //   <td className="border-separate border border-slate-300 h-24">{props.user.year}</td>
    //   <td className="border-separate border border-slate-300 h-24">{props.user.formation}</td>
    //   {/* <td className="border-separate border border-slate-300 h-24">{props.user.role}</td> */}
    //   <td className="border-separate border border-slate-300 h-24">
    //     <select
    //       id="role"
    //       name="role"
    //       value={props.userRole}
    //       onChange={(e) => props.setUserRole?.(e.target.value)}
    //       autoComplete="role"
    //       className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm
    //                     focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //     >
    //       <option value='admin'>admin</option>
    //       <option value='moderator'>moderator</option>
    //       <option value='user'>user</option>
    //     </select>
    //   </td>
    //   <td className="border-separate border border-slate-300 h-24">
    //     <button
    //       onClick={e => { props.handleSubmit(e); props.setUserId(props.user._id) }}

    //       type="submit"
    //       className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm
    //                   text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none
    //                   focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //     >
    //       Post
    //     </button>
    //   </td>
    // </tr>

  )
}
export default AdminEachUser;