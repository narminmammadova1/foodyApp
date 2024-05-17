// // import React, { useEffect, useState } from 'react'
// // import ButtonGreen from '../ButtonGreen'
// // import { useGlobalContext } from '../../../Context/GlobalContext'
// // import { getUser } from '../../../services'
// // import { useFormik } from 'formik'
// // import { useQuery } from 'react-query'
// // import { QUERIES } from '../../../Constant/Queries'
// // import UseFileUpload from '../../../helpers/uploadImages'

// // const UsersProfile = () => {

// //   const { handleFileChange, handleUpload, downloadURL, setDownloadURL, file, setFile } = UseFileUpload() || {};
// // const {data:userData,isLoading,isError}=useQuery(QUERIES.User,getUser)

// // console.log(getUser());
// // useEffect(()=>{
// //   if(file){
// //     handleUpload(file)
// //   }
// // },[file])

// //  console.log("userData profildeki",userData?.user);

// //  const oldData={
// //  email:userData?.user.email,
// //  fullname:userData?.user.fullname,
// //  username:userData?.user.username,
// //  address:"",
// //  phone:"",
// //  img_url:""

// //  }
// // const [newData,setNewData]=useState(oldData)
// //   useEffect(()=>{
// //  console.log("usermelumatlari",getUser());
// // // // console.log(getUser());
// // setNewData(oldData)

// //    },[userData])

// //    const formik=useFormik({
// //     initialValues:oldData,
// //     onSubmit:(values)=>{
// //       console.log("formikvaluessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",values);
// //       // put burda
// //     }
// //   })

  

// // return (
// //   <>
// //     <div className=' bg-headerbg w-full pb-[95px] px-[30px]'>
// //       <div className=' pt-10'>
// //         <p className=' font-mukta text-[30px] font-[600] text-modal_p '>Profile</p>
// //       </div>
// //       {/* <div className='flex justify-center'>
// //         <div className='w-[146px] h-[141px] flex flex-col items-center justify-center bg-white rounded-full'>
// //           <img src="/icons/uploadgreen.svg" alt="upload" />
// //           <p className=' roboto-medium font-medium text-lg text-text92'>upload</p>
// //         </div>
// //       </div> */}
// //       <div className='mt-[61px]'>
// //         <form className='' action="" onSubmit={formik.handleSubmit}>
// //         <div className='flex justify-center'>
// //         <div className='w-[146px] h-[141px] flex flex-col items-center justify-center bg-white rounded-full'>
// //          <label htmlFor="fileInput"> <img src="/icons/uploadgreen.svg" alt="upload" />
// //           <p className=' roboto-medium font-medium text-lg text-text92'>upload</p></label>
         
         
// //           <input
// //                     name='img_url'
// //                     value={formik.values.img_url}
// //                     onBlur={formik.handleBlur}
// //                     onChange={(e) => {
// //                       if (e.target.files && e.target.files.length > 0) {
// //                         handleFileChange(e);
// //                         setFile(e.target.files[0]);
// //                       }
// //                     }}
// //                     className='hidden invisible' type="file" id='fileInput' />
// //         </div>
// //       </div>
// //           <div className='flex justify-between gap-[53px] '>
// //             <div className='flex flex-col w-1/2 '>
// //               <label className=' font-mukta font-[600]  text-modal_p text-lg letter3' htmlFor="">Contact</label>
// //               <input
// //                 name="phone"
// //                 value={formik.values.phone}
// //                 onChange={formik.handleChange}
// //                 className='h-[53px] px-[23px]  rounded' type="text"
// //                 placeholder='+994' />
// //               <label className=' font-mukta font-[600]  text-modal_p text-lg letter3' htmlFor="">Username</label>
// //               <input
// //                 name="username"
// //                 value={formik.values.username}
// //                 onChange={formik.handleChange}
// //                 className='h-[53px] px-[23px]  rounded' type="text" placeholder='username' />

// //               <label className=' font-mukta font-[600]  text-modal_p text-lg letter3' htmlFor="">Full Name</label>
// //               <input
// //                 name="fullname"
// //                 value={formik.values.fullname}
// //                 onChange={formik.handleChange}
// //                 className='h-[53px] px-[23px]  rounded' type="text" />
// //             </div>
// //             <div className='flex flex-col w-1/2 '>

