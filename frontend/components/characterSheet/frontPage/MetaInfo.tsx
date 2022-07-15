import React from 'react'
import { Card } from '../../UI/Card'
import MetaEntry from './MetaEntry'

interface MetaInfoProps {
	className?: string
	characterName?: string
	children?: React.ReactNode
}

interface MinorEntryProps {
	header: string
	body: string
}

const metaEntryFields: MinorEntryProps[] = [
	{
		header: 'Level & Class',
		body: 'Level 1, Fighter',
	},
	{
		header: 'Background',
		body: 'Acolyte',
	},
	{
		header: 'Player Name',
		body: 'Simon',
	},
	{
		header: 'Race',
		body: 'Mountain Dwarf',
	},
	{
		header: 'Alignment',
		body: 'Lawful Good',
	},
	{
		header: 'Experience Points',
		body: '1100',
	},
]
const renderMetaEntries = (fields: MinorEntryProps[]) => {
	return fields.map((field, index) => {
		return <MetaEntry key={index} header={field.header} body={field.body} />
	})
}

const MetaInfo = (props: MetaInfoProps) => {
	return (
		<Card className="grid grid-cols-10 bg-neutral bg-opacity-70 px-4 py-4 gap-2 h-44">
			<div className={'flex flex-col col-span-4 h-full'}>
				<p className="text-sm mb-1 lg:font-semibold font-semibold">Character Name</p>
				<Card className="text-3xl lg:py-8 md:py-6 lg:px-4 md:px-2 font-semibold lg:h-42 text-base-content h-full rounded-sm tracking-tight">
					{props.characterName}
				</Card>
			</div>
			<div className="grid grid-rows-2 grid-cols-3 pt-1 col-span-6 place-content-between gap-2 h-full">
				{renderMetaEntries(metaEntryFields)}
			</div>
		</Card>
	)
}

export default MetaInfo
