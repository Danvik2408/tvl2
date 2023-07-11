let content =[
    {
        name:`Rome, Italy`,
        data:`12–24 Jun 2020`,
        price:`$349`,
        img:`Bitmap (3).svg`,
        specialClass:'topOffer'
    },
    {
        name:`New York City, USA`,
        data:`12–24 Jun 2020`,
        price:`$200`,
        img:`Bitmap (4).svg`,
        specialClass:'topOffer'
    },
    {
        name:`Barcelona, Spain`,
        data:`12–24 Jun 2020`,
        price:`$95`,
        img:`Bitmap (5).svg`,
        specialClass:'topOffer'
    },
    {
        name:`Paris, France`,
        data:`12–24 Jun 2020`,
        price:`$1200`,
        img:`Bitmap (6).svg`,
        specialClass:'bestOffer'
    },
    {
        name:`San Francisco, USA`,
        data:`12–24 Jun 2020`,
        price:`$480`,
        img:`Bitmap (7).svg`,
    },
    {
        name:`Amesbury, UK`,
        data:`12–24 Jun 2020`,
        price:`$569`,
        img:`Bitmap (8).svg`,
    },
    {
        name:`Versailles, France`,
        data:`12–24 Jun 2020`,
        price:`$100`,
        img:`Bitmap (9).svg`,
    },
    {
        name:`Venice, Italy`,
        data:`12–24 Jun 2020`,
        price:`$$99`,
        img:`Bitmap (10).svg`,
    }
]

for(let el of content){
    $('.placeCountryContainer').append(`<div class="placeOffer ${el.specialClass}">
            <div class='placeInfo'>
            <h2>${el.name}</h2>
            <p>${el.data}</p>
            </div>
            <div class='price'>${el.price}</div>
            <img src="./img/${el.img}" alt="">
    </div>`)
}


$('.sliderPart2').mouseenter(function(){
    $('.sliderPart2').css('height','465px')
    $('.secondSlide').css('height','400px')
})
$('.sliderPart2').mouseleave(function(){
    $('.sliderPart2').css('height','350px')
    $('.secondSlide').css('height','304px')
})

$('.sliderPart3').mouseenter(function(){
    $('.sliderPart3').css('height','430px')
    $('.thirdSlide').css('height','370px')
})
$('.sliderPart3').mouseleave(function(){
    $('.sliderPart3').css('height','350px')
    $('.thirdSlide').css('height','304px')
})


$('.sliderPart4').mouseenter(function(){
    $('.sliderPart4').css('height','525px')
    $('.fourthSlide').css('height','465px')
})
$('.sliderPart4').mouseleave(function(){
    $('.sliderPart4').css('height','350px')
    $('.fourthSlide').css('height','304px')
})