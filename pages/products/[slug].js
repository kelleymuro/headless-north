import { useState } from 'react';
import { useSnapshot } from 'valtio';
import  store  from '../../store';
import Layout from "../../components/Layout";
import Gallery from "../../components/product/Gallery";
import GalleryThumbnails from "../../components/product/GalleryThumbnails";



export async function getServerSideProps(context) {
    const slug = context.params.slug;
    // Fetch data
    const res = await fetch(`https://store.northplugins.com/wp-json/nc-data/v1/products?filter=slug:eq:${slug}&expand=product-images`);
    const data = await res.json()
  
  // Pass data to the page via props
  return { props: { data } }

  }




  export default function SingleProduct({ data }) {
    // const snap = useSnapshot(store);
    
        const [ quantity, setQuantity ] = useState(1)

        const increaseQuantity = ( q ) => {
            if(quantity >= data.data[0].quantity) {
                return 
            }
            setQuantity(q + quantity)
        }

        const decreaseQuantity = ( q ) => {
          
            setQuantity(quantity - q)
        }

     

        const addToCart = () => {
          store.cartItem.push({
            name: data.data[0].name,
            price: parseFloat(data.data[0].base_price),
            quantity: quantity
          })
        }

      return (
        <Layout title={data.data[0].name} >
                <div className="nc-container">
                    <div className="nc-gallery">
                       <GalleryThumbnails images={data.data[0].product_images} /> 
                       <Gallery images={data.data[0].product_images}/>  
                    </div>

                    <div className="nc-main">
                        <div className="nc-meta-container">
                            <p className="nc-product-title">{data.data[0].name}</p>
                            <p className="nc-product-category">{data.data[0].category}</p>
                            <div className="nc-price-container">
                                <p className="nc-product-price">${parseFloat(data.data[0].base_price) * quantity}</p>
                                <p className="nc-product-compare-price">{!data.data[0].compare_price ? null : `$ ${data.data[0].compare_price}`}</p>
                            </div>
                            <div  className="qty-counter">
                                <svg onClick={() => decreaseQuantity(1)} width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="white"/>
                                    <path d="M14 19H26V21H14V19Z" fill="black"/>
                                    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#E5EBF1"/>
                                </svg> 

                                <input  type="text" value={quantity} className="qty-input"/>

                                <svg onClick={() => increaseQuantity(1)} width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="white"/>
                                    <path d="M26 19H21V14H19V19H14L14 21H19V26H21V21H26V19Z" fill="black"/>
                                    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#E5EBF1"/>
                                </svg>
                                                                    
                            </div>              
                            <div className="btn-container">
                                <button onClick={(() => addToCart() )} className="nc-cart-btn">
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.322 7.431C22.135 7.161 21.828 7 21.5 7H7.833L6.679 4.23C6.367 3.482 5.643 3 4.833 3H2.5V5H4.833L9.577 16.385C9.732 16.757 10.096 17 10.5 17H18.5C18.917 17 19.29 16.741 19.437 16.352L22.437 8.352C22.552 8.044 22.509 7.7 22.322 7.431ZM17.807 15H11.167L8.667 9H20.057L17.807 15Z" fill="white"/>
                                        <path d="M11 21C11.8284 21 12.5 20.3284 12.5 19.5C12.5 18.6716 11.8284 18 11 18C10.1716 18 9.5 18.6716 9.5 19.5C9.5 20.3284 10.1716 21 11 21Z" fill="white"/>
                                        <path d="M18 21C18.8284 21 19.5 20.3284 19.5 19.5C19.5 18.6716 18.8284 18 18 18C17.1716 18 16.5 18.6716 16.5 19.5C16.5 20.3284 17.1716 21 18 21Z" fill="white"/>
                                    </svg>
                                    Add to cart
                                </button>
                            </div>

                            <div className="nc-description-container">
                                <h3 className="nc-description-title">Description</h3>
                                <p className="nc-product-description">{data.data[0].description}</p>
                            </div>

                        </div>
                    </div>
            </div>
        </Layout>
    )
}



