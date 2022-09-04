import React from 'react'
import { Card } from '../../../UI/containers/Card'
import HiddenTextField from '../../../UI/input/HiddenTextField'
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
	const [characterName, setCharacterName] = React.useState(props.characterName)

	return (
		<Card
			className={
				'grid grid-cols-10 bg-neutral bg-opacity-70 p-3 md:pb-4 gap-2 ' +
				props.className
			}
		>
			<div
				className={
					'flex flex-col col-span-4 min-h-[7rem] h-[40%] max-h-[12rem] test123'
				}
			>
				<p className="text-sm mb-1 lg:font-semibold font-medium">
					Character Name
				</p>
				<Card className=" lg:px-2 md:px-1 font-semibold text-base-content rounded-sm border-[1px] border-white border-opacity-20 h-full">
					<HiddenTextField
						className={
							'input lg:text-3xl md:text-2xl h-full w-full font-medium focus:border-transparent focus-input-outline p-0 bg-transparent text-center rounded-sm '
						}
						value={characterName}
						onInput={event => setCharacterName(event.currentTarget.value)}
					></HiddenTextField>
				</Card>
			</div>
			<div className="grid grid-rows-2 grid-cols-3 pt-1 col-span-6 gap-x-2 gap-y-1 min-h-[7rem] h-[40%] max-h-[12rem]">
				{renderMetaEntries(metaEntryFields)}
			</div>
		</Card>
	)
}

export default MetaInfo
