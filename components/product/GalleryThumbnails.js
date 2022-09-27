import Image from "next/image"

export default function GalleryThumbnails({ images }) {
    return (
            <div className="nc-product-thumbnails" >
                { images.map(i => (
                   <div key={i.image_url} className="nc-product-image-container">
                   <Image 
                    height={500}
                    width={500}
                    className="nc-product-thumbnail" src={i.image_url} alt=""/>
               </div>
                ))
                
                }
            
            </div>
    )
}
