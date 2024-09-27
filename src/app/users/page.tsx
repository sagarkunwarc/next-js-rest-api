/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import prisma from "../db";
import Link from "next/link";
import { createUser } from '@/app/actions/page';
import CreateUser from "./create-user";


const Users = async () => {
  const users = await prisma.user.findMany({
    include: {
      posts:  true
    }
  });

  return (
    <div>
      {users?.map((user) => (
        <div key={user.id}>
          <h1>Name: {user.name}</h1>
          <Link href={`/users/${user.id}/posts`}>
          <p>Email: {user.email}</p>
          </Link>
          {user.posts.map((post) => (
            <div key={post.id}>
              <h1>Title: {post.title}</h1>
              <p>Content: {post.content}</p>
              <br />
            </div>
          ))}
          <br />
        </div>
      ))}
      <CreateUser />
    </div>
  );
};

export default Users;
