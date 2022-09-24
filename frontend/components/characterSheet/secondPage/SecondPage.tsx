import React from 'react'
import Button from '../../UI/input/ButtonMui'
import BodyContainer from '../../UI/containers/BodyContainer'
import { Card } from '../../UI/containers/Card'
import MetaInfo from '../frontPage/metaInfo/MetaInfo'
import { fetchAllStats, getStats, modifyStats } from '../../../utils/dummyData'
import { useQuery } from '@tanstack/react-query'
import { fetchSpellInfo } from '../../../utils/fetching'
import Modal from '../../UI/containers/Modal'

const SecondPage = () => {
	const [modalLeft, setModalLeft] = React.useState(false)
	const [modalRight, setModalRight] = React.useState(false)
	const [modalTop, setModalTop] = React.useState(false)
	const [modalBottom, setModalBottom] = React.useState(false)
	// const { isLoading, data } = useQuery(['characterSheet'], getStats)

	return (
		<BodyContainer className="bg-base-300 w-screen justify-center items-center content-center">
			{/* <MetaInfo characterName="Halfdan Helligskæg" /> */}
			{/* <div>
				<Button className="btn-primary px-4" onClick={fetchAllStats}>
					Fetch Data
				</Button>
				<Button className="btn-primary px-4 ml-5" onClick={modifyStats}>
					Modify Data
				</Button>
				<Button className="btn-primary px-4 ml-5" onClick={getStats}>
					Retrieve Local Data
				</Button>
				<Button
					className="btn-success px-4 ml-5"
					onClick={() => fetchSpellInfo('fireball')}
				>
					Retrieve Fireball data
				</Button>
			</div> */}
			<div className="flex flex-row w-full md:justify-between justify-center flex-wrap !self-center !justify-self-center gap-2 mt-3">
				<Button onClick={() => setModalLeft(true)}>From left</Button>
				<Button onClick={() => setModalRight(true)}>From right</Button>
				<Button onClick={() => setModalBottom(true)}>From bottom</Button>
				<Button onClick={() => setModalTop(true)}>From top</Button>
			</div>
			<Modal
				dynamic={true}
				isOpen={modalLeft}
				onClose={() => setModalLeft(false)}
				className="r-modal-left"
			>
				<div>
					Invidunt clita diam dolor ipsum rebum justo vel duis illum quod vel eirmod
					invidunt diam et nonummy. Vero accusam erat dolore facilisis lorem labore
					hendrerit. Gubergren sit et eu dolores ut aliquip lorem amet eos. Dolore eirmod
					justo ut veniam et et lorem kasd facilisis duis aliquyam amet gubergren
					consetetur duo rebum tempor et. Aliquyam clita ipsum. Nonumy rebum tempor
					laoreet augue blandit invidunt diam eros eum duo esse et consetetur accusam
					facilisi et. Aliquyam nonumy dolores eros labore aliquam eos adipiscing ipsum
					elit et kasd ipsum. Diam diam et dolor ut elitr no sed at esse duis et te.
					Accusam ipsum gubergren zzril feugiat magna feugait vero dolore sadipscing vel
					blandit erat. Et sadipscing duo id. Sit in vel. Et diam no ipsum dolore dolore
					rebum est clita enim stet et consequat takimata amet in sed. Tempor lorem lorem
					accusam tation dolore eirmod praesent mazim rebum et zzril. Aliquip vero eirmod
					lorem at iusto sed diam elitr labore tempor et nonumy eros sit sed invidunt.
					Lorem iusto dolore at elit sanctus justo commodo imperdiet hendrerit et sea. Et
					wisi et consequat te doming aliquyam. Dolores aliquyam lorem vel ea dolores
					dolor ea ipsum tempor dolore ullamcorper eos. Sadipscing et no no et justo.
				</div>
			</Modal>
			<Modal
				dynamic={true}
				isOpen={modalRight}
				onClose={() => setModalRight(false)}
				className="r-modal-right"
			>
				<div>
					Invidunt clita diam dolor ipsum rebum justo vel duis illum quod vel eirmod
					invidunt diam et nonummy. Vero accusam erat dolore facilisis lorem labore
					hendrerit. Gubergren sit et eu dolores ut aliquip lorem amet eos. Dolore eirmod
				</div>
			</Modal>
			<Modal
				dynamic={true}
				isOpen={modalTop}
				onClose={() => setModalTop(false)}
				className="r-modal-top"
			>
				<div>
					Invidunt clita diam dolor ipsum rebum justo vel duis illum quod vel eirmod
					invidunt diam et nonummy. Vero accusam erat dolore facilisis lorem labore
					hendrerit. Gubergren sit et eu dolores ut aliquip lorem amet eos. Dolore eirmod
					justo ut veniam et et lorem kasd facilisis duis aliquyam amet gubergren
					consetetur duo rebum tempor et. Aliquyam clita ipsum. Nonumy rebum tempor
					laoreet augue blandit invidunt diam eros eum duo esse et consetetur accusam
					facilisi et. Aliquyam nonumy dolores eros labore aliquam eos adipiscing ipsum
					elit et kasd ipsum. Diam diam et dolor ut elitr no sed at esse duis et te.
					Accusam ipsum gubergren zzril feugiat magna feugait vero dolore sadipscing vel
					blandit erat. Et sadipscing duo id. Sit in vel. Et diam no ipsum dolore dolore
					rebum est clita enim stet et consequat takimata amet in sed. Tempor lorem lorem
					accusam tation dolore eirmod praesent mazim rebum et zzril. Aliquip vero eirmod
					lorem at iusto sed diam elitr labore tempor et nonumy eros sit sed invidunt.
					Lorem iusto dolore at elit sanctus justo commodo imperdiet hendrerit et sea. Et
					wisi et consequat te doming aliquyam. Dolores aliquyam lorem vel ea dolores
					dolor ea ipsum tempor dolore ullamcorper eos. Sadipscing et no no et justo.
				</div>
			</Modal>
			<Modal
				dynamic={true}
				isOpen={modalBottom}
				onClose={() => setModalBottom(false)}
				className="r-modal-bottom"
			>
				<div>
					Invidunt clita diam dolor ipsum rebum justo vel duis illum quod vel eirmod
					invidunt diam et nonummy. Vero accusam erat dolore facilisis lorem labore
					hendrerit. Gubergren sit et eu dolores ut aliquip lorem amet eos. Dolore eirmod
					justo ut veniam et et lorem kasd facilisis duis aliquyam amet gubergren
					consetetur duo rebum tempor et. Aliquyam clita ipsum. Nonumy rebum tempor
					laoreet augue blandit invidunt diam eros eum duo esse et consetetur accusam
					facilisi et. Aliquyam nonumy dolores eros labore aliquam eos adipiscing ipsum
					elit et kasd ipsum. Diam diam et dolor ut elitr no sed at esse duis et te.
					Accusam ipsum gubergren zzril feugiat magna feugait vero dolore sadipscing vel
					blandit erat. Et sadipscing duo id. Sit in vel. Et diam no ipsum dolore dolore
					rebum est clita enim stet et consequat takimata amet in sed. Tempor lorem lorem
					accusam tation dolore eirmod praesent mazim rebum et zzril. Aliquip vero eirmod
					lorem at iusto sed diam elitr labore tempor et nonumy eros sit sed invidunt.
					Lorem iusto dolore at elit sanctus justo commodo imperdiet hendrerit et sea. Et
					wisi et consequat te doming aliquyam. Dolores aliquyam lorem vel ea dolores
					dolor ea ipsum tempor dolore ullamcorper eos. Sadipscing et no no et justo.
				</div>
			</Modal>
		</BodyContainer>
	)
}

export default SecondPage
