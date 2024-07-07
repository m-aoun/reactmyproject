import React from 'react';

const Blog = () => {
  return (
    <>
    <header className="sub-header">
       <h1>OUR CERTIFICATE & ONLINE PROGRAMS FOR 2021</h1>
       </header> 

        <section className="blog-content">
      <div className="row">
        <div className="blog-left" data-aos="flip-left">
          <img src="/src/assets/img/certificate.jpg" alt="error" data-aos="flip-left" />
          <h2>OUR CERTIFICATE & ONLINE PROGRAMS FOR 2021</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, fuga nemo consectetur totam reprehenderit
            temporibus itaque quis, non hic reiciendis voluptatum assumenda eligendi maxime? Sequi quasi, quod officia
            voluptatem vitae tempore delectus dolor, recusandae provident eaque excepturi sunt similique adipisci!
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, fuga nemo consectetur totam reprehenderit
            temporibus itaque quis, non hic reiciendis voluptatum assumenda eligendi maxime? Sequi quasi, quod officia
            voluptatem vitae tempore delectus dolor, recusandae provident eaque excepturi sunt similique adipisci!
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, fuga nemo consectetur totam reprehenderit
            temporibus itaque quis, non hic reiciendis voluptatum assumenda eligendi maxime? Sequi quasi, quod officia
            voluptatem vitae tempore delectus dolor, recusandae provident eaque excepturi sunt similique adipisci!
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, fuga nemo consectetur totam reprehenderit
            temporibus itaque quis, non hic reiciendis voluptatum assumenda eligendi maxime? Sequi quasi, quod officia
            voluptatem vitae tempore delectus dolor, recusandae provident eaque excepturi sunt similique adipisci!
          </p>
          <br />

          {/* COMMENTS BOX BETWEEN BLOG WRITE */}
          <div className="comment-box" data-aos="flip-right">
            <h3>Leave a comment</h3>
            <form className="comment-form">
              <input type="text" placeholder="Input your name" />
              <input type="email" placeholder="Input your Email" />
              <textarea rows="5" placeholder="your comment"></textarea>
              <button type="submit" className="hero-butn red-butn">
                Post Comment
              </button>
            </form>
          </div>
        </div>

        <div className="blog-right" data-aos="flip-right">
          <h3>Post Categories</h3>
          {/* DIVS BETWEEN BLOG WRITE */}
          <div>
            <span>Bussiness Analytics</span>
            <span>21</span>
          </div>
          <div>
            <span>Data Science</span>
            <span>28</span>
          </div>
          <div>
            <span>Machine Learning</span>
            <span>15</span>
          </div>
          <div>
            <span>Computer Science</span>
            <span>34</span>
          </div>
          <div>
            <span>AutoCode</span>
            <span>42</span>
          </div>
          <div>
            <span>Journalism</span>
            <span>22</span>
          </div>
          <div>
            <span>Commerce</span>
            <span>30</span>
          </div>
        </div>
      </div>
    </section>
   </>
  );
};

export default Blog;
