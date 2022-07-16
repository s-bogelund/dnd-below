import React, { FC } from 'react'
import Button from '../../../Button'
import { Card } from '../../../UI/Card'
import HiddenTextField from '../../../UI/HiddenTextField'

interface HPProps {
	className?: string
	maxHp?: number
	currentHp?: number
}

const HP: FC<HPProps> = props => {
	const [currentHp, setCurrentHp] = React.useState(0)

	const handleCurrentHp = (event: React.FormEvent<HTMLInputElement>) => {
		console.log(event.currentTarget.value, 'is the current value')
		setCurrentHp(Number(event.currentTarget.value))
	}
	return (
		<div className="flex flex-col items-stretch p-2 gap-2 h-full">
			<Card className="flex flex-row justify-between px-2 py-1 h-fit rounded-sm">
				<span className="flex text-xl font-semibold">Max HP</span>
				<span className="flex text-xl font-semibold">{props.maxHp}</span>
			</Card>
			<Card className="flex flex-row h-full w-full rounded-sm px-0">
				<div className="flex flex-col h-full gap-2 w-[85%] -mx-3 px-0 py-1">
					<div className="text-xl justify-self-start -mx-2">Current HP</div>
					<HiddenTextField
						onInput={event => handleCurrentHp(event)}
						number={true}
						className=" h-full self-center w-[50%] text-5xl"
						value={currentHp}
					/>
				</div>
				<div className="flex flex-col h-full w-[15%] justify-center gap-5 px-1 absolute right-3">
					<Button className="text-3xl bg-transparent focus:bg-transparent p-0 ">+</Button>
					<Button className="text-3xl btn-square btn-sm p-0 hover:bg-transparent focus:bg-transparent  ">
						-
					</Button>
				</div>
			</Card>
		</div>
	)
}

export default HP
