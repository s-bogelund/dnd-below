import React, { FC, ReactElement } from 'react'
import { Card } from '../../../../UI/containers/Card'
import HiddenTextField from '../../../../UI/input/HiddenTextField'

interface StatsLineProps {
	className?: string
	statName: string
	modifier: number
	proficient: boolean
}

const StatLine: FC<StatsLineProps> = props => {
	return (
		<Card className="flex flex-row justify-between items-center w-full h-fit min-h-8 px-1 bg-base rounded-sm">
			<span className="flex w-[15%]">
				<input type="radio" className="radio radio-primary text-black"></input>
			</span>
			<HiddenTextField
				onInput={() => console.log('something is written here')}
				className="w-[50%] text-sm lg:text-base font-semibold"
			/>
		</Card>
	)
}

export default StatLine
