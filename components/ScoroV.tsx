import React from 'react'

type Props = {}

export default function ScoroV({ }: Props) {
    return (
        <div className='hover:scale-105 shadow-xl shadow-500/50 transition-all duration-300'>
            <div className='text-center pb-7'>
                <div className='w-56 h-72 kinoImg'>
                    
                </div>
                <p className='mb-4'><a className='text-base font-bold hover:underline' href="#">Пропавшая без вести </a><span className='mt-2 text-slate-400 block text-xs'>111</span></p>
                <a className='bg-[#e76d0a] py-1 px-2 rounded text-white hover:underline' href="#">о филме</a>
            </div>
        </div>
    )
}