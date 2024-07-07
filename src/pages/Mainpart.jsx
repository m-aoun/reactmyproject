import React from 'react';

const Mainpart = () => {
  return (
    <main>

      <header className="header">
          <div className="text-box">
          <h1>World's Biggest Institute</h1>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          tempore possimus <br /> temporibus corporis ipsa eligendi nihil .
          </p>
          <a href="/about#explorenow" className="hero-butn">
          Visit us to know more
          </a>
         </div>
      </header>

      {/* FIRST SECTION (COURSE) */}
      <section className="course" id="course" data-aos="flip-left">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="course-col">
            <h3>Intermediate</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt eius ipsa consectetur, sunt
              distinctio ad natus inventore sapiente at laborum debitis soluta, unde sequi modi deleniti!</p>
          </div>
          <div className="course-col">
            <h3>Degree</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt eius ipsa consectetur, sunt
              distinctio ad natus inventore sapiente at laborum debitis soluta, unde sequi modi deleniti!</p>
          </div>
          <div className="course-col">
            <h3>Post Graduation</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt eius ipsa consectetur, sunt
              distinctio ad natus inventore sapiente at laborum debitis soluta, unde sequi modi deleniti!</p>
          </div>
        </div>
      </section>

      {/* SECOND SECTION (ABOUT CAMPUS) */}
      <section className="campus" data-aos="flip-left">
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="campus-col">
            <img src="/src/assets/img/london.png" alt="error" />
            <div className="layer">
              <h3>London</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src="/src/assets/img/newyork.png" alt="error" />
            <div className="layer">
              <h3>New York</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src="/src/assets/img/washington.png" alt="error" />
            <div className="layer">
              <h3>Washington</h3>
            </div>
          </div>
        </div>
      </section>

      {/* THIRD SECTION (ABOUT FACILITIES) */}
      <section className="facilities" data-aos="flip-left">
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="facilities-col">
            <img src="/src/assets/img/library.png" alt="error" />
            <h3>World Class Library</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nemo necessitatibus? Nemo
              necessitatibus?</p>
          </div>
          <div className="facilities-col">
            <img src="/src/assets/img/basketball.png" alt="error" />
            <h3>Largest Play Ground</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nemo necessitatibus? Nemo
              necessitatibus?</p>
          </div>
          <div className="facilities-col">
            <img src="/src/assets/img/cafeteria.png" alt="error" />
            <h3>Tasty And Healthy Food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nemo necessitatibus? Nemo
              necessitatibus?</p>
          </div>
        </div>
      </section>

      {/* FOURTH SECTION (ABOUT STUDENT REVIEWS) */}
      <section className="reviews" data-aos="flip-left">
        <h1>WHAT OUR STUDENT SAYS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="reviews-col">
            <img src="/src/assets/img/user1.jpg" alt="error" />
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nemo necessitatibus? Nemo
                necessitatibus?</p>
              <h3 className="rch">MUHAMMAD HASSAN</h3>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
          </div>
          <div className="reviews-col">
            <img src="/src/assets/img/user2.jpg" alt="error" />
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nemo necessitatibus? Nemo
                necessitatibus?</p>
              <h3 className="rch">MUHAMMAD UMAR</h3>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-half-o" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="cta" data-aos="flip-right">
        <h1>Enroll for Our Various Online Course Anywhere From The World</h1>
        <a href="/contact" className="hero-butn" style={{ borderRadius: '14px' }}>CONTACT US</a>
      </section>
    </main>
  );
}

export default Mainpart;
