import React from 'react'
import { Card } from '../../../UI/Card'

interface PrimaryInfoProps {
	className?: string
}

const PrimaryInfo = (props: PrimaryInfoProps) => {
	return (
		<Card
			className={
				'grid grid-cols-3 bg-neutral bg-opacity-70 px-4 py-4 gap-2 ' + props.className
			}
		>
			<div className={'flex flex-col h-full bg-slate-500'}></div>
			<div className={'flex flex-col h-full bg-slate-500'}></div>
			<div className={'flex flex-col h-full bg-slate-500'}></div>
		</Card>
	)
}

export default PrimaryInfo