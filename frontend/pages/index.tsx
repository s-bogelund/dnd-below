import type { NextPage } from 'next'
import Head from 'next/head'
import BodyContainer from '../components/UI/containers/BodyContainer'
import Button from '../components/UI/input/Button'
import React from 'react'
import { Card } from '../components/UI/containers/Card'
import FrontPage from '../components/characterSheet/frontPage/FrontPage'
import CharacterSheet from '../components/characterSheet/CharacterSheet'
import { getStats } from '../utils/dummyData'

const Home: NextPage = () => {
	const [text, setText]: [string, Function] = React.useState('')

	return (
		<div data-theme="night">
			<Head>
				<title>DnD Below</title>
				<meta name="description" content="Generated by Me" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
				/>
				<link rel="icon" href="/icon-192x192.png" />
				<link rel="manifest" href="/manifest.json" />
			</Head>
			<CharacterSheet />
		</div>
	)
}

// export async function getStaticProps() {
// 	console.log('attempting to get static props')

// 	const stats = await getStats()
// 	console.log('Server side stats: ', stats)

// 	return {
// 		props: {},
// 	}
// }
export default Home
