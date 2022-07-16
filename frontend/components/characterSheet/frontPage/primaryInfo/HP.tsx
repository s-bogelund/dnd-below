import React, { FC } from 'react'
import Button from '../../../UI/input/Button'
import { Card } from '../../../UI/containers/Card'
import HiddenTextField from '../../../UI/input/HiddenTextField'
import HiddenButton from '../../../UI/input/HiddenButton'

interface HPProps {
	className?: string
	maxHp?: number
	currentHp?: number
}

const HP: FC<HPProps> = props => {
	const [currentHp, setCurrentHp] = React.useState(0)
	const [maxHp, setMaxHp] = React.useState(0)

	const handleCurrentHp = (event: React.FormEvent<HTMLInputElement>) => {
		console.log(event.currentTarget.value, 'is the current value')
		setCurrentHp(Number(event.currentTarget.value))
	}
	return (
		<div className="flex flex-col items-stretch p-2 gap-2 h-full">
			<Card className="flex flex-row w-full justify-between px-2 py-1 h-fit rounded-sm">
				<span className="text-xl font-semibold w-[50%]">Max HP</span>
				<HiddenTextField
					number={true}
					onInput={event => setMaxHp(Number(event.currentTarget.value))}
					value={props.maxHp || maxHp}
					className="flex text-xl font-semibold max-w-[25%] w-fit rounded-sm "
				></HiddenTextField>
			</Card>
			<Card className="flex flex-row h-full w-full rounded-sm px-0 relative">
				<div className="flex flex-col h-full lg:gap-2 w-[85%] px-0 py-1">
					<div className="text-xl font-semibold justify-self-start -mx-2">Current HP</div>
					<HiddenTextField
						onInput={event => handleCurrentHp(event)}
						number={true}
						className=" h-fit self-center w-[60%] text-5xl lg:text-8xl"
						value={currentHp}
					/>
				</div>
				<div className="flex flex-col p-12 h-full w-fit justify-between lg:justify-center gap-3 lg:gap-4 px-1 absolute right-3 py-0">
					<HiddenButton className="text-4xl btn-md  ">+</HiddenButton>
					<HiddenButton className="text-4xl btn-md ">-</HiddenButton>
				</div>
			</Card>
		</div>
	)
}

export default HP
