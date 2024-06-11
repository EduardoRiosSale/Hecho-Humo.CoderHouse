import insta from '../img/insta.png'

const Insta = () => {
    return (
        <div style={{display: "flex", objectFit: "cover"}}>
            <img className='img' src={insta} style={{width: "30px", height: "30px", margin: "10px", borderRadius: "50px"}} />
        </div>
)
}

export default Insta;