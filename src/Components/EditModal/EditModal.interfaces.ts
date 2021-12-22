import { CardType } from '../../utils/Shared.interfaces'
import React, { SetStateAction } from 'react'

export interface PropsType {
  setShowEditModal: React.Dispatch<SetStateAction<boolean>>
  activeCard: CardType | null
  setActiveCard: React.Dispatch<SetStateAction<CardType | null>>
  limit: number
  filterTerm: string
}
