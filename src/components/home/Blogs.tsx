"use client"
import { blogData } from "@/utils/blogsData";
import BlogCard from "../ui/BlogCard";
import { motion } from "framer-motion";

const Blogs = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const gridContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // stagger each blog card
      },
    },
  };

  const gridItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="px-5 md:px-8 xl:px-20 2xl:px-60 3xl:px-96 py-10" id="blogs">
      {/* Heading */}
      <motion.h3
        className="text-sea-green text-3xl sm:text-4xl md:text-5xl uppercase font-normal text-center py-5 font-playfair-display"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
      >
        The Travel Ledger
      </motion.h3>

      {/* Blogs Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 4xl:gap-20 my-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={gridContainer}
      >
        {blogData.map((blog) => (
          <motion.div key={blog.slug} variants={gridItem}>
            <BlogCard {...blog} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Blogs;