// //               <label className=' font-mukta font-[600]  text-modal_p text-lg letter3' htmlFor="">Email</label>
// //               <input
// //                 name="email"
// //                 value={formik.values.email}
// //                 // onChange={formik.handleChange}
// //                 className='h-[53px] px-[23px]  rounded' type="email" />

// //               <label className=' font-mukta font-[600]  text-modal_p text-lg letter3' htmlFor="">Address</label>
// //               <input
// //                 name="address"
// //                 value={formik.values.address}
// //                 onChange={formik.handleChange}
// //                 className='h-[53px] px-[23px]  rounded' type="text" />
// //               <div className='mt-7'>
// //                 <ButtonGreen btnTitle="Save" />
// //               </div>
// //             </div>
// //           </div>
// //         </form>
// //       </div>

// //     </div>
// //   </>
// // )



// // }

// // export default UsersProfile
















// import React, { useEffect, useState } from 'react'
// import ButtonGreen from '../ButtonGreen'
// import { useGlobalContext } from '../../../Context/GlobalContext'
// import { editUser, getUser } from '../../../services'
// import { useFormik } from 'formik'
// import { useMutation, useQuery } from 'react-query'
// import { QUERIES } from '../../../Constant/Queries'
// import UseFileUpload from '../../../helpers/uploadImages'
// import Image from 'next/image'
// import { toast } from 'react-toastify'

// const UsersProfile = () => {
//   const { handleFileChange, handleUpload, file, setFile,downloadURL,setDownloadURL } = UseFileUpload() || {};
//   const { data: userData, isLoading, isError } = useQuery(QUERIES.User, getUser);

//   useEffect(() => {
//     if () {
//       getUser(user)
//     }
//   }, [user])




//   useEffect(() => {
//     if (file) {
//       handleUpload(file)
//     }
//   }, [file])

//   console.log("userData profildeki", userData?.user);
// console.log("user imageeeeeeeeeee",userData?.user.img_url);

//   const oldData = {
//     email: userData?.user.email ,
//     fullname: userData?.user.fullname ,
//     username: userData?.user.username ,
//     address: userData?.user.address || '',
//     phone: userData?.user.phone || '',
//     img_url: userData?.user.img_url || ''
//   };

//   const {mutate:updateUserMutation}=useMutation({
//     mutationFn:editUser,
//     onSuccess:(data)=>{
//       console.log(data,"userupdmutation data");
//       toast.success("Profule updated")
//     },
//     onError:(error)=>{
//       console.log(error,"mutationuserde errorrrrrrrrrrrrrrrr");
//       toast.error("error updated profile")
//     }
//   })

//   const [newData, setNewData] = useState(oldData);
//  const { profilImg,setProfilImg}=useGlobalContext()
// //   const formik = useFormik({
// //     initialValues: oldData,
// //     onSubmit: (values) => {
// //  values={
// //         email: formik.values.email ,
// //         fullname: formik.values.fullname ,
// //         username: formik.values.username ,
// //         address: formik.values.address,
// //         phone: formik.values.phone,
// //         img_url: downloadURL
// //       }
// //       setProfilImg(downloadURL)
// //       console.log("formik valuessssssssssssssss", values);
// //       updateUserMutation(values)
// //       // Put request
// //     }
// //   })


