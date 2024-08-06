import React from 'react';

const FooterPanel: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} [K.A]. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="#" className="hover:underline mx-2">Home</a> | 
          <a href="#" className="hover:underline mx-2">About</a> | 
          <a href="#" className="hover:underline mx-2">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterPanel;
