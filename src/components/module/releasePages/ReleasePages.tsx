import { ContentComponent } from '~/components/common'
import { mockDaReleaseListing } from '~/utils/mockData/MockData'

const ReleasePages = () => {
  return (
    <div>
      <ContentComponent headerContent='3 Release Pages' titlePage='RELEASE PAGES' data={mockDaReleaseListing} />
    </div>
  )
}

export default ReleasePages
