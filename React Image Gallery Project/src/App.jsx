import './App.css'
import api from './api'
import Photo from './Photo'
import {useState} from "react"

export default function App() {
  const [photos, setPhotos] = useState(api)

function handleChange(event) {
  const filteredPhotos = []
  const userInput = event.target.value;

  for (const photo of api) {
    if(photo.category.includes(userInput)) {
      filteredPhotos.push(photo)
    }
  }
  
  setPhotos(filteredPhotos)
}
  
  return (
    <div className='container'>
      <h1 className='text'>Image Gallery</h1>

      <input 
        className='input' 
        placeholder='Enter a category'
        onChange={handleChange}
        />

      <div className='photos-container'>
        {photos.map( (data, index) => (
          <Photo key={index} url={data.url} alt={data.alt} />
        ) )}
      </div>
    </div>
  )
}
