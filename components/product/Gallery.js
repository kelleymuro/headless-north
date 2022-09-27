import Image from "next/image"

export default function Gallery({ images }) {
    return (
        <div className="nc-gallery-wrapper">
            <div className="nc-product-gallery" >
                <Image 
                width={50}
                height={50}
                className="nc-featured-image" src={images[0].image_url} alt="" />
                
                {/* { images.map(i => (
                    <img className="nc-featured-image" src={i.image_url} alt="" />
                 )) } */}
            </div>
        </div>
    )
}