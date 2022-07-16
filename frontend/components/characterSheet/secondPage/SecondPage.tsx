import React from 'react'
import Button from '../../UI/input/Button'
import BodyContainer from '../../UI/containers/BodyContainer'
import { Card } from '../../UI/containers/Card'
import MetaInfo from '../frontPage/metaInfo/MetaInfo'

const SecondPage = () => {
	return (
		<BodyContainer className="grid-cols-1 grid-rows-3 bg-base-300 h-screen w-screen">
			<MetaInfo characterName="Halfdan Helligskæg" />
		</BodyContainer>
	)
}

export default SecondPage
