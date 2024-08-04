import React from "react";
import BlogPost from '../components/BlogPost';
import NavBar from '../components/NavBar';


// title: should be user input

export function Home() {
  return (
    <main>
      {/* Insert Static Nav bar on top */}
      <NavBar />
      <div>
        {/* // Top part of homepage holding desc and image */}
        <div>
          {/* // Profile image */}
        </div>
        <div>
          {/* // desc */}
        </div>
      </div>
      <div className="flex flex-wrap justify-center mx-auto max-w-screen-lg">
        <BlogPost
        title="Project 1"
        desc="In this project I explore..."
        imageURL="https://images.ygoprodeck.com/images/cards_cropped/54498517.jpg"
        />
        <BlogPost
        title="Project 2"
        desc="In this project I explore..."
        imageURL="https://images.ygoprodeck.com/images/cards_cropped/11132674.jpg"
        />
        <BlogPost
        title="Project 3"
        desc="In this project I explore..."
        imageURL="https://images.ygoprodeck.com/images/cards_cropped/95440947.jpg"
        />
        <BlogPost
        title="Project 4"
        desc="In this project I explore..."
        imageURL="https://images.ygoprodeck.com/images/cards_cropped/95440946.jpg"
        />
      </div>
      
      
    </main>
  );
}

export default Home;