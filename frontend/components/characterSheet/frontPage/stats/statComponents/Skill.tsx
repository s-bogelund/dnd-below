import React, { FC, ReactElement, useEffect } from 'react'
import { validateNumberParameters } from '../../../../../utils/validation'
import { Card } from '../../../../UI/containers/Card'
import HiddenTextField from '../../../../UI/input/HiddenTextField'
import ModifierInputLg from '../../../../UI/input/ModifierInputLg'
import ModifierInputSm from '../../../../UI/input/ModifierInputSm'

interface SkillLineProps {
	className?: string
	skill: {
		name: string
		modifier: number
		proficient: boolean
	}
	onProficiencyChange: (name: string) => void
	onModifierChange: (newValue: number, skillName: string) => void
}

const MAX_MODIFIER = 20

const Skill: FC<SkillLineProps> = ({
	className,
	skill,
	onProficiencyChange,
	onModifierChange,
}) => {
	const handleModifierChange = (event: React.FormEvent<HTMLInputElement>) => {
		if (event.currentTarget.value.length < 1) {
			onModifierChange(0, skill.name)
			console.log('handleModifierChange: 0')

			return
		}
		const value = Number(event.currentTarget.value)
		const validate = validateNumberParameters(value, 0, MAX_MODIFIER)
		console.log('modifier change', validate)

		if (!validate) return

		onModifierChange(value, skill.name)
	}

	// useEffect(() => {
	// 	if (stat.name.toLowerCase() === 'acrobatics') {
	// 		console.log(stat.proficient)
	// 	}
	// }, [stat])

	return (
		<div className="flex flex-row w-full h-fit min-h-8 px-[1px] lg:py-1 rounded-sm">
			<div className="w-5 mt-1">
				<input
					type="checkbox"
					className=" radio radio-xs lg:radio-sm radio-primary text-black mt-1"
					checked={skill.proficient}
					onChange={() => onProficiencyChange(skill.name)}
				/>
			</div>
			<div className="grid w-[20%] lg:mt-[2px]">
				<ModifierInputSm
					fontSize={' text-sm lg:text-md '}
					showPlus={skill.modifier > 3}
					onInput={e => handleModifierChange(e)}
					className="w-[70%] h-fit lg:text-base relative text-center place-self-center"
					labelProps="place-self-center"
					value={skill.modifier}
					onFocus={e => e.currentTarget.select()}
				/>
				{/* <p className="absolute bott mt-1 h-1">___</p> */}
			</div>
			<div className="flex mt-[5px] lg:mt-[7px] -ml-[6px] text-sm lg:text-[1rem] place-self-leftlg:text-base tracking-tighter lg:tracking-normal font-semibold text-left whitespace-nowrap ">
				<p>{skill.name}</p>
			</div>
		</div>
	)
}

export default Skill
