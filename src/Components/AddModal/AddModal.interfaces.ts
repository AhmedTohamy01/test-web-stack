import React, { SetStateAction } from 'react'

export interface PropsType {
  setShowAddModal: React.Dispatch<SetStateAction<boolean>>
  limit: number
  filterTerm: string
}
