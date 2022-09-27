import miss1 from '../images/miss-1.png'
import miss2 from '../images/miss-2.png'

export default function FeaturedCollection() {
    return (
        <section className="miss-area">
            <div className="container">
                <div className="miss-heading">
                    <h2>Don’t miss</h2>
                </div>
                <div className="miss-main">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="miss-left">
                                <img src={miss1.src} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="miss-right">
                                <img src={miss2.src} alt=""/>
                                <div className="miss-cnt">
                                    <h2>The Air Max Winter <br/> 2022 Collection <img src="images/arrow.png" alt=""/></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}