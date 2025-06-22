import { useState } from 'react'
import { ActiveEnum } from '~/utils/enum/common'
import { ITabSwitcher } from '~/utils/interface/releaseTabs'

const ReleaseTabs = (props: ITabSwitcher) => {
  const { tab1Label, tab2Label, onTabChange } = props

  const [activeTab, setActiveTab] = useState<string>(ActiveEnum.TAB_ONE)

  const handleTabChange = (tab: ActiveEnum) => {
    setActiveTab(tab)
    if (onTabChange) {
      onTabChange(tab)
    }
  }

  return (
    <div className='flex justify-center gap-8 mb-12'>
      <button
        className={`font-semibold pb-1 ${activeTab === ActiveEnum.TAB_ONE ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-500 hover:text-gray-800'}`}
        onClick={() => handleTabChange(ActiveEnum.TAB_ONE)}
      >
        {tab1Label}
      </button>
      <button
        className={`font-semibold pb-1 ${activeTab === ActiveEnum.TAB_TWO ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-500 hover:text-gray-800'}`}
        onClick={() => handleTabChange(ActiveEnum.TAB_TWO)}
      >
        {tab2Label}
      </button>
    </div>
  )
}

export default ReleaseTabs
