'use client'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import NavAdmin from '../../layouts/NavAdmin';
import HeaderAdmin from '../../layouts/HeaderAdmin';
export default function page() {
  const [active,setActive]=useState<boolean>(false);
  const router=useRouter();
  const dispatch=useDispatch();
  const [widthHeaderLeft,setWithHeaderLeft]=useState<string>('200px');
  const [hiddenHeader,setHiddenHeader]=useState<boolean>(true);
  // authorize access to page
  useEffect(()=>{
    const admin=JSON.parse(localStorage.getItem('admin')||'null');
    if(!admin){
      router.push('/login');
    }
  },[])
  //handle Active Header
  
  //handle Mouse header-left
  const handleMouseHeaderLeft=()=>{
      setWithHeaderLeft(widthHeaderLeft=='80px'?'200px':'80px');
      setHiddenHeader(hiddenHeader?false:true);
  } 
  //log out
  const logout=()=>{
     localStorage.removeItem('admin');
     router.push('/login');
  }
  return (
    <div className=''>
      {/* Bắt đầu nav */}
        <NavAdmin/>
        {/* Kết thúc nav */}

       <div className='flex'>
          {/* Start Header-Left */}
          <HeaderAdmin/>
          {/* Header-left end */}
          {/* Main start */}
          <main className='flex flex-col w-[100%]'>
        {/* {modal&&<ModalDetailUser user={user}/>} */}
            {/* Header-Main Start */}
            {/* <div className='flex justify-around items-center p-[20px]'>
            
              <div className=' flex gap-[20px] items-center'>
              </div>
              <div className='relative'>
                  <input onChange={handleChange} type="text" placeholder='Search user' className='p-1' value={valueSearch}/>
                  <i onClick={searchUser} className='bx bx-search absolute right-0 top-1 bx-sm cursor-pointer'></i>
              </div>
            </div> */}
            {/* Header-Main End */}
            {/* Article Start */}
            <article className='py-[20px] px-[50px] bg-zinc-200'>
                {/* <section className='flex justify-around'>
                   <div className='flex items-center bg-white py-2 px-[80px] gap-1 rounded-lg'>
                   <i className='bx bxs-user bx-sm text-lime-700'></i>
                   <div>
                    <p className='text-lg font-bold '>Total Users</p>
                    <p> {usersAPI.length} users</p>
                   </div>
                   </div>
                   <div className='flex items-center bg-white py-2 px-[80px] gap-1 rounded-lg'>
                   <img className='w-[20px] h-[20px] rounded-[50%]' src={topFollowers.avatar} alt="" />
                   
                   <div>
                    <p className='text-lg font-bold '>Top Followers</p>
                    <p className='flex'> {topFollowers.username}</p>
                   </div>
                   </div>
                </section> */}
                {/* Calculate End */}
                {/* Content Start */}
                <section className='bg-white rounded-lg p-[20px] mt-[50px] flex flex-col gap-2'>
                   {/* <p className='text-lg font-bold'>List users</p>
                   <p className='text'><i className='bx bxs-alarm-exclamation'></i>There are {usersByTotal.length} users to be found </p>
                   <br /> */}
                   {/* <Table striped bordered hover className='rounded-[5px]'>
                    <thead>
                      <tr>
                        <th>Index</th>
                        <th>Avatar</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Activities</th>
                      </tr>
                    </thead>
                    <tbody>
                        {users.map((btn,index)=>(
                           <tr key={index}>
                           <td>{index+1}</td>
                           <td className='flex justify-center'><img className='w-[50px] h-[50px] rounded-[50%]' src={btn.avatar} alt="" /></td>
                           <td>{btn.username}</td>
                           <td>{btn.email}</td>
                           <td><Button variant={btn.status?"outline-success":"outline-danger"}>{btn.status?'Active':"Disable"}</Button></td>
                           <td className='cursor-pointer'>
                               {!btn.status?<i onClick={()=>handleLockUser(btn)} className='bx bxs-lock-alt'></i>:<i onClick={()=>handleLockUser(btn)} className='bx bxs-lock-open-alt'></i>}                          
                               <i onClick={()=>viewDetailUser(btn)} className="fa-solid fa-eye ml-[20px]"></i>
                           </td>
                         </tr>
                        ))}
                    </tbody>
                  </Table> */}
                  {/* pagination */}
                  <div className='flex gap-2 justify-center items-center text-orange-400'>
                
                  </div>
                </section>
            </article>
          </main>
        </div> 
    </div>
  )
}

