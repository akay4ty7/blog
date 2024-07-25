import React from "react";

// ask Tim regarding trouble with shadcn-ui
// my first component
function BlogPost({ title, excerpt, imageUrl }: { title: string; excerpt: string; imageUrl: string }) {
    return (
      <div className="p-4 border rounded shadow hover:shadow-lg transition-shadow duration-300">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p>{excerpt}</p>
      </div>
    );
  }

export default BlogPost;
