import React from 'react'
import HexagonIcon from '@mui/icons-material/Hexagon'
import ShieldIcon from '@mui/icons-material/Shield'
import styles from '../../../../assets/icons.module.css'
import HiddenTextField from '../../../UI/HiddenTextField'

const ACHIT = () => {
	return (
		<div className="flex flex-row justify-between content-between h-full w-[100%] gap-1 p-1">
			<div className="flex flex-col w-[50%] justify-center items-center -ml-3">
				<span className={'material-icons text-base-300 relative ' + styles.iconFontXl}>
					shield
				</span>
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
				<span className="material-icons md-96 text-base-300 text-[9rem] lg:text-[12rem] relative">
					{/* <span className={'material-icons text-base-300 relative ' + styles.iconFontXl}> */}
					hexagon
				</span>
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
