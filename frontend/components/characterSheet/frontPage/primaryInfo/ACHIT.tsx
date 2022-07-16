import React, { FC } from 'react'
import styles from '../../../../assets/icons.module.css'
import HiddenTextField from '../../../UI/HiddenTextField'
import { BsFillHexagonFill } from 'react-icons/bs'
import { MdShield } from 'react-icons/md'
import { IconContext } from 'react-icons'

const ACHIT: FC = () => {
	return (
		<div className="flex flex-row justify-between content-between h-full w-[100%] gap-1 p-1">
			<div className="flex flex-col w-[50%] justify-center items-center -ml-3">
				<IconContext.Provider
					value={{ className: 'relative text-[11.5rem] text-base-300 ' }}
				>
					<MdShield />
				</IconContext.Provider>
				<div className="absolute text-center flex flex-col items-center">
					<p className="w-full tracking-tighter whitespace-nowrap text-xl lg:text-2xl text-center ">
						Armor Class
					</p>
					<HiddenTextField
						placeholder="10"
						className="w-12 lg:w-16 text-center text-neutral-content lg:text-5xl text-4xl font-semibold"
					/>
				</div>
			</div>
			<div className="flex flex-col justify-center  items-center w-[50%]">
				{/* <span className="material-icons md-96 text-base-300 text-[9rem] lg:text-[12rem] relative"> */}
				<IconContext.Provider
					value={{ className: 'relative text-[10rem] text-base-300 ' }}
				>
					<BsFillHexagonFill />
				</IconContext.Provider>
				<div className="absolute w-[6rem] text-center flex flex-col items-center">
					<p className="w-full tracking-tighter whitespace-nowrap text-xl lg:text-2xl text-center ">
						Hit Dice
					</p>
					<HiddenTextField
						placeholder="10"
						className="w-12 lg:w-16 text-center text-neutral-content lg:text-5xl text-4xl font-semibold"
					></HiddenTextField>
				</div>
			</div>
		</div>
	)
}

export default ACHIT
