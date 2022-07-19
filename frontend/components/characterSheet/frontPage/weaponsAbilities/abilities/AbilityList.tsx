import React, { FC } from 'react'
import { IAbility } from '../../../../../utils/interfaces'
import ListWA from '../ListWA'

interface AbilityListProps {
	className?: string
	abilities?: IAbility[]
}

const AbilityList: FC<AbilityListProps> = props => {
	return <ListWA header="Abilities"></ListWA>
}

export default AbilityList
