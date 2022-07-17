import React, { FC } from 'react'
import { Card } from '../../../../UI/containers/Card'
import HiddenTextField from '../../../../UI/input/HiddenTextField'

interface StatHeaderProps {
	className?: string
	statName?: string
}

const StatHeader: FC<StatHeaderProps> = props => {
	return (
		<Card
			className={
				'bg-base-300 w-full h-[30%] rounded-md bg-opacity-80 shadow-lg ' +
				props.className
			}
		>
			<span className="text-xl lg:text-2xl font-semibold">
				{props.statName || 'Intelligence'}
			</span>

			<HiddenTextField
				onInput={event => console.log(event)}
				value={1}
				number={true}
				onFocus={event => event.currentTarget.select()}
				className="w-12 text-2xl lg:text-3xl font-semibold"
			/>
		</Card>
	)
}

export default StatHeader
