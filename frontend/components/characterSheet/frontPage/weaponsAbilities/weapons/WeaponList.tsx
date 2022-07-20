import React, { FC, useState } from 'react'
import { IWeapon } from '../../../../../utils/interfaces'
import ListWA from '../ListWA'
import WeaponItem from './WeaponItem'
import { MdAddBox } from 'react-icons/md'
import { IconContext } from 'react-icons'

interface IWeaponProps {
	className?: string
	weapons?: IWeapon[]
}

const WeaponList: FC<IWeaponProps> = props => {
	const { weapons } = props
	const [canAddWeapon, setCanAddWeapon] = useState(
		weapons !== undefined ? weapons?.length < 3 : true
	)
	return (
		<ListWA header="Weapons" className={'row-span-2 gap-1 h-fit ' + props.className}>
			<div className="flex flex-row justify-start items-start content-start w-full gap-[2px] -mb-2">
				<span className="w-[43%] h-6 tracking-tighter text-sm text-center">Name</span>
				<span className="w-[13%] h-6 tracking-tighter text-sm px-1">Atk+</span>
				<span className="w-[44%] h-6 tracking-tighter text-sm text-center">Damage</span>
			</div>
			<WeaponItem />
			<WeaponItem />
			<WeaponItem />
			{canAddWeapon && (
				<div className="flex justify-center content-center">
					<IconContext.Provider
						value={{
							className:
								'text-neutral-content opacity-20 mt-1 h-full m-0 text-2xl lg:text-4xl',
						}}
					>
						<button className=" btn-block btn-hidden btn-sm lg:btn-md h-full m-0">
							<MdAddBox className="text-2xl lg:text-4xl" />
						</button>
					</IconContext.Provider>
				</div>
			)}
		</ListWA>
	)
}

export default WeaponList
