import Image from 'next/image'
import React from 'react'


interface PaginationAdminProps {
  handlePageClick: (selected: number) => void;
  getPageNumbers: () => number[];
  pageCount: number;
  currentPage: number;
  getPageNumbersForMob: () => number[];
}



const PaginationAdmin:React.FC<PaginationAdminProps> = ({handlePageClick,getPageNumbers,pageCount,currentPage,getPageNumbersForMob }) => {
  return (
    <div className='w-full flex'>
        <div className='flex m-auto gap-[20px]'>
          <button
            className='w-[64px] h-[64px] rounded-full border flex justify-center items-center border-btn-pink'
            onClick={() => handlePageClick(currentPage - 1 )}
            disabled={currentPage === 0}
          >
            <Image className='w-[24px] h-[24px]' width={200} height={200} src="/icons/arrowpink.svg" alt='back' />
          </button>

          <div className=' gap-[20px] hidden sm:flex'>
          {getPageNumbers().map(number => (
            <button
              key={number}
              className={`w-[64px] text-white text-lg font-extrabold h-[64px] rounded-full border flex justify-center items-center ${number === currentPage ? 'bg-btn-pink' : 'border-btn-pink'}`}
              onClick={() => handlePageClick( number )}
            >
              {number + 1}
            </button>
          ))}
        </div>


          
        <div className='flex gap-[20px] sm:hidden'>
          {getPageNumbersForMob().map(number => (
            <button
              key={number}
              className={`w-[64px] text-white text-lg font-extrabold h-[64px] rounded-full border flex justify-center items-center ${number === currentPage ? 'bg-btn-pink' : 'border-btn-pink'}`}
              onClick={() => handlePageClick(number )}
            >
              {number + 1}
            </button>
          ))}
        </div>

          <button
            className='w-[64px] h-[64px] rounded-full border flex justify-center items-center border-btn-pink'
            onClick={() => handlePageClick( currentPage + 1 )}
            disabled={currentPage === pageCount - 1}
          >
            <Image className='w-[24px] h-[24px]' width={200} height={200} src="/icons/arrowpink2.svg" alt='next' />
          </button>
        </div>
      </div>
  )
}

export default PaginationAdmin
