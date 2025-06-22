import { JSX, useEffect, useRef } from 'react'
import video from '~/assets/video/videobg.mp4'
import spotifyIcon from '~/assets/img/spotify.png'
import youtubeIcon from '~/assets/img/youtube.png'
import instagramIcon from '~/assets/img/instagram.png'
import bandsintownIcon from '~/assets/img/bandsintown.png'
import twitterIcon from '~/assets/img/twitter.png'
import facebookIcon from '~/assets/img/facebook.png'
import soundcloudIcon from '~/assets/img/mailchip.png'

interface SocialItem {
  icon: JSX.Element
  link: string
  name: string
}

const socialItems: SocialItem[] = [
  {
    icon: <img src={spotifyIcon} alt='Spotify' className='w-12 h-12' />,
    link: 'https://www.spotify.com',
    name: 'Spotify'
  },
  {
    icon: <img src={youtubeIcon} alt='YouTube' className='w-12 h-12' />,
    link: 'https://www.youtube.com',
    name: 'YouTube'
  },
  {
    icon: <img src={instagramIcon} alt='Instagram' className='w-12 h-12' />,
    link: 'https://www.instagram.com',
    name: 'Instagram'
  },
  {
    icon: <img src={bandsintownIcon} alt='Bandsintown' className='w-12 h-12' />,
    link: 'https://www.bandsintown.com',
    name: 'Bandsintown'
  },
  {
    icon: <img src={twitterIcon} alt='Twitter' className='w-12 h-12' />,
    link: 'https://www.twitter.com',
    name: 'Twitter'
  },
  {
    icon: <img src={facebookIcon} alt='Facebook' className='w-12 h-12' />,
    link: 'https://www.facebook.com',
    name: 'Facebook'
  },
  {
    icon: <img src={soundcloudIcon} alt='SoundCloud' className='w-12 h-12' />,
    link: 'https://www.soundcloud.com',
    name: 'SoundCloud'
  }
]

const Social = () => {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')

          const icons = entry.target.querySelectorAll('.social-icon') as NodeListOf<HTMLAnchorElement>
          icons.forEach((icon, index) => {
            setTimeout(() => {
              icon.style.opacity = '1'
              icon.style.transform = 'translateY(0)'
            }, index * 100)
          })
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section className='py-24 text-white relative mt-20' ref={sectionRef}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
        src={video}
      >
        <source type='video/mp4' />
      </video>
      <div className='absolute top-0 left-0 w-full h-full bg-black/50 z-10'></div>
      <div className='container mx-auto px-4 relative z-20'>
        <h2 className='text-[95px] text-center mb-4' style={{ fontFamily: 'MyFont', color: '#50514f' }}>
          Social Integration
        </h2>
        <h3
          className='text-2xl font-semibold text-center tracking-widest mb-12 text-gray-300'
          style={{ fontFamily: 'MyFont3' }}
        >
          SOCIAL NETWORK & MUSIC PLATFORM ORIENTED
        </h3>

        <p className='text-center text-lg max-w-3xl mx-auto mb-16 text-gray-300'>
          Embed your music and social feeds seamlessly. Display your media and content directly from Spotify, YouTube,
          Instagram, Bandsintown, Twitter, Facebook, and more...
        </p>

        <div className='flex flex-wrap justify-center gap-12 md:gap-16 lg:gap-20'>
          {socialItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon transition-all duration-500 opacity-0 transform translate-y-8 flex flex-col items-center'
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {item.icon}
              <span className='mt-2 text-sm text-gray-300'>{item.name}</span>
            </a>
          ))}
        </div>
        <div className='flex justify-center mt-12'>
          <h3 className='text-lg font-semibold text-gray-300'>and more...</h3>
        </div>
      </div>
    </section>
  )
}

export default Social
