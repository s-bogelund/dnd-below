import React from 'react'
import { Card } from '../../../UI/Card'
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
		body: 'Level 3 Paladin',
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
				<p className="text-sm mb-1 lg:font-semibold font-medium">Character Name</p>
				<Card className="lg:text-3xl md:text-2xl lg:py-8 md:py-6 lg:px-4 md:px-2 font-semibold text-base-content h-full rounded-sm tracking-tight border-[1px] border-white border-opacity-20">
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
