import { Button as MuiButton } from '@mui/material'
import React, { FC } from 'react'

interface ButtonProps {
	sx?: object
	children?: React.ReactNode
	variant?: 'text' | 'outlined' | 'contained'
	onClick?: () => void
}

const Button: FC<ButtonProps> = props => {
	return (
		<MuiButton variant="contained" onClick={props.onClick} sx={props.sx}>
			{props.children}
		</MuiButton>
	)
}

export default Button
