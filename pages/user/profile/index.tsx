

import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import MainClient from '../../../components/Client/MainClient'
import HeaderClient from '../../../components/Client/HeaderClient'
import UserSidebar from '../../../components/Client/UserSidebar'
import UsersProfile from '../../../components/Client/UsersProfile'
import FooterClient from '../../../components/Client/FooterClient'
import ButtonGreen from '../../../components/Client/ButtonGreen'


import { useGlobalContext } from '../../../Context/GlobalContext'
import { editUser, getUser } from '../../../services'
import { useFormik } from 'formik'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { QUERIES } from '../../../Constant/Queries'
import UseFileUpload from '../../../helpers/uploadImages'
import Image from 'next/image'
import { toast } from 'react-toastify'




const UserProfile = () => {
  const {userData,profilImg,setProfilImg,setLetters,letters,isLoading}=useGlobalContext() || {}

const queryClient=useQueryClient()
const { handleFileChange, handleUpload, file, setFile,downloadURL,setDownloadURL } = UseFileUpload() || {};
// const { data: userData, isLoading, isError } = useQuery(QUERIES.User, getUser);
const [loading,setLoading]=useState(false)
useEffect(() => {
  if (file) {
    handleUpload(file)
    
  }
}, [file])

console.log("userData profildeki", userData);
console.log("user imageeeeeeeeeee",userData?.img_url);
// const oldName = userData?.user.username;
// const oldFullname=userData?.user.fullname
console.log("usernamebackden gelen",userData?.username);
// console.log(oldName,"usernamebackden gelen const");

const oldData = {
  email: userData?.email || '',
  fullname:userData?.fullname || '',
  username: userData?.username || '',
  address: userData?.address || '',
  phone: userData?.phone || '',
  img_url: downloadURL || ""
};


useEffect(() => {
  if (letters && profilImg) {
    const userFullname = userData?.fullname;
    const lettersArr = userFullname?.toUpperCase().split(' ');
    const userLetters = lettersArr?.map((item) => item[0]).join("");
    setLetters(userLetters);
  }
}, []);

const {mutate:updateUserMutation}=useMutation({
  mutationFn:editUser,
  onSuccess:(data)=>{
    console.log(data,"userupdmutation data");
    toast.success("Profile updated")
queryClient.invalidateQueries(QUERIES.User)
    // setProfilImg(downloadURL)
   userData && setProfilImg &&  setProfilImg(userData?.img_url || "")
    // setLetters(userLetters)

  },
  onError:(error)=>{
    console.log(error,"mutationuserde errorrrrrrrrrrrrrrrr");
    toast.error("Error updating profile")
  }
})

const [newData, setNewData] = useState({});

useEffect(() => {
  if (userData ) {
    const { email, fullname, username, address, phone, img_url } = userData 
    setNewData({
      email: email || '',
      fullname: fullname || '',
      username: username || '',
      address: address || '',
      phone: phone || '',
      img_url: img_url || '',
    });
  userData && setProfilImg && setProfilImg(userData?.img_url || "")
      // setUsername(oldName)
  }
}, [userData]);

const formik = useFormik({

initialValues: {
  ...oldData,
  ...newData,
  // img_url:userData?.user.img_url
 
 
},
onSubmit: async (values) => {
  setLoading(true); // Yüklenme durumunu aç

  const updatedUserData = {
    email: userData?.email, 
    fullname: values.fullname,
    username: values.username,
    address: values.address,
    phone: values.phone,
    img_url: downloadURL || userData?.img_url
  };
  console.log("formik valuessssssssssssssss", updatedUserData);
  updateUserMutation(updatedUserData);
  // setProfilImg(userData?.user.img_url);
  // setProfilImg(downloadURL)

// formik.resetForm()
}
});

if (isLoading) {
  return <div>Loading...</div>;
}

const isDisabled=formik.values.address==="" || formik.values.username===""  || formik.values.fullname===""  || formik.values.phone===""


  return (
    <>
    <div>
      <Head>
        <title>User</title>
        <meta name='description'  content="Generated by next create app"/>
      </Head>
      <MainClient>
        <HeaderClient/>
        <div className='mt-4 flex gap-4 mb-[186px]'>
          <UserSidebar/> 
           {/* <UsersProfile /> */}
           <>
      <div className='bg-headerbg w-full pb-[95px] px-[30px]'>
        <div className='pt-10'>
          <p className='font-mukta text-[30px] font-[600] text-modal_p '>Profile</p>
        </div>
        <div className='mt-[61px]'>
          <form className='' action="" onSubmit={formik.handleSubmit}>
            <div className='flex justify-center'>
              <div className='w-[146px] h-[141px] flex flex-col items-center justify-center bg-white rounded-full'>
                <label htmlFor="fileInput">
                  <img className='w-[60px] h-[60px]  rounded-full' 
                    // src={downloadURL ? downloadURL : "/icons/uploadgreen.svg" : {userData?.user.img_url}} 
                    // src='/icons/uploadgreen.svg'
                    src={downloadURL ? downloadURL : (userData?.img_url || "/icons/uploadgreen.svg")}

 alt="upload" />
                  <p className='roboto-medium font-medium text-lg text-text92'>upload</p>
                </label>
                <input
                  name='img_url'
                  value={formik.values.img_url}
                  onBlur={formik.handleBlur}
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      handleFileChange(e);
                      setFile(e.target.files[0]);
                    }
                  }}
                  className='hidden invisible' type="file" id='fileInput' />
              </div>
            </div>
            <div className='flex justify-between gap-[53px] '>
              <div className='flex flex-col w-1/2 '>
                <label className='font-mukta font-[600] text-modal_p text-lg letter3' htmlFor="">Contact</label>
                <input
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  className='h-[53px] px-[23px] rounded' type="number"
                  placeholder='+994' />
                <label className='font-mukta font-[600] text-modal_p text-lg letter3' htmlFor="">Username</label>
                <input
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  className='h-[53px] px-[23px] rounded' type="text" placeholder='username' />

                <label className='font-mukta font-[600] text-modal_p text-lg letter3' htmlFor="">Full Name</label>
                <input
                  name="fullname"
                  value={formik.values.fullname}
                  onChange={formik.handleChange}
                  className='h-[53px] px-[23px] rounded' type="text" />
              </div>
              <div className='flex flex-col w-1/2 '>

                <label className='font-mukta font-[600] text-modal_p text-lg letter3' htmlFor="">Email</label>
                <input
                  name="email"
                  value={userData?.email}
                  // onChange={formik.handleChange}
                  className='h-[53px] px-[23px] rounded' type="email" />

                <label className='font-mukta font-[600] text-modal_p text-lg letter3' htmlFor="">Address</label>
                <input
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  className='h-[53px] px-[23px] rounded' type="text" />
                <div className='mt-7'>
                  <ButtonGreen btnTitle="Save" disabled={isDisabled} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>


        </div>
      </MainClient>
      <FooterClient/>
    </div>
    </>
  )
}

export default UserProfile












