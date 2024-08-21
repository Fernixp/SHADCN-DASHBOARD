import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--background))] border-t border-[hsl(var(--border))] md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
                <ul className="flex items-center flex-wrap mb-6 md:mb-0">
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-500 dark:text-gray-400 hover:underline mr-4 md:mr-6"
                    >
                      Terms and conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-500 dark:text-gray-400 hover:underline mr-4 md:mr-6"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-500 dark:text-gray-400 hover:underline mr-4 md:mr-6"
                    >
                      License
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-500 dark:text-gray-400 hover:underline mr-4 md:mr-6"
                    >
                      Cookie Policy
                    </a>
                  </li>
                </ul>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  © 2024{" "}
                  <a href="#" className="hover:underline">
                    Shadcn/ui™
                  </a>
                  . All rights reserved.
                </div>
              </footer>
  )
}
