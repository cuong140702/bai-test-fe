export interface IReleaseItem {
  id: string | number
  title: string
  image: string
  link: string
}

export interface IContentProps {
  headerContent?: string
  titlePage?: string
  contentPage?: string
  data: IReleaseItem[]
}
