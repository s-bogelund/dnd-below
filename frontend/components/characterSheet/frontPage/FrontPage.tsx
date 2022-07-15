import React from 'react'
import Button from '../../Button'
import BodyContainer from '../../UI/BodyContainer'
import { Card } from '../../UI/Card'
import MetaInfo from './metaInfo/MetaInfo'
import PrimaryInfo from './primaryInfo/PrimaryInfo'

const FrontPage = () => {
	return (
		<BodyContainer className="grid-cols-5 grid-rows-12 bg-base-300 h-screen w-screen gap-4">
			<MetaInfo
				className="col-span-5 row-span-2 h-full"
				characterName="Halfdan Helligskæg"
			/>
			<PrimaryInfo className="w-full row-span-3 col-span-5 h-full " />
		</BodyContainer>
	)
}

export default FrontPage
