import { blogData } from "@/utils/blogsData";
import React from "react";
import BlogCard from "../ui/BlogCard";

const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10" id="blogsNew">
      <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl uppercase font-semibold text-center py-5 font-playfair-display">
        The Travel Ledger
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-4">
        {blogData.map((blog) => (
          <BlogCard key={blog.slug} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
