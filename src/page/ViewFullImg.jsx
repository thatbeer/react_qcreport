

const ViewFullImg = (props) => {
    const {id , img  } = props
  return (
    <div className= "container mx-auto pt-[60px] flex justify-center">
        <img className='justify-center max-w-3xl'
            src='https://www.kraftwerk.at/app/uploads/fly-images/962/reference-img-worlds-of-adventure-park-4-1920x9999.jpg' 
            alt='img1'
        />
    </div>
  )
}
export default ViewFullImg