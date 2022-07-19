import React, { FC } from 'react'
import { IWeapon } from '../../../../../utils/interfaces'
import { Card } from '../../../../UI/containers/Card'
import HiddenTextField from '../../../../UI/input/HiddenTextField'

interface IWeaponItemProps {
	weapon?: IWeapon
}

const WeaponItem: FC<IWeaponItemProps> = props => {
	const { name, attBonus, damage, type } = props.weapon || {
		name: 'Test ',
		attBonus: 5,
		damage: '1d10',
		type: 'testing',
	}

	return (
		<div className="flex flex-row gap-2 h-6 lg:h-8 w-full">
			<Card className="w-[43%] ">
				<HiddenTextField
					onInput={() => console.log('Chaning weapon name is not implemented yet')}
					className="w-full px-1 tracking-tighter font-semibold lg:text-base lg:tracking-normal"
				/>
			</Card>
			<Card className="w-[13%]">
				<HiddenTextField
					onInput={() => console.log('Chaning weapon name is not implemented yet')}
					className="w-full text-center tracking-tighter lg:tracking-normal font-semibold lg:text-base"
				/>
			</Card>
			<Card className="w-[44%] h-full">
				<HiddenTextField
					onInput={() => console.log('Chaning weapon name is not implemented yet')}
					className="w-full px-1 tracking-tighter lg:text-base font-semibold lg:tracking-normal"
				/>
			</Card>
		</div>
	)
}

export default WeaponItem
