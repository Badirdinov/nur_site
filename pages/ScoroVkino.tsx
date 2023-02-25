import ScoroV from '@/components/ScoroV'
import React from 'react'
import ScorStyle from '@/styles/scoro.module.scss'


type Props = {}

export default function ScoroVkino({ }: Props) {
  return (
    <>
      <div className='container'>
        <div className='w-full bg-white pb-14'>
          <div className='py-16 mx-2'>
            <a className='mr-2 hover:underline' href="#">Главная</a>
            /
            <a className='ml-2 hover:underline' href="#">  СКОРО В КИНО </a>
          </div>
          <h3 className='my-7 ml-14 text-base font-bold'>
            Скоро на экранах
          </h3>
          <div className='px-14 flex items-center flex-wrap gap-14'>
            <ScoroV />
            <ScoroV />
            <ScoroV />
            <ScoroV />
            <ScoroV />
            <ScoroV />
            <ScoroV />
            <ScoroV />
            <ScoroV />
            <ScoroV />
            <ScoroV />
            <ScoroV />
            <ScoroV />
            <ScoroV />
          </div>
        </div>
      </div>
    </>
  )
}