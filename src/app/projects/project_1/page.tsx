import React from "react";
import NavigationBar from '@/components/NavigationBar';
import FooterPanel from '@/components/Footer';
import BlogPageTemplate from "@/components/BlogPageTemplate";
// title: should be user input

export function project_1() {
  return (
    <main>
      <div>
        <NavigationBar />
      </div>
      <div>Insert List of Projects Here
      </div>

      <FooterPanel />
      
    </main>
  );
}

export default project_1;