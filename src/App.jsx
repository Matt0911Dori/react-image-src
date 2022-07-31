import { useState } from 'react'
import axios from 'axios'
import Title from './components/Title'
import Form from './components/Form'
import Results from './components/Results'
import './App.css'
 
function App() {
  const [word, setWord] = useState('')
  const [photo, setPhoto] = useState([])
 
  const getPhotoData = (e) => {
    e.preventDefault();
    axios
    .get(`https://api.unsplash.com/search/photos?query=${word}&client_id=QfTQZ_4rx1izZ1LYlXJciLu_ap5q-IFTu3KdehTDUHQ`) 
    .then(res => {
      setPhoto(res.data.results)
    })
  }
 
  return (
    <div className="App">
      <Title />
      <Form setWord={setWord} getPhotoData={getPhotoData} />
      <Results photo={photo} />
    </div>
  )
}
 
export default App