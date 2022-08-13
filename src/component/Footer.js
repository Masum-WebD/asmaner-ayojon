import React from 'react';
import logo from "../Assest/logo.png";

const Footer = () => {
    return (
        <div>
            
<footer class="p-4 bg-gray-700  shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
            <img src={logo}class="h-8" alt="Flowbite Logo"/>
            <span class="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">আসমানের আয়োজন</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400">
            <li>
                <a href="# " class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="# " class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="# " class="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="# " class="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
    <span class="block text-sm text-white sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">আসমানের আয়োজন</a>. All Rights Reserved.
    </span>
</footer>

        </div>
    );
};

export default Footer;