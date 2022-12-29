import React, {useState , createRef} from 'react'

const images = ['https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80', 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80']




function DyCarousel() {
    const [currentImage , setCurrentImage] = useState(0);
    // reduce image array
    const refs = images.reduce((acc,val,i) => {
        acc[i] = createRef ();
        return acc
    }, {})

    const scrollToImage = i => {
        setCurrentImage(i)
        refs[i].current.scrollIntoView({
            behavior: 'smooth',
            block:'nearest',
            inline:'start',
        });
    };

    const totalImage = images.length;

    const nextImage = () => {
        if (currentImage >= totalImage-1) {
            scrollToImage(0);
        } else {
            scrollToImage(currentImage + 1)
        }
    }

    const previousImage = () => {
        if (currentImage === 0) {
            scrollToImage(totalImage - 1);
        } else {
            scrollToImage(currentImage - 1)
        }
    }


    const arrowStyle =
    'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';
 
    const sliderControl = isLeft => (
        <button
            type='button'
            onClick={isLeft ? previousImage : nextImage}
            className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
            style={{top: "40%"}}
        >
            <span role='img' aria-label={`Arrow ${isLeft ? 'left' :'right'}`}>
                {isLeft ? '◀' : '▶'}
            </span>
        </button>
    )

  return (
    <>
    <div className='mx-auto px-2 my-4 flex flex-col w-full items-center justify-center'>
        <div className=' flex justify-center '>
            <h2 className='absolute items-center bg-red-200'>TITLE</h2>
            <div className="p-0 pt-6 lg:p-8  w-1/2 border">
                <div className="relative w-full">
                    <div className="carousel">
                    {sliderControl(true)}
                    {images.map((img, i) => (
                        <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
                        <img src={img} className="w-full object-cover" />
                        </div>
                    ))}
                    {sliderControl()}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DyCarousel