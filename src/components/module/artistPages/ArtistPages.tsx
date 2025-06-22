import { DiscographyReleasePages } from '~/components/common'
import { mockDataArtistListing, mockDataArtistSingle } from '~/utils/mockData/MockData'

const ArtistPages = () => {
  return (
    <DiscographyReleasePages
      data={mockDataArtistSingle}
      headerTitle='Artist Pages'
      pageTitle='Simple or Custom Layouts'
      contentTitle='Herion can be used for your record label website. You can create an unlimited number of pages for each artist and choose between simple default layouts, automatically generated from the release, videos and events artist category, or create a custom page. It’s all up-to-you!'
      tab1Label='Artist Single Pages'
      tab2Label='Artist Listing'
      tab2Data={mockDataArtistListing}
    />
  )
}

export default ArtistPages
