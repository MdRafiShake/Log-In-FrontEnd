import { set } from 'mongoose';
import React from 'react';
import { useState, useEffect } from 'react';

const content = ({ items, isLoading, name, setName, passWord, setPassword, setEditId, deleteData,fetchData }) => {

    const handleEdit =async (user) => {
        setName(user.userName);
        setPassword(user.passWord);
        setEditId(user._id);
        

    }

   



    return (
        <div className=' w-full flex items-center justify-center '>
            <div className='card min-h-[100px] bg-[#34699A] w-[30vw]  '>
                <div className='flex justify-between'>
                    <div className="card-title text-3xl flex flex-col items-start ml-5 mt-2">Data <hr className='w-[10vw] h-1 bg-white ml-[-0.50vw]' /></div>
                    <div className='bg-[#FDF5AA] text-[#58A0C8] w-[2rem] h-[2rem] text-center font-bold rounded-full text-lg mt-[1rem] mr-[1rem]'>{items.length}</div>
                </div>

                {isLoading ? (
                    <div className='flex justify-center items-center h-[200px]'>
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                ) : (


                    items.length > 0 ? (
                        items.map((user, id) => (
                            <div key={id} className="card-container flex justify-center items-center flex-col text-[#FDF5AA] mb-3">
                                <div className='flex justify-center items-center'>
                                    <div className='card-body flex justify-center items-start bg-[#58A0C8] w-[23vw] h-[100px] rounded-sm m-2 text-xl gap-1 px-4'>
                                        <h1>Name: {user.userName}</h1>
                                        <h1>Password: {user.passWord}</h1>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <button className='btn btn-primary bg-transparent border-b-2
                                    border-black text-[#FDF5AA] text-lg font-semibold w-[3vw] h-[3vw] p-0' onClick={()=>handleEdit(user)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                        </button>




                                        <button className='btn btn-primary bg-transparent border-b-2
                                    border-black text-[#FDF5AA] text-lg font-semibold w-[3vw] h-[3vw] p-0' onClick={()=>deleteData(user._id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                            </svg>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-white m-4'>No data found</p>
                    )
                )}


            </div>
        </div>
    );
}

export default content;
