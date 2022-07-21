import React, { useEffect, useState } from 'react'
import BodyContainer from '../../UI/containers/BodyContainer'
import MetaInfo from './metaInfo/MetaInfo'
import PrimaryInfo from './primaryInfo/PrimaryInfo'
import AbilityScores from './stats/AbilityScores'
import WeaponList from './weaponsAbilities/weapons/WeaponList'
import AbilityList from './weaponsAbilities/abilities/AbilityList'
import { IAbility, Rest } from '../../../utils/interfaces'

const TEMP_SPELLS_1: IAbility[] = [
	{
		name: 'Fireball',
		description: 'A fire ball that hits the target',
		url: 'https://www.dndbeyond.com/spells/fireball',
		level: 1,
		index: 'fireball',
		spellsSlots: 1,
		rest: Rest.Overnight,
	},
	{
		name: 'Lightning Bolt',
		description: 'A bolt of lightning that hits the target',
		url: 'https://www.dndbeyond.com/spells/lightning-bolt',
		level: 1,
		index: 'lightning-bolt',
		spellsSlots: 1,
		rest: Rest.None,
	},
	{
		name: 'Acid Splash',
		description: 'A splash of acid that hits the target',
		url: 'https://www.dndbeyond.com/spells/acid-splash',
		level: 1,
		index: 'acid-splash',
		spellsSlots: 1,
		rest: Rest.None,
	},
]

const FrontPage = () => {
	const [TEMP_SPELLS, setTEMP_SPELLS] = useState(TEMP_SPELLS_1)

	return (
		<BodyContainer className="w-screen gap-6 bg-base-300 !justify-start ">
			<MetaInfo className="h-fit " characterName="Halfdan Helligskæg" />
			<PrimaryInfo className="w-full shrink " />
			<div className="bg-transparent grid grid-flow-col grid-rows-1 gap-4 grid-cols-weaponAbilities min-h[20%] h-[60%] max-h-[75%] rounded-md ">
				<div className="flex flex-col row-span-full gap-4">
					<WeaponList />
					<AbilityList abilities={TEMP_SPELLS}></AbilityList>
				</div>
				<AbilityScores className="w-full bg-transparent h-full col-span-2 row-span-full" />
			</div>
		</BodyContainer>
	)
}

export default FrontPage
