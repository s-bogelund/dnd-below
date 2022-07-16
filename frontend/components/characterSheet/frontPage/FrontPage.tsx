import React from 'react'
import Button from '../../Button'
import BodyContainer from '../../UI/BodyContainer'
import { Card } from '../../UI/Card'
import MetaInfo from './metaInfo/MetaInfo'
import PrimaryInfo from './primaryInfo/PrimaryInfo'

const FrontPage = () => {
	return (
		<BodyContainer className="grid-cols-5 grid-rows-45 bg-base-300 w-screen place-content-between justify-between items-between content-between gap-4 lg:gap-4">
			<MetaInfo
				className="col-span-full row-span-8 h-full"
				characterName="Halfdan Helligskæg"
			/>
			<PrimaryInfo className="w-full row-span-15 span col-span-full h-full " />
			<Card className="bg-neutral h-full rounded-md col-span-2 row-span-20"></Card>
			<Card className="bg-neutral h-full rounded-md col-span-3 row-span-20 "></Card>
		</BodyContainer>
	)
}

export default FrontPage
