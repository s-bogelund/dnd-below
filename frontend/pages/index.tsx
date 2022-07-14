import type { NextPage } from 'next'
import Head from 'next/head'
import BodyContainer from '../components/UI/BodyContainer'
import Button from '../components/Button'
import React from 'react'
import { Card } from '../components/UI/Card'
import FrontPage from '../components/characterSheet/frontPage/FrontPage'

const Home: NextPage = () => {
	const [text, setText]: [string, Function] = React.useState('')

	return (
		<div data-theme="night" className="h-screen">
			<Head>
				<title>DnD Below</title>
				<meta name="description" content="Generated by Me" />
				<link rel="icon" href="/icon-192x192.png" />
				<link rel="manifest" href="/manifest.json" />
			</Head>
			<FrontPage />
		</div>
	)
}

export default Home
