import React from 'react'
import FrontPage from './frontPage/FrontPage'
import SecondPage from './secondPage/SecondPage'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import FrontPageFlex from './frontPage/FrontPageFlex'

const CharacterSheet = () => {
	return (
		<Swiper
			cssMode={true}
			spaceBetween={80}
			pagination={true}
			modules={[Pagination]}
			slidesPerView={1}
			className="swipe-fix h-[100%]"
		>
			<SwiperSlide className="swipe-fix">
				{/* <FrontPage /> */}
				<FrontPageFlex />
			</SwiperSlide>
			<SwiperSlide className="swipe-fix">
				<SecondPage />
			</SwiperSlide>
		</Swiper>
	)
}

export default CharacterSheet
