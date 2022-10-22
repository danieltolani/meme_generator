import {useState, useEffect} from 'react'



export default function MemeGenerator(){

    const [memesArray, setMemesArray] = useState([])

    const [inputData, setInputData] = useState({
        topText: "",
        bottomText: "",
    })

    const handleInputChange = (e) => {

        const {name, value} = e.target
        setInputData(prevInputData => ({
            ...prevInputData,
            [name]:value
        }))
    }

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setMemesArray(data.data.memes))
        // return () => {
            
        // };
    }, []);
   
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const [memeImage, setMemeImage] = useState("https://i.imgflip.com/1g8my4.jpg")

    function handleClick(){
        setMemeImage(prevMemeImage => memesArray[randomNumber].url)
    }

    return(
        <section className="form-section">
                <div className="form">

                    <div className="input-container">
                        <input
                         className="input"
                         id="input-1"
                         placeholder="Input text 1"
                         onChange={handleInputChange}
                         name="topText"
                         value={inputData.topText}
                        /> 

                        <input
                         className="input"
                         id="input-2"
                         placeholder="Input text 2"
                         onChange={handleInputChange}
                         name="bottomText"
                         value={inputData.bottomText}
                        /> 
                    </div>
        
                <button onClick={handleClick}>Get a new meme image  🖼</button>
            </div>

            <div className='meme-container'>
                <h1 className='meme-text top'> {inputData.topText} </h1>
                <h1 className='meme-text bottom'> {inputData.bottomText}</h1>
                <img className='meme-image' src={memeImage} />
            </div>
        </section>
    )
    
}