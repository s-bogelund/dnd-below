import React from 'react'
import { Button as MuiButton } from '@mui/material'

interface ButtonProps {
	sx?: object
	children?: React.ReactNode
	variant?: 'text' | 'outlined' | 'contained'
	onClick?: () => void
}

const Button = (props: ButtonProps) => {
	return (
		<MuiButton variant={props.variant} onClick={props.onClick} sx={props.sx}>
			{props.children}
		</MuiButton>
	)
}

export default Button
