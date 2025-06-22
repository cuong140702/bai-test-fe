import React from 'react'
import { DiscographyReleasePages } from '~/components/common'
import { mockDaReleaseListing, mockDataDiscography } from '~/utils/mockData/MockData'

const Discography = () => {
  return (
    <div>
      <DiscographyReleasePages
        data={mockDataDiscography}
        headerTitle='Discography'
        pageTitle='Release Pages'
        contentTitle='Single release pages don’t have to be boring and all the same! You can use a different layout for each release, and use the page builder template system if you want all release pages with the same custom layout.'
        tab1Label='Release Single Pages'
        tab2Label='Release Listing'
        tab2Data={mockDaReleaseListing}
      />
    </div>
  )
}

export default Discography
