import React, { FC } from 'react'
import HiddenTextField from '../../../UI/input/HiddenTextField'
import { BsFillHexagonFill } from 'react-icons/bs'
import { BsHexagon } from 'react-icons/bs'
import { MdShield } from 'react-icons/md'
import { IconContext } from 'react-icons'

interface Props {
	armorClass?: number
	hitDice?: number
}

const ACHIT: FC<Props> = ({ armorClass, hitDice }) => {
	const [ACState, setACState] = React.useState(armorClass || 10)
	const [HDState, setHDState] = React.useState(hitDice || 8)

	const handleACInput = (event: React.FormEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value
		if (event.currentTarget.value.length > 2) return
		setACState(Number(value))
	}

	const handleHDInput = (event: React.FormEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value
		if (event.currentTarget.value.length > 2) return
		setHDState(Number(value))
	}

	return (
		<div className="flex flex-row justify-between content-between h-full w-[100%] gap-1 p-1">
			<div className="flex flex-col w-[50%] justify-center items-center -ml-3">
				<IconContext.Provider
					value={{ className: 'relative lg:text-[11rem] text-[9rem] text-base-300 ' }}
				>
					<MdShield />
				</IconContext.Provider>
				<div className="absolute text-center flex flex-col items-center">
					<p className="w-full tracking-tighter whitespace-nowrap text-xl lg:text-2xl text-center ">
						Armor Class
					</p>
					<HiddenTextField
						className="w-12 lg:w-16 text-center text-neutral-content lg:text-5xl text-4xl font-semibold"
						value={ACState}
						number={true}
						onInput={e => handleACInput(e)}
					/>
				</div>
			</div>
			<div className="flex flex-col justify-center  items-center w-[50%]">
				{/* <span className="material-icons md-96 text-base-300 text-[9rem] lg:text-[12rem] relative"> */}
				<IconContext.Provider
					value={{
						className: 'relative text-[8rem] lg:text-[10rem] text-base-300',
					}}
				>
					<BsFillHexagonFill className="border-white" />
				</IconContext.Provider>
				<div className="absolute w-[6rem] text-center flex flex-col items-center">
					<p className="w-full tracking-tighter whitespace-nowrap text-xl lg:text-2xl text-center ">
						Hit Dice
					</p>
					<HiddenTextField
						className="w-12 lg:w-16 text-center text-neutral-content lg:text-5xl text-4xl font-semibold "
						value={HDState}
						onInput={e => handleHDInput(e)}
					/>
				</div>
			</div>
		</div>
	)
}

export default ACHIT
