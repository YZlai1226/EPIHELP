import React, { FormEventHandler } from 'react'

/* eslint-disable max-len */

type postFormProps = {
  formTitle: string,
  showCategory: boolean,
  // handleSubmit: FormEventHandler<HTMLFormElement>,
  handleSubmit: any,
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  setContent: React.Dispatch<React.SetStateAction<string>>,
  setCategory?: React.Dispatch<React.SetStateAction<string>>,
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>,
  title: string,
  category?: string,
  content: string,
}
const PostForm: React.FC<postFormProps> = (props) => 
  (
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">{props.formTitle}</h3>
          <p className="mt-1 text-sm text-gray-600">
            Before you post, be sure to check the <a href='/'>forums</a> to see if someone already answered it.
          </p>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        {/* <form onSubmit={props.handleSubmit}> */}
        <form>
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={props.title}
                      onChange={(e) => props.setTitle(e.target.value)}
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full
                          rounded-md sm:text-sm border-gray-300"
                      placeholder="Enter the title of your question."
                    />
                  </div>
                </div>
              </div>
            </div>
            {props.showCategory === true &&
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  onChange={(e) => props.setCategory?.(e.target.value)}
                  autoComplete="category"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm
                      focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >

                  <option value='629661c6a3a87f9f730c9b02'>Software development</option>
                  <option value='62966202a3a87f9f730c9b03'>Web development</option>
                  <option value='62966272a3a87f9f730c9b04'>Security/Hacking</option>
                  <option value='6298863eb4671f842c0d7892'>Data/AI</option>
                  <option value='62988671b4671f842c0d7893'>Hardware</option>
                  <option value='6298874fb4671f842c0d7894'>Job and Internship search</option>
                  <option value='62988856b4671f842c0d7895'>Entrepreneurship</option>
                  <option value='62988918b4671f842c0d7896'>Student life</option>
                  <option value='62988fcab4671f842c0d7897'>General discussion</option>
                </select>
              </div>
            }

            <div>
              <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                Your question
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  value={props.content}
                  onChange={(e) => props.setContent(e.target.value)}
                  rows={6}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block
                        w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder="Enter the content of your question"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Be as detailed as possible.
              </p>
            </div>

            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                onClick={() => {props.setOpen?.(false); props.handleSubmit('')}}
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm
                    text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )

export default PostForm;