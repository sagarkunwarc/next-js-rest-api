/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { ElementRef, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { createUser } from '../actions/page';

const CreateUser = () => {

    const [ourCreateUserActionResponse, createUserAction]= useFormState(createUser, null);
    const {pending} = useFormStatus();
    const formRef = useRef<ElementRef<"form">>(null);

    if(formRef.current ) {
        formRef.current.reset();
    }

  return (
   <form ref ={formRef} className="text-black"action ={createUserAction}>
        <input type ="text" name="name" />
        <input type ="text" name="email" />
        <button className="bg-blue-500" type ="submit" >Submit 
        </button>
        <p className='text-red-500'>{ourCreateUserActionResponse?.message}</p>
        </form>     
  );
};

export default CreateUser;