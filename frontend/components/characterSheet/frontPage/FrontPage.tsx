import React, { useEffect } from 'react'
import Button from '../../UI/input/Button'
import BodyContainer from '../../UI/containers/BodyContainer'
import { Card } from '../../UI/containers/Card'
import MetaInfo from './metaInfo/MetaInfo'
import PrimaryInfo from './primaryInfo/PrimaryInfo'
import Stats from './stats/AbilityScores'
import { IAbilityScore, getData } from '../../../utils/dummyData'

const FrontPage = () => {
	const [TEMP_DATA, setTEMP_DATA] = React.useState(null)

	return (
		<BodyContainer className="w-screen gap-4 bg-base-300">
			<MetaInfo className="h-fit " characterName="Halfdan Helligskæg" />
			<PrimaryInfo className="w-full shrink " />
			<div className="bg-transparent grid grid-flow-col grid-rows-5 gap-4 grid-cols-3 min-h[20%] h-[70%] rounded-md ">
				<Card className="w-full h-full flex flex-col bg-neutral row-span-2 col-span-1 justify-center content-center"></Card>
				<Card className="w-full h-full flex flex-col row-span-3 bg-neutral col-span-1 justify-center content-center"></Card>
				<Stats className="w-full bg-transparent h-full col-span-2 row-span-5" />
			</div>
		</BodyContainer>
	)
}

export default FrontPage
