// @ts-check

export const BreedsSelect = ({breeds, selectedBreed, handleOnChange}) => {
  console.log(breeds)
  return (
    <>
      <select name="breed" id="breed" value={selectedBreed} onChange={handleOnChange}>
        {
          breeds.map((breed) => {
            return <option value={breed} key={breed}>{breed}</option>
          })
        }
      </select>
    </>
  )
}

export default BreedsSelect
