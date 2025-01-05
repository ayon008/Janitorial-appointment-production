/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import formatTimestamp from '@/js/convertTime';
import { urlFor } from '@/lib/sanity';

const BlogCards = ({ blog }) => {
    console.log(blog)
    return (
        <div className="card p-3 shadow-xl">
            <figure>
                <Image layout='responsive' src={urlFor(blog.titleImage).url()} alt='' width={950} height={665} className='w-full h-[150px]' />
            </figure>
            <div className="card-body p-0 mt-3">
                <h2 className="card-title inter text-base font-semibold">{blog?.title?.length > 50 ? `${blog?.title?.slice(0, 50)}...` : blog?.title}</h2>
                <hr className='h-[2px]' />
                <div className='flex items-center gap-2'>
                    <Image src={urlFor(blog?.authorImage).url()} width={30} height={1552} className='w-[30px] h-auto rounded-full' alt='' />
                    <h5 className='text-xs font-bold inter'>{blog?.authorName}</h5>
                </div>
                <p className='inter text-xs font-normal text-[#6C757D]'>{formatTimestamp(blog?.date)}</p>
                <p className='text-[#6C757D] font-normal inter text-xs'>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. </p>
                <div className="card-actions">
                    <Link className='w-full' href={`/blogs/${blog?.currentSlug}`}>
                        <button className="btn w-full rounded-lg bg-primary text-white">View post</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCards;