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
	labelProps?: string
	fontSize: string
}

const ModifierInputLg: FC<Props> = props => {
	return (
		<div
			className={
				'flex flex-row w-fit max-w-[30px] h-fit justify-center content-center ' +
				(props.showPlus ? ' -ml-2' : '')
			}
		>
			{props.showPlus && (
				<div className="w-2 lg:w-3 h-fit">
					<label className={' ' + props.labelProps + ' ' + props.fontSize}>+</label>
				</div>
			)}

			<span
				className={
					'border-white border w-fit lg:max-w-{18px} max-w-{15px} h-fit ' +
						props.showPlus && ' lg:-ml-[0.3rem] -ml-[0.2rem] -mt-[1px]'
				}
			>
				<HiddenTextField
					onInput={props.onInput}
					value={props.value}
					number={true}
					onFocus={props.onFocus}
					className={'min-w-[19px] ' + props.className + ' ' + props.fontSize}
				/>
			</span>
		</div>
	)
}

export default ModifierInputLg
