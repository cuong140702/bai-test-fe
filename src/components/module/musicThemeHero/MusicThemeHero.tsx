import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Swiper CSS
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Custom styles
import './testimonial.css'

const testimonials = [
  {
    text: 'Customer support is super fast and super nice. It has been a few years since I touched a website so I am dusting off my cobwebs and I am not feeling bad about asking questions! Thanks guys!',
    author: '— LUCKY777 (FIREMASTER)'
  },
  {
    text: 'The themes are beautifully designed and very user-friendly. Perfect for my music studio website!',
    author: '— MUSICPRO (VERIFIED)'
  },
  {
    text: "Incredible value for the price. The customization options are exactly what I needed for my band's website.",
    author: '— ROCKSTAR99 (VERIFIED)'
  }
]

const MusicThemeHero = () => {
  return (
    <div className='relative w-full h-[600px] overflow-hidden'>
      {/* Background */}
      <div
        className='absolute inset-0'
        style={{
          backgroundImage: "url('https://preview.wolfthemes.store/app/uploads/sites/31/2019/10/t-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Content */}
      <div className='relative h-full flex flex-col justify-center items-center px-8 z-20'>
        <h1
          className='text-[95px] text-gray-400 italic mb-4 text-center'
          style={{ letterSpacing: 2, fontFamily: 'MyFont' }}
        >
          Making Music Themes Since 2011
        </h1>
        <h2
          className='text-2xl font-bold uppercase text-white mb-8 tracking-wider text-center'
          style={{ fontFamily: 'MyFont3' }}
        >
          LATEST MUSIC THEME REVIEWS
        </h2>

        {/* Swiper */}
        <div className='w-full max-w-4xl mx-auto'>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className='!pb-12 testimonial-swiper'
            style={{ minHeight: 180 }}
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx} className='testimonial-slide'>
                <div className='flex flex-col items-center justify-center min-h-[180px]'>
                  <p className='text-white text-xl mb-6 text-center'>{item.text}</p>
                  <p className='text-white text-lg font-bold text-center'>{item.author}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default MusicThemeHero
