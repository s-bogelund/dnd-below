import React, { FC, useState } from 'react'
import { IconContext } from 'react-icons'
import { MdAddBox } from 'react-icons/md'
import { IAbility } from '../../../../../utils/interfaces'
import HiddenButton from '../../../../UI/input/HiddenButton'
import ListWA from '../ListWA'
import AbilityItem from './AbilityItem'

interface AbilityListProps {
	className?: string
	addAbilityClicked: () => void
	abilities?: IAbility[]
}

const AbilityList: FC<AbilityListProps> = ({
	className,
	abilities,
	addAbilityClicked,
}) => {
	const [itemGap, setItemGap] = useState('gap-[6px]')

	const renderAbilities = () => {
		if (abilities === undefined) {
			return null
		}
		return abilities.map((ability, index) => {
			return <AbilityItem key={index} ability={ability} />
		})
	}

	return (
		<ListWA
			header="Abilities"
			className={'row-span-2 h-fit ' + className + ' ' + itemGap}
		>
			<div className="flex flex-row justify-start items-start content-start w-full gap-[2px] -mb-2">
				<span className="w-[60%] h-6 tracking-tighter text-sm text-center">Name</span>
				<span className="w-[10%] h-6 tracking-tighter text-sm px-1 text-center">Lvl</span>
				<span className="w-[30%] h-6 tracking-tighter text-sm text-center">Rest</span>
			</div>
			{renderAbilities()}
			<div className="flex justify-center content-center">
				<IconContext.Provider
					value={{
						className:
							'text-neutral-content opacity-20 mt-1 h-full m-0 text-2xl lg:text-4xl',
					}}
				>
					<button
						className="btn btn-block modal-button btn-hidden btn-sm lg:btn-md h-full m-0"
						onClick={addAbilityClicked}
					>
						<MdAddBox className="text-2xl lg:text-4xl" />
					</button>
				</IconContext.Provider>
			</div>
		</ListWA>
	)
}

export default AbilityList
