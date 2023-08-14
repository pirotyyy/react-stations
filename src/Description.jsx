// @ts-check

import { useState } from "react"
import DogImage from "./DogImage"

export const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_68.jpg")

  const handleOnClick = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await response.json()
    setDogUrl(data.message)
  }

  return (
    <>
      <p>犬の画像を表示するサイトです</p>
      <DogImage imageUrl={dogUrl}/>
      <button onClick={handleOnClick}>更新</button>
    </>
  )
}

export default Description
