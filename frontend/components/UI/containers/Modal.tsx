import React, { FC } from 'react'
import Modal from 'react-modal'

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '50%',
		height: '50%',
		zIndex: '10',
	},
}

interface ModalProps {
	isOpen: boolean
	onRequestClose?: () => void
	children?: React.ReactNode
	className?: string
}

const ModalTest: FC<ModalProps> = props => {
	const [isOpen, setIsOpen] = React.useState(props.isOpen)
	const [subtitle, setSubtitle] = React.useState('These are the subtitles')

	return (
		<div>
			<button
				onClick={() => {
					setIsOpen(true)
				}}
			>
				Open Modal
			</button>
			<Modal
				isOpen={isOpen}
				onRequestClose={() => setIsOpen(false)}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<h2>Hello</h2>
				<button onClick={() => setIsOpen(false)}>close</button>
				<div>I am a modal</div>
				<form>
					<input />
					<button>tab navigation</button>
					<button>stays</button>
					<button>inside</button>
					<button>the modal</button>
				</form>
			</Modal>
		</div>
	)
}

export default ModalTest
