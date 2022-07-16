import React from 'react'
import FrontPage from './frontPage/FrontPage'
import SecondPage from './secondPage/SecondPage'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const CharacterSheet = () => {
	return (
		<div className="">
			<Swiper
				cssMode={true}
				spaceBetween={80}
				pagination={true}
				modules={[Pagination]}
				slidesPerView={1}
				className="swipe-fix"
			>
				<SwiperSlide className="swipe-fix">
					<FrontPage />
				</SwiperSlide>
				<SwiperSlide className="swipe-fix">
					<SecondPage />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default CharacterSheet
