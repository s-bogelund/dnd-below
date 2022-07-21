import React from 'react'
import Button from '../../UI/input/Button'
import BodyContainer from '../../UI/containers/BodyContainer'
import { Card } from '../../UI/containers/Card'
import MetaInfo from '../frontPage/metaInfo/MetaInfo'
import { fetchAllStats, getStats, modifyStats } from '../../../utils/dummyData'
import { useQuery } from '@tanstack/react-query'
import { fetchSpellInfo } from '../../../utils/fetching'

const SecondPage = () => {
	// const { isLoading, data } = useQuery(['characterSheet'], getStats)

	return (
		<BodyContainer className="grid-cols-1 grid-rows-3 bg-base-300 h-screen w-screen">
			<MetaInfo characterName="Halfdan Helligskæg" />
			<div>
				<Button className="btn-primary px-4" onClick={fetchAllStats}>
					Fetch Data
				</Button>
				<Button className="btn-primary px-4 ml-5" onClick={modifyStats}>
					Modify Data
				</Button>
				<Button className="btn-primary px-4 ml-5" onClick={getStats}>
					Retrieve Local Data
				</Button>
				<Button
					className="btn-success px-4 ml-5"
					onClick={() => fetchSpellInfo('fireball')}
				>
					Retrieve Fireball data
				</Button>
			</div>
		</BodyContainer>
	)
}

export default SecondPage
