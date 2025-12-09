import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'

interface BlogCardProps {
  image: StaticImageData;
  title: string;
  slug: string;
}

const BlogCard = ({ image, title, slug }: BlogCardProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block overflow-hidden"
    >
      <div className="relative w-full overflow-hidden h-96 lg:h-full xl:h-[480px] 4xl:h-[840px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <h2 className="mt-4 text-lg 4xl:text-4xl text-gray-500 font-medium group-hover:text-gray-800 transition">
        {title}
      </h2>

    </Link>
  )
}

export default BlogCard