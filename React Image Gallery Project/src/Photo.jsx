export default function Photo(props) {
  return (
    <img className='photo' src={props.url} alt={props.alt}/>
  )
  
}