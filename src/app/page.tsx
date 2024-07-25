import React from "react";
import BlogPost from '../components/BlogPost';


// title: should be user input

export function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">K's Blog</h1>
      <div className="grid grid-cols-1 gap-4">
        <BlogPost
          title="Project 1"
          excerpt="In this project I explore Convolutional Neural Networks"
          imageUrl="https://via.placeholder.com/420"
        />
        <BlogPost
          title="Project 2"
          excerpt="This project is about game programming..."
          imageUrl="https://via.placeholder.com/420"
        />
      </div>
    </div>
  );
}

export default Home;