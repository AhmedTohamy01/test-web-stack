import React, { SetStateAction } from 'react'
import { CardType } from '../../utils/Shared.interfaces'

export interface PropsType {
  setShowDeleteModal: React.Dispatch<SetStateAction<boolean>>
  activeCard: CardType | null
  setActiveCard: React.Dispatch<SetStateAction<CardType | null>>
  limit: number
  filterTerm: string
}
