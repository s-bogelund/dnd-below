import React, { FC, ReactElement } from 'react'
import { Card } from '../../../../UI/containers/Card'
import HiddenTextField from '../../../../UI/input/HiddenTextField'
import ModifierInput from '../../../../UI/input/ModifierInput'

interface StatsLineProps {
	className?: string
	stat: {
		name: string
		modifier: number
		proficient: boolean
	}

	onProficiencyChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const StatLine: FC<StatsLineProps> = props => {
	const { stat, onProficiencyChange } = props

	return (
		<div className="grid grid-cols-stat-line lg:grid-cols-stat-lineLg xl:grid-cols-stat-lineXl grid-rows-1 place-items-center w-full h-fit min-h-8 px-[1px] lg:py-1 rounded-sm">
			<input
				type="radio"
				className="radio radio-xs lg:radio-sm radio-primary text-black mt-1"
				checked={stat.proficient}
				onChange={event => props.onProficiencyChange(event)}
			/>
			<div className="grid place-center justify-center content-center items-center pl-[2px] lg:pl-2 -ml-1">
				<ModifierInput
					fontSize={' text-sm '}
					noMargin={true}
					showPlus={stat.modifier > 0}
					onInput={() => console.log('something is written here')}
					className="w-[70%] h-fit lg:text-base relative text-center place-self-center"
					labelProps="ml-2 lg:ml-3 place-self-center"
					value={stat.modifier}
				/>
				<p className="absolute mt-1">___</p>
			</div>
			<div className="flex mt-[2px] -ml-3 lg:-ml-6 text-sm lg:text-base tracking-tighter lg:tracking-normal font-semibold text-left whitespace-nowrap">
				<p>Animal Handling</p>
			</div>
		</div>
	)
}

export default StatLine
