import Hero from '@/components/home/Hero'
import ImageSlider from '@/components/ui/ImageSlider'
import { blogData } from '@/utils/blogsData'
import React from 'react'

const BlogDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    const data = blogData.find(x => x.slug === slug)

    if (!data) return null;
    return (
        <>
            <ImageSlider heroData={data?.images} height="h-96 md:h-[420px]" />
            <div dangerouslySetInnerHTML={{ __html: data?.blogHTML }} />
        </>
    )
}

export default BlogDetailsPage