import * as React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { createTheme, ThemeProvider, styled, ThemeOptions } from '@mui/material/styles'

import { orange } from '@mui/material/colors'

declare module '@mui/material/styles' {
	interface Theme {
		palette: {
			mode: 'dark'
			primary: {
				main: string
				dark?: string
			}
			secondary: {
				main: string
				dark?: string
			}
		}
	}
}

const darkBackgroundPaper = '#192435'

export const darkMode: ThemeOptions = {
	palette: {
		mode: 'dark',
		primary: {
			main: '#216fb4',
			light: '#4388c5',
			dark: '#374187',
		},
		secondary: {
			main: '#ba5bc3',
		},
		background: {
			default: '#0c1322',
			paper: darkBackgroundPaper,
		},
		text: {
			primary: '#b3c5ef',
			secondary: '#5964af',
		},
		error: {
			main: '#f44336',
		},
		warning: {
			main: '#ddb04f',
		},
		info: {
			main: '#0d98d6',
		},
		success: {
			main: '#27b1a3',
		},
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: darkBackgroundPaper,
				},
			},
		},
	},
}
export const theme = createTheme(darkMode)
export const theme2 = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#216fb4',
			light: '#4388c5',
			dark: '#374187',
		},
		secondary: {
			main: '#ba5bc3',
		},
		background: {
			default: '#0c1322',
			paper: darkBackgroundPaper,
		},
		text: {
			primary: '#b3c5ef',
			secondary: '#5964af',
		},
		error: {
			main: '#f44336',
		},
		warning: {
			main: '#ddb04f',
		},
		info: {
			main: '#0d98d6',
		},
		success: {
			main: '#27b1a3',
		},
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: darkBackgroundPaper,
				},
			},
		},
	},
})
