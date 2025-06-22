import { ContentComponent } from '~/components/common'
import { mockDataHomePages } from '~/utils/mockData/MockData'

const HomePages = () => {
  return (
    <div>
      <ContentComponent headerContent='15 Templates' titlePage='HOMEPAGES' data={mockDataHomePages} />
    </div>
  )
}

export default HomePages
