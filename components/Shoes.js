import Image from "next/image";
import Link from 'next/link';

  
  
  export default function ShoesCollection ({ shoes }) {
    return (
        <section className="shoes-area">
            <div className="container">
                <div className="shoes-heading">
                </div>
                <div className="shoes-main">
                    <div className="row">
                        { shoes.data.map(s => (
                            <div className="col-md-4 col-sm-6">
                                <div className="shoes-item">
                                   <Image
                                    src={s.product_images[0].image_url}
                                    height={600}
                                    width={500}
                                   />
                                    <div className="shoe-cnt seller-cnt">
                                        <Link href={`/products/${s.slug}`}>{s.name}</Link>
                                        <h2>${s.base_price}</h2>
                                    </div>
                                </div>
                            </div>
                        ))

                        }
                    </div>
                    {/* <div className="shoes-btn">
                        <a href="#">View all products</a>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

