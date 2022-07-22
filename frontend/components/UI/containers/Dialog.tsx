import React, { FC } from 'react'
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Slide,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import Button from '../input/Button'

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />
})

interface Dialog {
	isOpen: boolean
	onClose: () => void
	children?: React.ReactNode
	className?: string
	bodyText?: React.ReactNode
	title?: string
	actions?: React.ReactNode
}

const ModalTest: FC<Dialog> = props => {
	return (
		<div>
			<Dialog
				open={props.isOpen}
				onClose={() => props.onClose()}
				aria-describedby="alert-dialog-slide-description"
				TransitionComponent={Transition}
				className={props.className}
			>
				<DialogTitle>{"Use Google's location service?"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						{props.bodyText}
					</DialogContentText>
					{props.children}
				</DialogContent>
				<DialogActions>{props.actions}</DialogActions>
			</Dialog>
		</div>
	)
}

export default ModalTest
