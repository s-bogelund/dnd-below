import React, { FC, ReactElement, useEffect } from 'react'
import { validateNumberParameters } from '../../../../../utils/validation'
import { Card } from '../../../../UI/containers/Card'
import HiddenTextField from '../../../../UI/input/HiddenTextField'
import ModifierInput from '../../../../UI/input/ModifierInput'

interface SkillLineProps {
	className?: string
	stat: {
		name: string
		modifier: number
		proficient: boolean
	}
	onProficiencyChange: (name: string) => void
	onModifierChange: (event: React.FormEvent<HTMLInputElement>) => void
}

const MAX_MODIFIER = 20

const Skill: FC<SkillLineProps> = ({
	className,
	stat,
	onProficiencyChange,
	onModifierChange,
}) => {
	const handleModifierChange = (event: React.FormEvent<HTMLInputElement>) => {
		const value = Number(event.currentTarget.value)
		const validate = validateNumberParameters(value, 0, MAX_MODIFIER)

		if (!validate) return

		onModifierChange(event)
	}

	// useEffect(() => {
	// 	if (stat.name.toLowerCase() === 'acrobatics') {
	// 		console.log(stat.proficient)
	// 	}
	// }, [stat])

	return (
		<div className="grid grid-cols-stat-line lg:grid-cols-stat-lineLg xl:grid-cols-stat-lineXl grid-rows-1 place-items-center w-full h-fit min-h-8 px-[1px] lg:py-1 rounded-sm">
			<input
				type="checkbox"
				className=" radio radio-xs lg:radio-sm radio-primary text-black mt-1"
				checked={stat.proficient}
				onChange={() => onProficiencyChange(stat.name)}
			/>
			<div className="grid place-center justify-center content-center items-center pl-[2px] lg:pl-2 -ml-1">
				<ModifierInput
					fontSize={' text-sm '}
					noMargin={true}
					showPlus={stat.modifier > 0}
					onInput={e => handleModifierChange(e)}
					className="w-[70%] h-fit lg:text-base relative text-center place-self-center"
					labelProps="ml-2 lg:ml-3 place-self-center"
					value={stat.modifier}
					onFocus={e => e.currentTarget.select()}
				/>
				{/* <p className="absolute bott mt-1 h-1">___</p> */}
			</div>
			<div className="flex mt-[2px] -ml-3 lg:-ml-6 text-sm lg:text-base tracking-tighter lg:tracking-normal font-semibold text-left whitespace-nowrap">
				<p>{stat.name}</p>
			</div>
		</div>
	)
}

export default Skill
