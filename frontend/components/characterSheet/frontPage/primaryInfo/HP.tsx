import React from 'react'
import { Card } from '../../../UI/Card'

interface HPProps {
	className?: string
	maxHp?: number
	currentHp?: number
}

const HP = (props: HPProps) => {
	return (
		<div className="flex flex-col items-stretch p-2 gap-2 h-full">
			<Card className="flex flex-row justify-between px-2 py-1 h-fit rounded-sm">
				<span className="flex text-xl font-semibold">Max HP</span>
				<span className="flex text-xl font-semibold">{props.maxHp}</span>
			</Card>
			<Card className="flex flex-row h-full w-full rounded-sm">
				<div className="flex w-[75%]">
					HP WITH TITLE
					<input></input>
				</div>
				<div className="flex">buttons</div>
			</Card>
		</div>
	)
}

export default HP
