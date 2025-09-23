'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import Button from './Button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Experiences', href: '#experiences' },
  { name: 'Articles', href: '/articles' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/10 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <nav
        className="container mx-auto flex items-center justify-between py-4 px-6"
        aria-label="Global"
      >
        {/* Logo (غير قابل للضغط) */}
        <div className="flex items-center gap-2">
          <img
            className="h-10 w-auto cursor-default"
            src="/images/favicon.ico"
            alt="SyriaExplorer Logo"
          />
          <span className="text-black text-2xl font-extrabold tracking-wide cursor-default">
            SyriaExplorer
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-black text-lg font-medium hover:text-gray-700 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:flex">
          <Button variant="primary">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-black p-2 rounded-md focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <span className="text-3xl">&#9776;</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 bg-black/30" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 overflow-y-auto shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <img
                className="h-8 w-auto cursor-default"
                src="/images/logo.svg"
                alt="SyriaExplorer Logo"
              />
              <span className="text-black font-bold text-lg cursor-default">
                SyriaExplorer
              </span>
            </div>
            <button
              type="button"
              className="text-gray-700 p-2 rounded-md focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <span className="text-2xl">&#10005;</span>
            </button>
          </div>

          <ul className="space-y-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-gray-800 font-medium hover:bg-gray-100 hover:text-black transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Button
              variant="primary"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
