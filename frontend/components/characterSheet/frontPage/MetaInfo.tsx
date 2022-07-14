import React from 'react'
import { Card } from '../../UI/Card'
import MinorMeta from './MinorMeta'

interface MetaInfoProps {
	className?: string
	characterName?: string
	children?: React.ReactNode
}

export interface MinorMetaColumn {
	header: string
	body: string
}

const MetaInfo = (props: MetaInfoProps) => {
	const columnOneFields: [MinorMetaColumn, MinorMetaColumn] = [
		{
			header: 'Level & Class',
			body: 'Level 1, Fighter',
		},
		{
			header: 'Race',
			body: 'Mountain Dwarf',
		},
	]
	const columnTwoFields: [MinorMetaColumn, MinorMetaColumn] = [
		{
			header: 'Background',
			body: 'Acolyte',
		},
		{
			header: 'Alignment',
			body: 'Lawful Good',
		},
	]
	const columnThreeFields: [MinorMetaColumn, MinorMetaColumn] = [
		{
			header: 'Player Name',
			body: 'Simon',
		},
		{
			header: 'Experience Points',
			body: '1100',
		},
	]

	return (
		<Card
			className="grid grid-cols-10 bg-neutral bg-opacity-70 px-4 py-4 gap-2"
			wrapperClass="h-96"
		>
			<div className="col-span-4 h-full">
				<Card
					header="Character Name"
					className="text-3xl py-10 px-4 font-semibold whitespace-nowrap text-primary h-full"
				>
					{props.characterName}
				</Card>
			</div>
			<MinorMeta fields={columnOneFields} />
			<MinorMeta fields={columnTwoFields} />
			<MinorMeta fields={columnThreeFields} />
		</Card>
	)
}

export default MetaInfo
