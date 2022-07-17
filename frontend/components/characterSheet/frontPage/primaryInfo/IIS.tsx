import React, { FC } from 'react'
import { Card } from '../../../UI/containers/Card'
import HiddenTextField from '../../../UI/input/HiddenTextField'

interface IISProps {
	inspiration: number
	speed: number
	initiative: number
	className?: string
}

const IIS: FC<IISProps> = props => {
	const [inspiration, setInspiration] = React.useState(props.inspiration)
	const [speed, setSpeed] = React.useState(props.speed)
	const [initiative, setInitiative] = React.useState(props.initiative)

	return (
		<div className="flex flex-col h-full w-full bg-slate-400 py-2 px-1 gap-2">
			<Card className="flex flex-col bg-base-300 w-full h-[50%] rounded-sm justify-between content-center">
				<span>Inspiration</span>
				<HiddenTextField
					onInput={event => setInspiration(+event.currentTarget.value)}
					value={inspiration}
					number={true}
					onFocus={event => event.currentTarget.select()}
				/>
			</Card>
			<div className="flex flex-row h-[50%] w-full bg-red-50 gap-2">
				<Card className="bg-base-300 w-[50%] h-full rounded-sm"></Card>
				<Card className="bg-base-300 w-[50%] h-full rounded-sm"></Card>
			</div>
		</div>
	)
}

export default IIS
