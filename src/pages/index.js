import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Fragment } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function Home () {
  return (
    <Fragment>
      <h1>Hello world </h1>
    </Fragment>
  )
}