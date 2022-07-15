import React from 'react'
import Button from '../../Button'
import BodyContainer from '../../UI/BodyContainer'
import { Card } from '../../UI/Card'
import MetaInfo from './MetaInfo'

const FrontPage = () => {
	return (
		<BodyContainer className="grid-cols-1 grid-rows-3 bg-base-300 h-screen">
			<MetaInfo characterName="Halfdan Helligskæg" />
		</BodyContainer>
	)
}

export default FrontPage
