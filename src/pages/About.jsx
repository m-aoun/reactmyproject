import React from 'react'

const About = () => {
  return (
    <>
    <header className="sub-header">
       <h1>About us</h1>
       </header> 

    <section className="about-us" data-aos="flip-left">

        <div className="row" data-aos="fade-left" >
            <div className="about-col" id="explorenow">
                <h1>WE ARE THE WORLD LARGEST <br /> UNIVERSITY</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo sunt qui placeat magni quos beatae
                    voluptatem! Adipisci iusto unde quia laboriosam modi itaque, nobis consectetur quod, minima
                    voluptate at voluptatem. Iste esse optio tenetur quidem asperiores earum! Officiis inventore
                    necessitatibus odio nihil, quia ullam nostrum dolorem sunt at voluptatem in velit fugit? Dicta
                    repudiandae repellendus amet esse iusto earum necessitatibus.</p>
                <a href="/contact" className="hero-butn red-butn">EXPLORE KNOW</a>
            </div>

            <div className="about-col">
                <img src="/src/assets/img/about.jpg" alt="error" />
            </div>

        </div>

    </section>
    </>
  )
}

export default About