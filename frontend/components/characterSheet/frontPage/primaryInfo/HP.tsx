import React, { FC } from 'react'
import Button from '../../../UI/input/ButtonMui'
import { Card } from '../../../UI/containers/Card'
import HiddenTextField from '../../../UI/input/HiddenTextField'
import HiddenButton from '../../../UI/input/HiddenButton'
import { validateNumberParameters } from '../../../../utils/validation'

interface HPProps {
	className?: string
	maxHp?: number
	currentHp?: number
}

const MAXIMUM_HP_VALUE = 999

const HP: FC<HPProps> = props => {
	const [currentHp, setCurrentHp] = React.useState(21)
	const [maxHp, setMaxHp] = React.useState(29)
	const [tempHpAdded, setTempHpAdded] = React.useState(false)

	const handleCurrentHp = (event: React.FormEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value
		if (value.length < 1) {
			tempHdLogic(0, maxHp)
			setCurrentHp(0)
			return
		}

		const newHp = parseInt(value)
		const validated = validateNumberParameters(newHp, 0, MAXIMUM_HP_VALUE)
		if (!validated) return

		if (currentHp + newHp < 0) {
			setCurrentHp(0)
			return
		}

		tempHdLogic(newHp, maxHp)
		setCurrentHp(newHp)
	}

	const handleMaxHp = (event: React.FormEvent<HTMLInputElement>): void => {
		const value = event.currentTarget.value
		if (value.length < 1) {
			tempHdLogic(0, 0)
			setMaxHp(0)
			return
		}

		const newHp = parseInt(value)
		const validated = validateNumberParameters(newHp, 0, MAXIMUM_HP_VALUE)
		if (!validated) return

		tempHdLogic(currentHp, newHp)
		setMaxHp(newHp)
	}

	const tempHdLogic = (newCurrentHp: number, maxHp: number): void => {
		if (newCurrentHp > maxHp) setTempHpAdded(true)
		else setTempHpAdded(false)
	}

	const onHpButtonClick = (hpChange: number): void => {
		if (currentHp + hpChange < 0) return
		tempHdLogic(currentHp + hpChange, maxHp)
		setCurrentHp(currentHp + hpChange)
	}

	return (
		<div className="flex flex-col items-stretch p-2 gap-2 h-full">
			<Card className="flex flex-row w-full justify-between px-2 py-1 h-fit rounded-sm">
				<span className="text-xl font-semibold w-[50%]">Max HP</span>
				<HiddenTextField
					number={true}
					onInput={event => handleMaxHp(event)}
					onFocus={event => event.currentTarget.select()}
					value={maxHp}
					className="flex text-xl font-semibold max-w-[25%] w-fit rounded-sm text-center "
				></HiddenTextField>
			</Card>
			<Card className="flex flex-row h-full w-full rounded-sm px-0 relative">
				<div className="flex flex-col h-full lg:gap-2 w-[85%] px-0 py-1">
					<div className="text-xl font-semibold justify-self-start -mx-2">Current HP</div>
					<HiddenTextField
						onInput={event => handleCurrentHp(event)}
						number={true}
						className={
							' h-fit self-center w-[60%] text-5xl lg:text-8xl text-center ' +
							(tempHpAdded ? ' text-success font-bold' : '')
						}
						value={currentHp}
						onFocus={event => event.currentTarget.select()}
					/>
				</div>
				<div className="flex flex-col p-12 h-full w-fit justify-between lg:justify-center gap-3 lg:gap-4 px-1 absolute right-3 py-0">
					<HiddenButton onClick={() => onHpButtonClick(+1)}>+</HiddenButton>
					<HiddenButton onClick={() => onHpButtonClick(-1)}>-</HiddenButton>
				</div>
			</Card>
		</div>
	)
}

export default HP
