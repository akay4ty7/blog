import React from "react";
import BlogPost from '@/components/BlogPost';
import NavigationBar from '@/components/NavigationBar';
import FooterPanel from '@/components/Footer';

// title: should be user input

export function project_list() {
  return (
    <main>
      <div>
        <NavigationBar />
      </div>
      {/* // Top part of homepage holding desc and image */}
      <div className="flex flex-wrap justify-center mx-auto max-w-screen-lg">
      </div>

      <FooterPanel />
      
    </main>
  );
}

export default project_list;