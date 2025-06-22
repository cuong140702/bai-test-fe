import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedFooter() {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [hasAnimated, setHasAnimated] = useState<boolean>(false)
  const [hideContent, setHideContent] = useState<boolean>(false)
  const footerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries

        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      {
        threshold: 0.3
      }
    )

    // Start observing the footer element
    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    // Clean up observer on component unmount
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
    }
  }, [hasAnimated])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (isVisible && !hideContent) {
      timer = setTimeout(() => setHideContent(true), 5000)
    }

    return () => clearTimeout(timer)
  }, [isVisible, hideContent])

  return (
    <div
      ref={footerRef}
      className='relative w-full  min-h-screen flex flex-col items-center justify-center overflow-hidden'
    >
      {/* Ảnh nền */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage:
            "url('https://onpointeawards.com/wp-content/uploads/2019/11/george-mihaila-j-LdPn1YFGA-unsplash.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Overlay tối nhẹ để nổi chữ */}
      <div className='absolute inset-0 bg-black/30 z-10' />

      {/* Nội dung */}
      <div className='relative z-20 flex flex-col items-center justify-center w-full h-full'>
        {!hideContent && (
          <div className='relative flex flex-col items-center justify-center w-full' style={{ height: 260 }}>
            {/* HERION */}
            <motion.h1
              className='text-white text-7xl md:text-[110px] font-bold tracking-wider leading-none'
              initial={{ y: -100, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              style={{ fontFamily: 'MyFont3' }}
            >
              HERION
            </motion.h1>

            {/* Nút BUY NOW absolute, căn giữa */}
            <motion.div
              className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20'
              initial={{ scale: 0, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.0, ease: 'easeOut' }}
            >
              <a href='#' className='inline-block'>
                <div
                  className='bg-radical-red-500 text-white font-bold py-2 px-8 text-lg rounded shadow-lg text-center'
                  style={{ letterSpacing: 1 }}
                >
                  BUY NOW
                </div>
              </a>
            </motion.div>

            {/* THEME */}
            <motion.h2
              className='text-white text-7xl md:text-[110px] font-bold tracking-wider leading-none mt-4'
              initial={{ y: 100, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
              style={{ fontFamily: 'MyFont3' }}
            >
              THEME
            </motion.h2>
          </div>
        )}
      </div>
    </div>
  )
}