// const formik = useFormik({
//   initialValues: oldData,
//   onSubmit: async (values) => {
//     const updatedUserData = {
//       email: userData.user.email, // Kullanıcının mevcut email adresini kullan
//       fullname: values.fullname,
//       username: values.username,
//       address: values.address,
//       phone: values.phone,
//       img_url: downloadURL // Eğer kullanıcı yeni bir profil resmi yüklediyse, bu adresi gönderin
//     };
//     setProfilImg(userData?.user.img_url);
//     console.log("formik valuessssssssssssssss", updatedUserData);
//     updateUserMutation(updatedUserData);
//   }
// });

  
//   return (
//     <>
//       <div className='bg-headerbg w-full pb-[95px] px-[30px]'>
//         <div className='pt-10'>
//           <p className='font-mukta text-[30px] font-[600] text-modal_p '>Profile</p>
//         </div>
//         <div className='mt-[61px]'>
//           <form className='' action="" onSubmit={formik.handleSubmit}>
//             <div className='flex justify-center'>
//               <div className='w-[146px] h-[141px] flex flex-col items-center justify-center bg-white rounded-full'>
//                 <label htmlFor="fileInput">
//                   <img src="/icons/uploadgreen.svg" alt="upload" />
//                   <p className='roboto-medium font-medium text-lg text-text92'>upload</p>
//                 </label>
//                 <input
//                   name='img_url'
//                   value={formik.values.img_url}
//                   onBlur={formik.handleBlur}
//                   onChange={(e) => {
//                     if (e.target.files && e.target.files.length > 0) {
//                       handleFileChange(e);
//                       setFile(e.target.files[0]);
//                       // formik.setFieldValue('img_url', e.target.value); // Değişiklik burada
//                     }
//                   }}
//                   className='hidden invisible' type="file" id='fileInput' />
//               </div>
//             </div>
//             <div className='flex justify-between gap-[53px] '>
//               <div className='flex flex-col w-1/2 '>
//                 <label className='font-mukta font-[600] text-modal_p text-lg letter3' htmlFor="">Contact</label>
//                 <input
//                   name="phone"
//                   value={formik.values.phone}
//                   onChange={formik.handleChange}
//                   className='h-[53px] px-[23px] rounded' type="text"
//                   placeholder='+994' />
//                 <label className='font-mukta font-[600] text-modal_p text-lg letter3' htmlFor="">Username</label>
//                 <input
//                   name="username"
//                   value={formik.values.username}
//                   onChange={formik.handleChange}
//                   className='h-[53px] px-[23px] rounded' type="text" placeholder='username' />

//                 <label className='font-mukta font-[600] text-modal_p text-lg letter3' htmlFor="">Full Name</label>
//                 <input
//                   name="fullname"
//                   value={formik.values.fullname}
//                   onChange={formik.handleChange}
//                   className='h-[53px] px-[23px] rounded' type="text" />
//               </div>
//               <div className='flex flex-col w-1/2 '>

//                 <label className='font-mukta font-[600] text-modal_p text-lg letter3' htmlFor="">Email</label>
//                 <input
//                   name="email"
//                   value={userData?.user.email}
//                   className='h-[53px] px-[23px] rounded' type="email" />

//                 <label className='font-mukta font-[600] text-modal_p text-lg letter3' htmlFor="">Address</label>
//                 <input
//                   name="address"
//                   value={formik.values.address}
//                   onChange={formik.handleChange}
//                   className='h-[53px] px-[23px] rounded' type="text" />
//                 <div className='mt-7'>
//                   <ButtonGreen btnTitle="Save" />
            
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   )
// }

// export default UsersProfile














import React, { useEffect, useState } from 'react'
import ButtonGreen from '../ButtonGreen'
import { useGlobalContext } from '../../../Context/GlobalContext'
import { editUser, getUser } from '../../../services'
import { useFormik } from 'formik'
import { useMutation, useQuery } from 'react-query'
import { QUERIES } from '../../../Constant/Queries'
import UseFileUpload from '../../../helpers/uploadImages'
import Image from 'next/image'
import { toast } from 'react-toastify'

