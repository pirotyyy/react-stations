// @ts-check

import { useEffect, useState } from "react"
import BreedsSelect from "./BreedsSelect"

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([""])
  const [selectedBreed, setSelectedBreed] = useState("")
  const [images, setImages] = useState([""])

  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/list/all")
      const data = await response.json()
      setBreeds(Object.keys(data.message))
    }
    fetchBreeds()
  }, [])

  const handleOnChange = (e) => {
    setSelectedBreed(e.target.value)
  }
  
  const handleOnClick = async () => {
    const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`)
    const data = await response.json()
    setImages(data.message)
  }

  return (
    <>
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} handleOnChange={handleOnChange}/>
      <button onClick={handleOnClick}>表示</button>
      {
        images.map((image) => {
          return <img src={image} alt="dog" key={image} />
        })
      }
    </>
  )
}

export default DogListContainer
