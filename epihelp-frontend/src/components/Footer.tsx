import React from 'react';
// import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
    {/* <div className="sm:flex sm:text-center">
            <img src="https://svgshare.com/i/ht1.svg" className="mr-5 h-10" alt="Flowbite Logo" />
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/legal" className="mr-4 hover:underline md:mr-6">Legal</a>
                </li>
                <li>
                    <a href="/legal" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div> */}
    {/* <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" /> */}
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 EPIHELP
      <a href="/legal" className="hover:underline">  Terms and Conditions.</a>
    </span>
  </footer>

);

export default Footer;