import { useEffect, useState } from 'react'

export const useRandomAvatar = () => {
  const [image, setImage] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://dog.ceo/api/breeds/image/random'
      const response = await fetch(url)
      const data = await response.json()
      setImage(data.message)
    }
    fetchData()
  }, [])

  return image
}
