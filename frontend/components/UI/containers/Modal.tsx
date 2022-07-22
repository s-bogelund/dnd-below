import React, { FC, ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

export interface Dialog {
	isOpen?: boolean
	onClose?: () => void
	children?: React.ReactNode
	className?: string
	bodyText?: React.ReactNode
	title?: string
	actions?: React.ReactNode
	parentId?: string
	dynamic?: boolean
}

interface Overlay {
	children: React.ReactNode
	className?: string
	bodyText?: React.ReactNode
}

interface Backdrop {
	onClose?: () => void
}

export const Backdrop: FC<Backdrop> = props => {
	return (
		// className="fixed top-0 left-0 w-full h-full z-20 bg-black opacity-75"
		<div className="backdrop" onClick={props.onClose} />
	)
}

const ModalOverlay: FC<Overlay> = props => {
	return (
		<div className={'react-modal modal-test ' + props.className}>
			{props.children || props.bodyText || 'No Text Has Been Set'}
		</div>
	)
}

const Modal: FC<Dialog> = props => {
	const [dynamic, setDynamic] = React.useState(props.dynamic || false)
	let portalElement: HTMLElement | null = null

	const [mounted, setMounted] = React.useState(false)
	useEffect(() => {
		/*eslint-disable */
		setMounted(true)
		portalElement = document.getElementById(
			props.parentId ? props.parentId : 'modal-root'
		)
		/*eslint-enable */
		return () => {
			console.log(portalElement)

			setMounted(false)
		}
	}, [])

	const handleSsr = () => {
		if (dynamic) {
			return (
				<>
					{mounted &&
						createPortal(
							<Backdrop onClose={props.onClose} />,
							portalElement ? portalElement : document.body
						)}
					{mounted &&
						createPortal(
							<ModalOverlay bodyText={props.bodyText}>{props.children}</ModalOverlay>,
							portalElement
								? portalElement
								: document.getElementById('modal-root') || document.body
						)}
				</>
			)
		} else {
			return (
				<>
					{createPortal(
						<Backdrop onClose={props.onClose} />,
						portalElement
							? portalElement
							: document.getElementById('modal-root') || document.body
					)}
					{createPortal(
						<ModalOverlay>{props.children}</ModalOverlay>,
						portalElement
							? portalElement
							: document.getElementById('modal-root') || document.body
					)}
				</>
			)
		}
	}

	return <>{props.isOpen && <div>{handleSsr()}</div>}</>
	// return (
	// 	props.isOpen && (
	// 		<div>
	// 			{createPortal(
	// 				<Backdrop onClose={props.onClose} />,
	// 				portalElement
	// 					? portalElement
	// 					: document.getElementById('modal-root') || document.body
	// 			)}
	// 			{createPortal(
	// 				<ModalOverlay>{props.children || 'Hello!'}</ModalOverlay>,
	// 				portalElement
	// 					? portalElement
	// 					: document.getElementById('modal-root') || document.body
	// 			)}
	// 		</div>
	// 	)
	// )
}
export default Modal
