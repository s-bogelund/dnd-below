import React from 'react'
import Button from '../../UI/input/Button'
import BodyContainer from '../../UI/containers/BodyContainer'
import BodyContainerFlex from '../../UI/containers/BodyContainerFlex'
import { Card } from '../../UI/containers/Card'
import MetaInfo from './metaInfo/MetaInfo'
import PrimaryInfo from './primaryInfo/PrimaryInfo'

const FrontPageFlex = () => {
	return (
		<BodyContainerFlex className="w-screen gap-4 ">
			<MetaInfo className="h-fit" characterName="Halfdan Helligskæg" />
			<PrimaryInfo className="w-full shrink h-fit grow" />
			<Card className="bg-neutral grid grid-rows-5 grid-cols-3 min-h[20%] h-[70%] rounded-md col-span-2 row-span-20 shrink">
				<Button className="btn-neutral">neutral</Button>
				<Button className="btn-primary">primary</Button>
				<Button className="btn-secondary">secondary</Button>
				<Button className="btn-accent">accent</Button>
				<Button className="btn-warning">warning</Button>
				<Button className="btn-succes">warning</Button>
				<Button className="btn-success">success</Button>
				<Button className="btn-hidden">hidden</Button>
			</Card>
		</BodyContainerFlex>
	)
}

export default FrontPageFlex
