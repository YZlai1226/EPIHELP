import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useAuth } from './../../hooks/auth'
import { Category } from './../../models/category'
import EditButton from './../EditButton'
import { editCategory } from './../../services/categoryService'

/* eslint-disable max-len */

type editCateogryModalProps = {
  category: Category,
  getCategories:() => void
//   setCategory: React.Dispatch<React.SetStateAction<Category | undefined>>,
//   showRole: boolean
//   getUsers?: () => void
}

const EditCategoryModal: React.FC<editCateogryModalProps> = (props) => {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)

  const [category, setCategory] = useState(props.category);
  const { user } = useAuth();

  const handleClick = async (e: any) => {
    type CategoryReseponse = {
      data: Category[] | undefined
    };
    e.preventDefault();
    const res: any = await editCategory(
      props.category.id,
      category.name,
      category.description
    );
    setCategory(res.data);
    props.getCategories()
  }
  
  return (
    <div>

      <EditButton setOpen={setOpen} color={'black'} />

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
                                Name
                              </label>

                              <div className="mt-1 flex rounded-md shadow-sm w-96">
                                <input
                                  type="text"
                                  name="categoryName"
                                  id="categoryName"
                                  value={category.name}
                                  onChange={(e) => { setCategory(prevData => ({ ...prevData, name: e.target.value })) }}
                                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                                />
                              </div>

                              <br />
                              <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                Description
                              </label>

                              <div className="mt-1 h-52">
                                <textarea
                                  name="categoryDescription"
                                  id="categoryDescription"
                                  value={category.description}
                                  onChange={(e) => { setCategory(prevData => ({ ...prevData, description: e.target.value })) }}
                                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300 h-52"
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

export default EditCategoryModal; 