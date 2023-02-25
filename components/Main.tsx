import React from 'react'
import MainStyle from '../styles/main.module.scss'
import Film from './Film';
import ScoroV from './ScoroV';


type Props = {}

function Main({ }: Props) {
    return (
        <>
            <div className='container'>
                <div className={MainStyle.main}>
                    <h3>
                        Кино во вторник, 14 февраля
                    </h3>
                    <div className={MainStyle.film}>
                        <Film />
                        <Film />
                        <Film />
                        <Film />
                        <Film />
                        <Film />
                        <Film />
                        <Film />
                    </div>
                    <h3>
                        Скоро на экранах
                    </h3>
                    <div className={MainStyle.scoro}>
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

export default Main;