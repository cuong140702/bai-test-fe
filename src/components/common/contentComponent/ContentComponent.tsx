import { motion } from 'framer-motion'
import { IContentProps } from '~/utils/interface/content'
import { containerVariants, itemVariants } from '~/utils/constants/common'

const ContentComponent = (props: IContentProps) => {
  const { headerContent, titlePage, contentPage, data } = props

  return (
    <div className='w-full min-h-screen bg-white flex flex-col items-center py-8'>
      <h2 className='text-[95px] text-gray-400 mb-2' style={{ fontFamily: 'MyFont' }}>
        {headerContent}
      </h2>
      <h3 className='text-3xl font-bold tracking-widest mb-5' style={{ fontFamily: 'MyFont3' }}>
        {titlePage}
      </h3>
      <div className='flex justify-center text-center'>
        <p className='mb-15 max-w-3xl text-gray-500 text-base' style={{ fontFamily: 'MyFont2' }}>
          {contentPage}
        </p>
      </div>

      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'
        variants={containerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
      >
        {data.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className='cursor-pointer transition-transform hover:-translate-y-2 flex flex-col items-center'
            onClick={() => window.open(item.link, '_blank')}
          >
            <div className='bg-white shadow-lg' style={{ width: '438px', height: '282px', overflow: 'hidden' }}>
              <img src={item.image} alt={item.title} className='object-cover w-full h-full' loading='lazy' />
            </div>
            <div className='text-xl font-semibold mt-4 text-gray-800 text-center' style={{ fontFamily: 'MyFont2' }}>
              {item.title}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default ContentComponent
