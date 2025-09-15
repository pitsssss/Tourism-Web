'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import Button from './Button';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Experiences', href: '#experiences' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container flex items-center justify-between py-4" aria-label="Global">
        <div className="flex items-center gap-x-4 lg:gap-x-8">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SyriaExplorer</span>
            <div className="flex items-center">
              <img 
                className="h-10 w-auto" 
                src="/images/logo.svg" 
                alt="SyriaExplorer Logo" 
              />
              <span className="ml-2 text-xl font-bold text-secondary-900">SyriaExplorer</span>
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-sm font-medium leading-6 text-secondary-700 hover:text-secondary-900 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button variant="primary">Get Started</Button>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-secondary-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">SyriaExplorer</span>
              <div className="flex items-center">
                <img 
                  className="h-8 w-auto" 
                  src="/images/logo.svg" 
                  alt="SyriaExplorer Logo" 
                />
                <span className="ml-2 text-lg font-bold text-secondary-900">SyriaExplorer</span>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-secondary-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-secondary-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-secondary-900 hover:bg-secondary-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button 
                  variant="primary" 
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};


export default Navbar;
