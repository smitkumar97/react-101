import React from 'react'

const Tailwind = () => {
    return (
        <>
            {/* <div className='grid gap-4 m-4 grid-cols-1 sm:grid-cols-2'>
                <div className='min-h-[100px] rounded-2xl bg-amber-500'></div>
                <div className='min-h-[100px] rounded-2xl bg-emerald-500'></div>
            </div> */}
            <div className='grid gap-4 m-4 grid-cols-1 sm:grid-cols-12'>
                <div className='min-h-[100px] rounded-2xl bg-amber-500 shadow-2xl sm:col-span-2 sm:block hidden'></div>
                <div className='min-h-[100px] rounded-2xl bg-blue-500 shadow-2xl sm:col-span-8'></div>
                <div className='min-h-[100px] rounded-2xl bg-emerald-500 shadow-2xl sm:col-span-2 '></div>
            </div>
        </>
    )
}

export default Tailwind