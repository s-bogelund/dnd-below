import React, { FC } from 'react'

interface Dialog {
	isOpen?: boolean
	onClose?: () => void
	children?: React.ReactNode
	className?: string
	bodyText?: React.ReactNode
	title?: string
	actions?: React.ReactNode
	parentId?: string
}

const Dialog2: FC<Dialog> = props => {
	const [isOpen, setIsOpen] = React.useState(false)

	const checkChecker = () => {
		console.log('checked')
		return
	}

	return (
		<div>
			<input
				type="checkbox"
				checked={isOpen}
				id={props.parentId}
				className="modal-toggle"
			/>
			<div className="modal">
				<div className="modal-box relative w-[150vw]">
					<label
						htmlFor={props.parentId}
						className="btn btn-sm btn-primary btn-circle absolute right-4 top-4"
					>
						✕
					</label>
					<h3 className="text-xl font-bold">{props.title}</h3>
					<p className="p-8 lg:text-lg text-base">{props.bodyText}</p>
					<div>{props.children}</div>
				</div>
			</div>
		</div>
	)
}

export default Dialog2
