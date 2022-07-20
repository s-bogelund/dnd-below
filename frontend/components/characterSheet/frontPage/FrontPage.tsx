import React, { useEffect } from 'react'
import Button from '../../UI/input/Button'
import BodyContainer from '../../UI/containers/BodyContainer'
import { Card } from '../../UI/containers/Card'
import MetaInfo from './metaInfo/MetaInfo'
import PrimaryInfo from './primaryInfo/PrimaryInfo'
import Stats from './stats/AbilityScores'
import { IAbilityScore, getData } from '../../../utils/dummyData'
import ListWA from './weaponsAbilities/ListWA'
import AbilityScores from './stats/AbilityScores'
import WeaponList from './weaponsAbilities/weapons/WeaponList'
import AbilityList from './weaponsAbilities/abilities/AbilityList'

const FrontPage = () => {
	const [TEMP_DATA, setTEMP_DATA] = React.useState(null)

	return (
		<BodyContainer className="w-screen gap-4 bg-base-300 justify-start content-start">
			<MetaInfo className="h-fit " characterName="Halfdan Helligskæg" />
			<PrimaryInfo className="w-full shrink " />
			<div className="bg-transparent grid grid-flow-col grid-rows-5 gap-4 grid-cols-weaponAbilities min-h[20%] h-[60%] max-h-[75%]  rounded-md ">
				<WeaponList />
				<AbilityList className="row-span-3"></AbilityList>
				<AbilityScores className="w-full bg-transparent h-full col-span-2 row-span-5" />
			</div>
		</BodyContainer>
	)
}

export default FrontPage
