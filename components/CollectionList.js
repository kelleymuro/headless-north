import c1 from '../images/c1.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import c4 from '../images/c4.png'



export default function CollectionList() {
    return (
        <section class="collection-area">
        <div class="container">
            <div class="collection-upper">
                <h2>The Air Max Winter 2022 Collection </h2>
                <p>This spirit of progress is celebrated in the respective design of the three key silhouettes of the Air Max winter 2022 collection: the Air Max 2090 EOI, the Air Max Viva and the VaporMax Evo.</p>
                <a href="#">Learn more</a>
            </div>
            <div class="collection-main">
                <div class="collection-heading">
                    <h2>New Collections</h2>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-3">
                        <div class="collection-item">
                            <img src={c1.src} alt=""/>
                            <div class="collec-cnt">
                                <h4>Optimal Support Collection</h4>
                                <p>While you can run in a variety of shoes, Nike designs specialized shoes to give you optimal support.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="collection-item">
                            <img src={c2.src} alt=""/>
                            <div class="collec-cnt">
                                <h4>Neutral Run Collection</h4>
                                <p>Browse through Nike neutral running shoes to find the right pair for you.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="collection-item">
                            <img src={c3.src} alt=""/>
                            <div class="collec-cnt">
                                <h4>New Arrivals</h4>
                                <p>Browse through new arrivals to find the right pair for you.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="collection-item">
                            <img src={c4.src} alt=""/>
                            <div class="collec-cnt">
                                <h4>White Collection</h4>
                                <p>Look for a white mesh upper with a sock-like construction for ultimate flexibility and breathability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}