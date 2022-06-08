import React from 'react';
import { User } from './../../models/user'

type EachUserProps = {
    user: User
  }

const AdminEachUser: React.FC<EachUserProps> = (props) => (
  <tr>
    <td className="border-separate border border-slate-300 h-24">{props.user.id}</td>
    <td className="border-separate border border-slate-300 h-24">{props.user.name}</td>
    <td className="border-separate border border-slate-300 h-24">{props.user.email}</td>
    <td className="border-separate border border-slate-300 h-24">{props.user.role}</td>
    <td className="border-separate border border-slate-300 h-24"></td>
  </tr>

)

export default AdminEachUser;