const UsersProfile = () => {
//   const { handleFileChange, handleUpload, file, setFile,downloadURL,setDownloadURL } = UseFileUpload() || {};
//   const { data: userData, isLoading, isError } = useQuery(QUERIES.User, getUser);

//   useEffect(() => {
//     if (file) {
//       handleUpload(file)
//     }
//   }, [file])

//   console.log("userData profildeki", userData?.user);
//   console.log("user imageeeeeeeeeee",userData?.user.img_url);

//   const oldData = {
//     email: userData?.user.email ,
//     fullname: userData?.user.fullname ,
//     username: userData?.user.username ,
//     address: userData?.user.address || '',
//     phone: userData?.user.phone || '',
//     img_url: userData?.user.img_url || ''
//   };

//   const {mutate:updateUserMutation}=useMutation({
//     mutationFn:editUser,
//     onSuccess:(data)=>{
//       console.log(data,"userupdmutation data");
//       toast.success("Profule updated")
//     },
//     onError:(error)=>{
//       console.log(error,"mutationuserde errorrrrrrrrrrrrrrrr");
//       toast.error("error updated profile")
//     }
//   })

//   const [newData, setNewData] = useState(oldData);
//  const { profilImg,setProfilImg}=useGlobalContext()

//   useEffect(() => {
//     if (userData && userData.user) {
//       const { email, fullname, username, address, phone, img_url } = userData.user;
//       setNewData({
//         email: email || '',
//         fullname: fullname || '',
//         username: username || '',
//         address: address || '',
//         phone: phone || '',
//         img_url: img_url || ''
//       });
//     }
//   }, [userData]);

// const formik = useFormik({
//   initialValues: newData,
//   onSubmit: async (values) => {
//     const updatedUserData = {
//       email: userData.user.email, 
//       fullname: values.fullname,
//       username: values.username,
//       address: values.address,
//       phone: values.phone,
//       img_url: downloadURL 
//     };
//     setProfilImg(userData?.user.img_url);
//     console.log("formik valuessssssssssssssss", updatedUserData);
//     updateUserMutation(updatedUserData);
//   }
// });

  
  // return (
  //   <>
  //     <div className='bg-headerbg w-full pb-[95px] px-[30px]'>
  //       <div className='pt-10'>
  //         <p className='font-mukta text-[30px] font-[600] text-modal_p '>Profile</p>
  //       </div>
  //       <div className='mt-[61px]'>
  //         <form className='' action="" onSubmit={formik.handleSubmit}>
  //           <div className='flex justify-center'>
  //             <div className='w-[146px] h-[141px] flex flex-col items-center justify-center bg-white rounded-full'>
  //               <label htmlFor="fileInput">
  //                 <img src="/icons/uploadgreen.svg" alt="upload" />
  //                 <p className='roboto-medium font-medium text-lg text-text92'>upload</p>
  //               </label>
  //               <input
  //                 name='img_url'
  //                 value={formik.values.img_url}
  //                 onBlur={formik.handleBlur}
  //                 onChange={(e) => {
  //                   if (e.target.files && e.target.files.length > 0) {
  //                     handleFileChange(e);
  //                     setFile(e.target.files[0]);
  //                   }
  //                 }}
  //                 className='hidden invisible' type="file" id='fileInput' />
  //             </div>
  //           </div>
  //           <div className='flex justify-between gap-[53px] '>
  //             <div className='flex flex-col w-1/2 '>
  //               <label className='font-mukta font-[600] text-modal_p text-lg letter3' htmlFor="">Contact</label>
  //               <input
  //                 name="phone"
  //                 value={formik.values.phone}
  //                 onChange={formik.handleChange}
  //                 className='h-[53px] px-[23px] rounded' type="text"
  //                 placeholder='+994' />
  //               <label className='font-mukta font-[600] text-modal_p text-lg letter3' htmlFor="">Username</label>
  //               <input
  //                 name="username"
  //                 value={formik.values.username}
  //                 onChange={formik.handleChange}
  //                 className='h-[53px] px-[23px] rounded' type="text" placeholder='username' />

  //               <label className='font-mukta font-[600] text-modal_p text-lg letter3' htmlFor="">Full Name</label>
  //               <input
  //                 name="fullname"
  //                 value={formik.values.fullname}
  //                 onChange={formik.handleChange}
  //                 className='h-[53px] px-[23px] rounded' type="text" />
  //             </div>
  //             <div className='flex flex-col w-1/2 '>

  //               <label className='font-mukta font-[600] text-modal_p text-lg letter3' htmlFor="">Email</label>
  //               <input
  //                 name="email"
  //                 value={userData?.user.email}
  //                 className='h-[53px] px-[23px] rounded' type="email" />

  //               <label className='font-mukta font-[600] text-modal_p text-lg letter3' htmlFor="">Address</label>
  //               <input
  //                 name="address"
  //                 value={formik.values.address}
  //                 onChange={formik.handleChange}
  //                 className='h-[53px] px-[23px] rounded' type="text" />
  //               <div className='mt-7'>
  //                 <ButtonGreen btnTitle="Save" />
            
  //               </div>
  //             </div>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   </>
  // )
}

export default UsersProfile