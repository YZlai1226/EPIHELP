import React from 'react';
import { deleteUser } from './../../services/userService';
import { User } from './../../models/user'
import Button from './../Button'

type EachUserProps = {
    user: User
  }

const AdminEachUser: React.FC<EachUserProps> = (props) => (
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
    </td>
  </tr>

)

export default AdminEachUser;