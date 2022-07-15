import React, { useRef } from 'react'
import { Card } from '../../../UI/Card'

interface MetaEntryProps {
	className?: string
	header?: string
	body: string
}

const MetaEntry = (props: MetaEntryProps) => {
	const [bodyText, setBodyText] = React.useState(props.body)
	const [bodyTextSize, setBodyTextSize] = React.useState('text-sm')
	const ref: any = useRef(null)

	return (
		<div className={'flex flex-col p-0 h-full '}>
			<p className="text-xs mb-1 font-medium">{props.header}</p>
			<Card
				className={
					'text-sm lg:text-md lg:py-[0.6rem] md:py-[0.4rem] rounded-sm lg:px-4 md:px-2 text-base-content border-[1px] border-white border-opacity-20 h-full form-control ' +
					bodyTextSize
				}
			>
				<input
					type="text"
					className={
						'input ghost lg:text-md w-full font-medium focus:border-transparent focus-input-outline p-0 bg-transparent text-center h-5 break-words max-h-10 rounded-sm ' +
						bodyTextSize
					}
					value={bodyText}
					onInput={event => handleBodyText(event.currentTarget)}
				></input>
			</Card>
		</div>
	)

	function handleBodyText(e: HTMLInputElement) {
		setBodyText(e.value)
		const length = e.value.length
		console.log(length)
		if (visualViewport.width > 1000) {
			console.log('hello', visualViewport.width)
			return
		}

		if (length >= 15 && length <= 18) {
			if (bodyTextSize === 'text-xs') return
			setBodyTextSize('text-xs')
			return
		}
		if (length > 18) {
			if (bodyTextSize === 'text-2xs') return
			setBodyTextSize('text-2xs')
			return
		}
		if (length < 15) {
			if (bodyTextSize === 'text-sm') return
			setBodyTextSize('text-sm')
		} else {
			setBodyTextSize('text-xs')
		}
	}
}

export default MetaEntry