import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import BodyContainer from '../../UI/containers/BodyContainer'
import MetaInfo from './metaInfo/MetaInfo'
import PrimaryInfo from './primaryInfo/PrimaryInfo'
import AbilityScores from './stats/AbilityScores'
import WeaponList from './weaponsAbilities/weapons/WeaponList'
import AbilityList from './weaponsAbilities/abilities/AbilityList'
import { IAbility, Rest, IWeapon } from '../../../utils/interfaces'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Modal from '../../UI/containers/Modal'

const FrontPage = () => {
	const [TEMP_SPELLS, setTEMP_SPELLS] = useState(TEMP_SPELLS_1)
	const [isOpen, setIsOpen] = React.useState(false)
	const handleAddAbility = () => {
		console.log('You just tried to add an ability!')
		setIsOpen(true)
	}

	const dialogText =
		'This is a dialog window where you can choose a spell to add. It is not implemented yet, but wouldnt that be cool?'

	return (
		<div id="test">
			<BodyContainer className="w-screen gap-6 bg-base-300 !justify-start ">
				<MetaInfo className="h-fit " characterName="Halfdan Helligskæg" />
				<PrimaryInfo className="w-full shrink " />
				<div className="bg-transparent grid grid-flow-col grid-rows-1 gap-4 grid-cols-weaponAbilities min-h[20%] h-[60%] max-h-[75%] rounded-md ">
					<div className="flex flex-col row-span-full gap-4">
						<WeaponList weapons={TEMP_WEAPONS_1} />
						<AbilityList addAbilityClicked={handleAddAbility} abilities={TEMP_SPELLS} />
					</div>
					<AbilityScores className="w-full bg-transparent h-full col-span-2 row-span-full" />
				</div>
				<Modal
					dynamic={true}
					bodyText={dialogText}
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
				></Modal>
			</BodyContainer>
		</div>
	)
}

const TEMP_SPELLS_1: IAbility[] = [
	{
		name: 'Fireball',
		description: 'A fire ball that hits the target',
		url: 'https://www.dndbeyond.com/spells/fireball',
		level: 1,
		index: 'fireball',
		spellsSlots: 1,
		rest: Rest.Short,
	},
	{
		name: 'Lightning Bolt',
		description: 'A bolt of lightning that hits the target',
		url: 'https://www.dndbeyond.com/spells/lightning-bolt',
		level: 1,
		index: 'lightning-bolt',
		spellsSlots: 1,
		rest: Rest.Long,
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
	{
		name: 'Lay On Hands',
		description: 'A spell that heals the target',
		url: 'https://www.dndbeyond.com/spells/lay-on-hands',
		level: 3,
		index: 'lay-on-hands',
		spellsSlots: 0,
		rest: Rest.Overnight,
	},
]

const TEMP_WEAPONS_1: IWeapon[] = [
	{
		name: 'Longsword',
		description: 'A longsword that hits the target',
		url: 'https://www.dndbeyond.com/equipment/weapons/longsword',
		attBonus: 5,
		damage: '1d10 +3',
		damageType: 'slashing',
		range: '5',
		weight: 2,
		properties: ['Versatile (1d10)'],
		index: 'longsword',
	},
	{
		name: 'Shortsword',
		description: 'A shortsword that hits the target',
		url: 'https://www.dndbeyond.com/equipment/weapons/shortsword',
		attBonus: 5,
		damage: '1d6 +3',
		damageType: 'piercing',
		range: '5',
		weight: 2,
		properties: ['Versatile (1d8)'],
		index: 'shortsword',
	},
	{
		name: 'Dagger',
		description: 'A dagger that hits the target',
		url: 'https://www.dndbeyond.com/equipment/weapons/dagger',
		attBonus: 5,
		damage: '1d4 +3',
		damageType: 'piercing',
		range: '5',
		weight: 1,
		properties: ['Finesse'],
		index: 'dagger',
	},
]
export default FrontPage
