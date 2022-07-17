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
	const [currentHp, setCurrentHp] = React.useState(21)
	const [maxHp, setMaxHp] = React.useState(29)

	const handleCurrentHp = (event: React.FormEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value
		if (value.length < 1) {
			setCurrentHp(0)
			return
		}

		if (!validateHp(value)) return

		const newHp = parseInt(value)

		if (currentHp + newHp < 0) {
			setCurrentHp(0)
			return
		}
		setCurrentHp(newHp)
	}

	const handleMaxHp = (event: React.FormEvent<HTMLInputElement>): void => {
		const value = event.currentTarget.value
		if (value.length < 1) {
			console.log('emptry string')
			setMaxHp(0)
			return
		}

		console.log('value', value)
		if (validateHp(value) === false) {
			console.log('invalid', value)
			return
		}
		const newHp = parseInt(value)

		console.log('newHp', newHp)
		if (newHp === NaN) return
		console.log('newHp', newHp)
		setMaxHp(+event.currentTarget.value)
	}

	const onHpButtonClick = (hpChange: number): void => {
		if (currentHp + hpChange > maxHp || currentHp + hpChange < 0) return
		setCurrentHp(currentHp + hpChange)
	}

	const handleCurrentHpBlur = (): void => {
		console.log('HandleCurrentHpBlur called')
		if (currentHp > maxHp) setCurrentHp(maxHp)
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
					className="flex text-xl font-semibold max-w-[25%] w-fit rounded-sm "
				></HiddenTextField>
			</Card>
			<Card className="flex flex-row h-full w-full rounded-sm px-0 relative">
				<div className="flex flex-col h-full lg:gap-2 w-[85%] px-0 py-1">
					<div className="text-xl font-semibold justify-self-start -mx-2">Current HP</div>
					<HiddenTextField
						onInput={event => handleCurrentHp(event)}
						onBlur={() => handleCurrentHpBlur()}
						number={true}
						className=" h-fit self-center w-[60%] text-5xl lg:text-8xl"
						value={currentHp}
						onFocus={event => event.currentTarget.select()}
					/>
				</div>
				<div className="flex flex-col p-12 h-full w-fit justify-between lg:justify-center gap-3 lg:gap-4 px-1 absolute right-3 py-0">
					<HiddenButton onClick={() => onHpButtonClick(+1)} className="text-4xl btn-md  ">
						+
					</HiddenButton>
					<HiddenButton className="text-4xl btn-md " onClick={() => onHpButtonClick(-1)}>
						-
					</HiddenButton>
				</div>
			</Card>
		</div>
	)

	function validateHp(newValue: string): boolean {
		const value = +newValue
		console.log(value, typeof value)

		if (value > 999) return false

		console.log('value is now', value, typeof value)
		return true
	}
}

export default HP
