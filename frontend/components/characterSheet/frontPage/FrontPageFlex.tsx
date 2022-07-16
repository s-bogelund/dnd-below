import React from 'react'
import Button from '../../Button'
import BodyContainer from '../../UI/BodyContainer'
import BodyContainerFlex from '../../UI/BodyContainerFlex'
import { Card } from '../../UI/Card'
import MetaInfo from './metaInfo/MetaInfo'
import PrimaryInfo from './primaryInfo/PrimaryInfo'

const FrontPageFlex = () => {
	return (
		<BodyContainerFlex className="w-screen gap-4 ">
			<MetaInfo className="h-fit " characterName="Halfdan Helligskæg" />
			<PrimaryInfo className="w-full shrink h-[22%] grow" />
			<Card className="bg-neutral min-h[20%] h-[70%] rounded-md col-span-2 row-span-20 shrink"></Card>
		</BodyContainerFlex>
	)
}

export default FrontPageFlex
