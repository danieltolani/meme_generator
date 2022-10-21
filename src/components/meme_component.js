import {useState, useEffect} from 'react'



export default function MemeGenerator(){

    const [memesArray, setMemesArray] = useState([])

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setMemesArray(data.data.memes))
        // return () => {
            
        // };
    }, []);
   
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const [memeImage, setMemeImage] = useState("")

    function handleClick(){
        setMemeImage(prevMemeImage => memesArray[randomNumber].url)
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