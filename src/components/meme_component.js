import imageData from '../memesData'
import {useState} from 'react'



export default function MemeGenerator(){

    const imageArray = imageData.data.memes
    const randomNumber = Math.floor(Math.random() * imageArray.length)
    const [memeImage, setMemeImage] = useState("")

    function handleClick(){
        setMemeImage(prevMemeImage => imageArray[randomNumber].url)
    }
    return(
        <section className="form-section">
                <div className="form">
                    <div className="input-container">
                        <input className="input" id="input-1" placeholder="Input text" /> 
                        <input className="input" id="input-2" placeholder="Input text 2" /> 
                    </div>
        
                <button onClick={handleClick}>Get a new meme image  🖼</button>
            </div>

            <img className='meme-image' src={memeImage} />
        </section>
    )
    
}