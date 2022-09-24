import React from 'react'
import { Button as MuiButton } from '@mui/material'

interface ButtonProps {
	className?: string
	children?: React.ReactNode
	onClick?: () => void
}

const HiddenButton = (props: ButtonProps) => {
	return (
		<MuiButton variant="text" onClick={props.onClick} sx={{ backgroundOpacity: 0 }}>
			{props.children}
		</MuiButton>
	)
}

export default HiddenButton
