import meet from '../images/meet.png'

export default function NewCollection() {
    return (
        <section class="meet-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="meet-left">
                            <img src={meet.src} alt=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="meet-right">
                            <h2>Meet our new Collection</h2>
                            <p>Now more than ever, we’re prioritising our customers over everything else. We’ve listened. Our new Fall/Winter Collection features improved sizing and fit, safety features and innovative technologies. Ultimately, our new season range is designed to give you what you need, so you can focus on the fun part of travel.</p>
                        </div>
                    </div>
                </div>
            </div>
         </section>
    )
}