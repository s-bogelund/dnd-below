import React from 'react'
import Button from '../../UI/input/Button'
import BodyContainer from '../../UI/containers/BodyContainer'
import { Card } from '../../UI/containers/Card'
import MetaInfo from '../frontPage/metaInfo/MetaInfo'
import { fetchAllData, getData, modifyData } from '../../../utils/dummyData'

const SecondPage = () => {
	const [buttonText, setButtonText] = React.useState('Next')
	const baseString = 'https://www.dnd5eapi.co/api/ability-scores/'
	const subStrings = ['str', 'dex', 'con', 'int', 'wis', 'cha']

	const fetchApi = async (subString: string) => {
		const response = await fetch(`${baseString + subString}`)
		const data = await response.json()
		setButtonText(data.full_name)
		return { data }
	}

	return (
		<BodyContainer className="grid-cols-1 grid-rows-3 bg-base-300 h-screen w-screen">
			<MetaInfo characterName="Halfdan Helligskæg" />
			<div>
				<Button className="btn-primary px-4" onClick={fetchAllData}>
					Fetch Data
				</Button>
				<Button className="btn-primary px-4 ml-5" onClick={modifyData}>
					Modify Data
				</Button>
				<Button className="btn-primary px-4 ml-5" onClick={getData}>
					Retrieve Local Data
				</Button>
			</div>
		</BodyContainer>
	)
}

export default SecondPage
