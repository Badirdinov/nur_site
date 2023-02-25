import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MovieImg from '../public/movieImg.jpg'
import FilmStyle from '../styles/film.module.scss'

type Props = {}

export default function Film({ }: Props) {
    return (
        <div className={FilmStyle.movies}>
            <div className={FilmStyle.movie}>
                <div className={FilmStyle.block__movie}>
                    <div className={FilmStyle.box__movie}>
                        <div className={FilmStyle.movie__info}>
                            <a href="#">Аяш 2</a>
                            <Image src={MovieImg} alt='/' />
                        </div>
                        <table>
                            <tr>
                                <th>Время</th>
                                <th>Зал</th>
                                <th>Цена</th>
                            </tr>
                            <tr>
                                <Link href='/'><td>16:40</td></Link>
                                <Link href='/'><td>Зал № 4</td></Link>
                                <Link href='/'><td>120 сом</td></Link>
                            </tr>
                            <tr>
                                <Link href='/'><td>16:40</td></Link>
                                <Link href='/'><td>Зал № 4</td></Link>
                                <Link href='/'><td>120 сом</td></Link>
                            </tr>
                            <tr>
                                <Link href='/'><td>16:40</td></Link>
                                <Link href='/'><td>Зал № 4</td></Link>
                                <Link href='/'><td>120 сом</td></Link>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}