import prisma from '@/app/db';
import React from 'react';

const PostDetail = async ({params}:{params:{id:string}}) => {
    const post = await prisma.post.findFirst({
        where: {
            id: Number(params.id)
        }
    })
  return (
    <div>
      <h1 className="text-5xl font-bold">Post Detail: </h1>
      <div> Title: {post?.title}</div>
      <div> Content: {post?.content}</div>
    </div>
  );
};

export default PostDetail;