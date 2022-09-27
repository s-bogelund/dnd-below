import React from 'react'
import { Button as MuiButton, Typography } from '@mui/material'

interface ButtonProps {
	className?: string
	children?: React.ReactNode
	onClick?: () => void
}

const HiddenButton = (props: ButtonProps) => {
	return (
		<MuiButton variant="text" onClick={props.onClick} sx={{ backgroundOpacity: 0 }}>
			{/* color={theme.palette.primary.main} */}
			<Typography variant="h4" color="text.primary">
				{props.children}
			</Typography>
		</MuiButton>
	)
}

export default HiddenButton
