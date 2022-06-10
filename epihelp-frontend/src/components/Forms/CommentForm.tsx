import React from 'react'
import { useAuth } from './../../hooks/auth';
import ComponentsLayout from './../Layouts/ComponentsLayout';

/* eslint-disable max-len */

type CommentFormProps = {
  // post_id: string,
  setContent: React.Dispatch<React.SetStateAction<string>>,
  content: string,
  handleSubmit: any,
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>,

  // addComment: () => void;
}

const CommentForm: React.FC<CommentFormProps> = (props) => {
  const { user } = useAuth({ middleware: 'auth' });

  return (
    <ComponentsLayout
      title={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Your answer
        </h2>
      }>

      <div className="mt-5 md:mt-0 md:col-span-2">
        <form>
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

              <div>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    value={props.content}
                    onChange={(e) => props.setContent(e.target.value)}
                    rows={6}
                    className="shadow-sm focus:ring-blue-900 focus:border-blue-900 mt-1 block
                        w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Enter the content of your answer."
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Reminder: always be polite and patient, this is a help forum.
                </p>
              </div>

            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                onClick={e => {props.handleSubmit(e); props.setOpen?.(false)}}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm
                    text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-900 focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
              >
                Post your answer
              </button>
            </div>
          </div>
        </form>
      </div>
    </ComponentsLayout>
  )
}
export default CommentForm;