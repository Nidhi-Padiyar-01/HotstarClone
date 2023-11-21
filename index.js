let movies=[
    {
        name:"falcon and the winter soldier",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum recusandae voluptate. Veritatis, inventore. Debitis, sed! Dolore eaque magnam quod numquam ab amet, aperiam delectus repellat harum aliquid natus. Facilis.",
        image:"images/images1/slider 2.png"
    },
    {
        name:"loki",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum recusandae voluptate. Veritatis, inventore. Debitis, sed! Dolore eaque magnam quod numquam ab amet, aperiam delectus repellat harum aliquid natus. Facilis.",
        image:"images/images1/slider 1.png"
    },
    {
        name:"wanda vision",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum recusandae voluptate. Veritatis, inventore. Debitis, sed! Dolore eaque magnam quod numquam ab amet, aperiam delectus repellat harum aliquid natus. Facilis.",
        image:"images/images1/slider 3.png"
    },
    {
        name:"raya and the last dragon",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum recusandae voluptate. Veritatis, inventore. Debitis, sed! Dolore eaque magnam quod numquam ab amet, aperiam delectus repellat harum aliquid natus. Facilis.",
        image:"images/images1/slider 4.png"
    },
    {
        name:"luca",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum recusandae voluptate. Veritatis, inventore. Debitis, sed! Dolore eaque magnam quod numquam ab amet, aperiam delectus repellat harum aliquid natus. Facilis.",
        image:"images/images1/slider 5.png"
    }
];
const carousel = document.querySelector('.carousel');//query sel=to use the method of html to javascript
let sliders=[];

let slideIndex=0;//to track the current slide//

const createSlide=()=>{
    if(slideIndex >= movies.length){
        slideIndex=0;
    }
    //create DOM Elements
    let slide=document.createElement('div');
    let imgElement=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');

    //attaching all the elemnts
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);


    //setting up images
    imgElement.src=movies[slideIndex].image;
    slideIndex++

    //setting up the elemnts
    slide.className="slider";
    content.className="slide-content";
    h1.className="movie-title";
    p.className="movie-des";

    sliders.push(slide);

    if(sliders.length)
    {
        sliders[0].style.marginLeft='calc(-${100 *(sliders.length-2)}%-${30*(sliders.length-2)}px)';
    }
}
for(let i=0;i<3;i++){
    createSlide();
}

setInterval(()=>{
createSlide();
},3000);