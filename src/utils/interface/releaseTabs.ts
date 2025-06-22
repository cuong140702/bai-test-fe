import { ActiveEnum } from '~/utils/enum/common'

export interface ITabSwitcher {
  tab1Label: string
  tab2Label: string
  onTabChange: (tab: ActiveEnum) => void
}
