import React, { SetStateAction } from 'react'

export interface PropsType {
  searchTerm: string
  setSearchTerm: React.Dispatch<SetStateAction<string>>
  filterTerm: string
}
