import "./About.css"
import logo from "./assets/logo.jpg"
import { useState } from 'react';

function About() {
    const image1 = "https://masterpiecer-images.s3.yandex.net/34e974e177bb11ee9ad5ceda526c50ab:upscaled"
    const image2 = "https://i.pinimg.com/236x/dd/f8/78/ddf87827dd19e5a841f1994688f84ce8.jpg"
    const image3 = "https://img.freepik.com/free-photo/view-of-3d-adorable-cat-with-fluffy-clouds_23-2151113419.jpg"
    const slides = [
        {
            img: image1,
            text: "Текст слайда 1"
        },
        {
            img: image2,
            text: "Текст слайда 2"
        },
        {
            img: image3,
            text: "Текст слайда 3"
        }
    ]

    const [slide, setSlide] = useState(0);

    function nextSlide() {
        if (slide === slides.length - 1) {
            setSlide(0);
        } else {
            setSlide(slide + 1);
        }
    }

    function previousSlide() {
        if (slide === 0) {
            setSlide(slides.length - 1);
        } else {
            setSlide(slide - 1);
        }
    }

    return (
        <div className="about" id="about">
            <h1>О нас</h1>

            <div className="slider">
                <button className="button previous" onClick={previousSlide}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12L3.29289 11.2929L2.58579 12L3.29289 12.7071L4 12ZM19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11V13ZM9.29289 5.29289L3.29289 11.2929L4.70711 12.7071L10.7071 6.70711L9.29289 5.29289ZM3.29289 12.7071L9.29289 18.7071L10.7071 17.2929L4.70711 11.2929L3.29289 12.7071ZM4 13H19V11H4V13Z" fill="#33363F" />
                    </svg>

                </button>
                <button className="button next" onClick={nextSlide}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 12L20.7071 11.2929L21.4142 12L20.7071 12.7071L20 12ZM5 13C4.44771 13 4 12.5523 4 12C4 11.4477 4.44771 11 5 11V13ZM14.7071 5.29289L20.7071 11.2929L19.2929 12.7071L13.2929 6.70711L14.7071 5.29289ZM20.7071 12.7071L14.7071 18.7071L13.2929 17.2929L19.2929 11.2929L20.7071 12.7071ZM20 13H5V11H20V13Z" fill="#33363F" />
                    </svg>

                </button>

                <img src={slides[slide].img} alt="" className="slideImage"/>

                <p className="slideText">{slides[slide].text}</p>
            </div>
        </div>
    )
}

export default About