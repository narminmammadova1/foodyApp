import type { NextPage } from "next";
import Head from "next/head";

import Chart from 'chart.js/auto';
import DoughnutChart from "../../components/Admin/Charts/ChartMonths";
import SideBar from "../../components/Admin/SideBar";
// import ChartSalary from "../../components/Admin/Charts/ChartSalary";
import AdminHeader from "../../components/Admin/Header";
import AdminModal from "../../components/UI/AdminModal";
import Layout from "../../components/Layout";
import { useGlobalContext } from "../../Context/GlobalContext";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ChartSalary from "../../components/Admin/Charts/ChartSalary";

const AdminDashboard: NextPage = () => {
const {isAdmin,setIsAdmin}=useGlobalContext() || {}

useEffect(() => {
  
  const storedIsAdmin = localStorage.getItem('isAdmin');
  // const storedIsAdmin = sessionStorage.getItem('isAdmin');

  setIsAdmin(storedIsAdmin === 'true');
}, []);
const {t}=useTranslation()

  return (
    <div >
      {isAdmin ? (<>     <Head>
        <title>Dashboard"</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Layout>
  <AdminHeader/>
  <div className=" justify-center text-center pt-12 lg:pt-0 lg:flex">
  <div className="flex-col 
   lg:flex">
    <div  className='hidden lg:block' >
    <SideBar/>
    </div>
    
  </div>
<div className="  mx-auto lg:mx-0 bg-dark-div w-[287px] h-[290px]  lg:w-[472px] lg:h-[472px]  flex-col rounded-[14px] ">
<div className="text-start">
    <p className="mx-[15px] mt-6 font-roboto text-xl font-medium  text-par-text px-6">Orders</p>
  </div>

<div className="flex-col  text-center">

  <div className="w-[258px] h-[252px] lg:w-[278px] lg:h-[272px]  mt-0 lg:mt-6 mx-auto">
      <DoughnutChart  />
      </div>
      </div>
      <div className=" overflow-y-auto">
      {/* <AdminModal /> */}
       
      </div>

      </div>

      <div className="   mx-auto lg:mx-4  mt-20 lg:mt-0  w-[287px] h-[372px] bg-dark-div lg:w-[634px] lg:h-[472px] lg:flex-col  rounded-[14px] ">
      <div>
    <p className="text20">{t("Total Salary")}</p>
  </div>
<div className="flex flex-col m-auto">
<ChartSalary />
      </div>
     

      </div>
   
      </div>
      </Layout>
</>): (<></>)}
 
    </div>
  );
};

export default AdminDashboard;
