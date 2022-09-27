import serv1 from '../images/serv-1.png';
import serv2 from '../images/serv-2.png';
import serv3 from '../images/serv-1.png';

export default function Services() {
    return (
        <section className="service-area">
            <div className="container">
                <div className="service-heading shoes-heading">
                    <h2>Why  Nike?</h2>
                </div>
                <div className="service-main">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-item">
                                <img src={serv1.src} alt=""/>
                                <h4>Safety</h4>
                                <p>For each product you can view the real reviews of our customers and add your own</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item">
                                <img src={serv2.src} alt=""/>
                                <h4>Guarantee</h4>
                                <p>We also endow with a 30-days money back guarantee whereby you can claim your money back.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item">
                                <img src={serv3.src} alt=""/>
                                <h4>Fast Delivery</h4>
                                <p>We guarantee fast delivery within 3-7 working days. In case of delay, we will notify you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>
    )
}