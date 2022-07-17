import React, { FC } from 'react'
import HiddenTextField from './HiddenTextField'

interface Props {
	className?: string
	value?: string | number
	onInput: (event: React.FormEvent<HTMLInputElement>) => void
	placeholder?: string
	number?: true | undefined
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
	showPlus?: boolean
	noMargin?: boolean
	labelProps?: string
	fontSize: string
}

const ModifierInput: FC<Props> = props => {
	return (
		<div
			className={
				'flex flex-row w-full h-fit justify-center content-center  ' +
				(props.showPlus && props.noMargin ? ' -ml-2 ' : '')
			}
		>
			{props.showPlus && (
				<div className="w-4">
					<label className={' ' + props.labelProps + ' ' + props.fontSize}>
						+
					</label>
				</div>
			)}

			<div className={props.showPlus && !props.noMargin ? '-ml-2' : ''}>
				<HiddenTextField
					onInput={props.onInput}
					value={props.value}
					number={true}
					onFocus={props.onFocus}
					className={' ' + props.className + ' ' + props.fontSize}
				/>
			</div>
		</div>
	)
}

export default ModifierInput
