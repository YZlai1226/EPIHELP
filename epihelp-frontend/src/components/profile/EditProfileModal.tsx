import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useAuth } from './../../hooks/auth'
import { User } from './../../models/user'
import Button from './../Button'
import { editUser } from './../../services/userService'

/* eslint-disable max-len */

type editProfileModalProps = {
  userData: User,
  setUserData: React.Dispatch<React.SetStateAction<User | undefined>>,
}

const EditProfileModal: React.FC<editProfileModalProps> = (props) => {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)

  const [userData, setUserData] = useState(props.userData);
  const { user } = useAuth();

  const handleClick = async (e: any) => {
    type UserResponse = {
      data: User | undefined
    };
    e.preventDefault();
    const res: any = await editUser(
      props.userData._id,
      user._id,
      userData.name,
      userData.formation,
      userData.city,
      userData.year,
      userData.bio
    );
    props.setUserData(res.data);
  }

  return (
    <div>

      <Button
        onClick={() => setOpen(true)}
        type="button"
      >
        Edit
      </Button>

      {open === true &&
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => setOpen(false)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="translate-x-full opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="ease-in duration-300"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="translate-x-full opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          EDIT
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <div className="mt-2">

                            <form>
                              <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                Username
                              </label>

                              <div className="mt-1 flex rounded-md shadow-sm">
                                <input
                                  type="text"
                                  name="username"
                                  id="username"
                                  value={userData.name}
                                  onChange={(e) => { setUserData(prevData => ({ ...prevData, name: e.target.value })) }}
                                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                                />
                              </div>

                              <br />
                              <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                Curriculum
                              </label>
                              <div className="mt-1 flex rounded-md shadow-sm">
                                <select
                                  name="formation"
                                  id="formation"
                                  value={userData.formation}
                                  onChange={(e) => { setUserData(prevData => ({ ...prevData, formation: e.target.value })) }}
                                  autoComplete="formation"
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm
                                      focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value='Programme Grande Ecole'>Programme Grande Ecole</option>
                                  <option value='MSC Pro'>MSC Pro</option>
                                  <option value='Programme Global Digital'>Programme Global Digital</option>
                                  <option value='Msc Pro'>Executive MBA</option>
                                  <option value='Web@cademy'>Web@cademy</option>
                                  <option value='Coding Academy'>Coding Academy</option>
                                </select>
                              </div>

                              <br />
                              <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                City
                              </label>
                              <div className="mt-1 flex rounded-md shadow-sm">
                                <select
                                  name="city"
                                  id="city"
                                  value={userData.city}
                                  onChange={(e) => { setUserData(prevData => ({ ...prevData, city: e.target.value })) }}
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm
                                      focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option>Bordeaux</option>
                                  <option>Le Kremlin-Bicêtre</option>
                                  <option>Lille</option>
                                  <option>Lyon</option>
                                  <option>Marseille</option>
                                  <option>Montpellier</option>
                                  <option>Mulhouse</option>
                                  <option>Nancy</option>
                                  <option>Nantes</option>
                                  <option>Nice</option>
                                  <option>Paris</option>
                                  <option>Rennes</option>
                                  <option>Strasbourg</option>
                                  <option>Toulouse</option>
                                  <option>Bruxelles</option>
                                  <option>Berlin</option>
                                  <option>Barcelona</option>
                                  <option>Cotonou</option>
                                  <option>Saint-André</option>
                                  <option>New-York</option>
                                </select>
                              </div>

                              <br />
                              <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                Year
                              </label>
                              <div className="mt-1 flex rounded-md shadow-sm">
                                <select
                                  name="year"
                                  id="year"
                                  value={userData.year}
                                  onChange={(e) => { setUserData(prevData => ({ ...prevData, year: e.target.value })) }}
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm
                                      focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value='1'>1</option>
                                  <option value='2'>2</option>
                                  <option value='3'>3</option>
                                  <option value='4'>4</option>
                                  <option value='5'>5</option>
                                </select>
                              </div>

                              <br />
                              <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                Your bio
                              </label>
                              <div className="mt-1">
                                <textarea
                                  id="bio"
                                  name="bio"
                                  value={userData.bio}
                                  onChange={(e) => { setUserData(prevData => ({ ...prevData, bio: e.target.value })) }}
                                  rows={6}
                                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block
                        w-full sm:text-sm border border-gray-300 rounded-md"
                                  placeholder="Tell us a bit about yourself."
                                />
                              </div>

                              <br />
                              <button
                                onClick={e => { setOpen?.(false); handleClick(e) }}
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm
                    text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Save
                              </button>

                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div >
          </Dialog >
        </Transition.Root >
      }
    </div >
  )
}

export default EditProfileModal; 