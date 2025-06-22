import { ContentComponent } from '~/components/common'
import { mockDataInnerPages } from '~/utils/mockData/MockData'

const InnerPages = () => {
  return (
    <div>
      <ContentComponent
        headerContent='9 Templates'
        titlePage='Inner Pages'
        contentPage='We also created pre-made inner page layouts to make your life easier and allows you to put your site online as quickly as possible.'
        data={mockDataInnerPages}
      />
    </div>
  )
}

export default InnerPages
