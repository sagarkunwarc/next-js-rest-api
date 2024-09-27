import React from "react";
import prisma from "../db";

const Posts = async () => {
  const posts = await prisma.post.findMany();
  return (
    <>
      <h1>
      Hello from Post Page </h1>
      <div>
        {posts.map((post) => (
          <>
            <div>Title: {post.title}</div>
          </>
        ))}
      </div>
    </>
  );
};

export default Posts;
