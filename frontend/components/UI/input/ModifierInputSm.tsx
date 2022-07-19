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
	showPlus: boolean
	labelProps?: string
	fontSize: string
}

const ModifierInputSm: FC<Props> = props => {
	return (
		<div
			className={
				'flex flex-row w-fit max-w-[30px] h-fit justify-center content-center relative ' +
				(props.showPlus ? ' -ml-2 lg:-ml-1' : '')
			}
		>
			{props.showPlus && (
				<>
					<div className="ml-2 lg:ml-3 w-1 lg:w-[6px] mt-[2px]">
						<label className={' ' + props.labelProps + ' ' + props.fontSize}>+</label>
					</div>

					<span className={'w-fit h-fit lg:-ml-[0.1rem] mt-[2px]'}>
						<HiddenTextField
							onInput={props.onInput}
							value={props.value}
							number={true}
							onFocus={props.onFocus}
							className={'min-w-[19px] ' + props.className + ' ' + props.fontSize}
						/>
						<span className="absolute h-[1px] bg-neutral-content w-4 lg:w-5 left-[9px] bottom-[2px]"></span>
					</span>
				</>
			)}

			{!props.showPlus && (
				<span className={' w-fit h-fit -ml-[2px] lg:ml-[5px] mt-[2px]'}>
					<HiddenTextField
						onInput={props.onInput}
						value={props.value}
						number={true}
						onFocus={props.onFocus}
						className={'min-w-[19px] ' + props.className + ' ' + props.fontSize}
					/>
					<span className="absolute h-[1px] bg-neutral-content w-4 lg:w-5 left-[1px] lg:left-[0.3rem] bottom-[2px]  "></span>
				</span>
			)}
		</div>
	)
}

export default ModifierInputSm
