import { IArtistSinglePageItem } from './commom'

export interface IDiscographyProps {
  data: IArtistSinglePageItem[]
  headerTitle: string
  pageTitle: string
  contentTitle: string
  tab1Label: string
  tab2Label: string
  tab2Data: IArtistSinglePageItem[]
}
