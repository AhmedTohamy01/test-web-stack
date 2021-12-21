import { ReactNode } from 'react'

export interface PropsType {
  children: ReactNode
  onClick: () => void
  disabled?: boolean
}
