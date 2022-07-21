import React, { FC } from 'react'
import { IAbility } from '../../../../../utils/interfaces'
import { Card } from '../../../../UI/containers/Card'
import HiddenTextField from '../../../../UI/input/HiddenTextField'

interface IAbilityItemProps {
	ability: IAbility
}

const AbilityItem: FC<IAbilityItemProps> = ({ ability }) => {
	return (
		<div className="flex flex-row gap-[2px] h-6 lg:h-8 w-full">
			<Card className="w-[60%] rounded-sm ">
				<HiddenTextField
					onInput={() => console.log('Chaning weapon name is not implemented yet')}
					className="w-full px-1 tracking-tighter font-semibold lg:text-base lg:tracking-normal text-center rounded-sm"
					value={ability.name}
				/>
			</Card>
			<Card className="w-[10%] rounded-sm">
				<HiddenTextField
					onInput={() => console.log('Chaning weapon name is not implemented yet')}
					className="w-full text-center tracking-tighter lg:tracking-normal font-semibold lg:text-base rounded-sm"
					value={ability.level}
				/>
			</Card>
			<Card className="w-[30%] h-full rounded-sm">
				<HiddenTextField
					onInput={() => console.log('Chaning weapon name is not implemented yet')}
					className="w-full px-1 tracking-tighter lg:text-base font-semibold lg:tracking-normal text-center"
					value={ability.rest}
				/>
			</Card>
		</div>
	)
}

export default AbilityItem
