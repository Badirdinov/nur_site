/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Image from 'next/image'
import HeaderStyle from '../styles/header.module.scss'
import bgImg from '../public/headerImg.jpg'

type Props = {}

export default function Header({ }: Props) {
    return (
        <div className={HeaderStyle.header}>
            <div className={HeaderStyle.container}>
                <div className={HeaderStyle.header__image}>
                    <Image src={bgImg} alt='/' />
                </div>
                <div className={HeaderStyle.header__text}>

                </div>
                <div className={HeaderStyle.header__menu}>
                    <div className={HeaderStyle.logo__bg}>
                        <h1>
                            <a href="/">
                                <span>Кинотеатр</span>
                                Нур</a>
                        </h1>
                    </div>
                    <div className={HeaderStyle.menu__decoration}>
                        <ul>
                            <li><a href="/ScoroVkino">СКОРО В КИНО</a></li>
                            <li><a href="#">РЕПЕРТУАР</a></li>
                            <li><a href="#">РЕКЛАМА</a></li>
                            <li><a href="#">КОНТАКТЫ</a></li>
                            <li><a href="#">О КИНОТЕАТРЕ</a></li>
                        </ul>
                    </div>
                    <div className={HeaderStyle.menu_decor}>
                    </div>
                    <div className={HeaderStyle.calendar}>
                        <p>
                            <span>СЕГОДНЯ</span>
                            14 февраля
                        </p>
                        <p className={HeaderStyle.mesyac}>
                            Февраль:
                        </p>
                        <div className={HeaderStyle.dni}>
                            <a href="#" className={HeaderStyle.active}>
                                <span>СР</span>
                                15
                            </a>
                            <a href="#">
                                <span>СР</span>
                                15
                            </a>
                            <a href="#">
                                <span>СР</span>
                                15
                            </a>
                            <a href="#">
                                <span>СР</span>
                                15
                            </a>
                            <a href="#">
                                <span>СР</span>
                                15
                            </a>
                            <a href="#">
                                <span>СР</span>
                                15
                            </a>
                            <a href="#">
                                <span>СР</span>
                                15
                            </a>
                            <a href="#">
                                <span>СР</span>
                                15
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}