import { get, set } from 'mongoose';
import React from 'react';


const index = ({ name, setName, passWord, setPassword, fetchData, getData, isLoading, updateData, editId, setEditId, deleteData }) => {



  const handleSubmit = async (e) => {

    e.preventDefault();

    if (editId) {
      await updateData(editId, name, passWord);
     
    }
    else {
      await fetchData();
    }



    getData();
    setEditId(null);
    setName('');
    setPassword('');

  }

  return (
    <form className=' w-full h-[400px] flex items-center justify-center ' onSubmit={handleSubmit} >



      <div className='card bg-[#34699A] w-[30vw]'>
        <div className='card-body flex justify-center items-center '>


          <div className="mask mask-circle w-[100px] h-[100px] bg-[#113F67] flex items-center justify-center absolute top-[-50px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-13">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>

          </div>


          <div className="inputField mt-9">
            {/* UserName */}
            <label className="input validator bg-transparent text-[#FDF5AA] w-[100%] text-xl mb-2 border-0 border-b-2 border-[#FDF5AA] flex items-center justify-start gap-2">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                required
                placeholder="Username"
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minlength="3"
                maxlength="30"
                title="Only letters, numbers or dash"
                value={name}
                onChange={(e) => setName(e.target.value)}

              />
            </label>


            {/* Password */}
            <label className="input validator bg-transparent text-[#FDF5AA] w-[100%] text-xl mb-2 border-0 border-b-2 border-[#FDF5AA] flex items-center justify-start gap-2">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                  ></path>
                  <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                </g>
              </svg>
              <input
                type="Password"
                required
                placeholder="Password"
                minlength="3"
                maxlength="30"
                title="Only letters, numbers or dash"
                value={passWord}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <button className="btn btn-primary w-[100%] mt-5 text-[#FDF5AA] text-xl font-semibold bg-[#113F67]" >

            {!isLoading ? ("Submit") : (<span className="loading loading-spinner loading-sm"></span>
            )}

          </button>
        </div>
      </div>
    </form>
  );
}

export default index;
