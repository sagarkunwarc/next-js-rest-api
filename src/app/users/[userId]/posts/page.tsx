import prisma from '@/app/db';
import React from 'react';

const UserPosts = async({params}: {params: {userId: string}}) => {
    const posts = await prisma.post.findMany({
      where: {
        userId: Number(params.userId)
      },
      skip: 0,
      take: 5,
    });

  return (
    <div>
      {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <br />
          </div>
        ))}
    </div>
  );
};

export default UserPosts;