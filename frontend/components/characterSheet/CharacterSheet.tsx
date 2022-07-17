import React from 'react'
import FrontPage from './frontPage/FrontPage'
import SecondPage from './secondPage/SecondPage'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const CharacterSheet = () => {
	return (
		<Swiper
			cssMode={true}
			spaceBetween={80}
			pagination={true}
			modules={[Pagination]}
			slidesPerView={1}
			className="swipe-fix "
		>
			<SwiperSlide className="swipe-fix flex flex-row justify-center ">
				{/* <FrontPage /> */}
				<FrontPage />
			</SwiperSlide>
			<SwiperSlide className="swipe-fix flex flex-row justify-center content-center items-center">
				<SecondPage />
			</SwiperSlide>
		</Swiper>
	)
}

export default CharacterSheet
