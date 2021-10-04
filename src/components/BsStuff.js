
// source: https://getbootstrap.com/docs/4.0/components/carousel/ 

const BsStuff = () => {


    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="https://d3nn873nee648n.cloudfront.net/900x600/9168/20-SM239948.jpg" alt="First slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://d3nn873nee648n.cloudfront.net/900x600/17375/220-SM769154.jpg" alt="Second slide" />
                </div>
                <div class="carousel-item">
                    <img src="https://d3nn873nee648n.cloudfront.net/900x600/19123/220-SM899552.jpg" class="d-block w-100" alt="Third slide" />
                </div>
                <div class="carousel-item">
                    <img src="https://d3nn873nee648n.cloudfront.net/900x600/17080/220-HQ744381.jpg" class="d-block w-100" alt="Third slide" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    );
}

export default BsStuff;