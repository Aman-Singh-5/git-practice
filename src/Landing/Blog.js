const Blog = () => {
    return(
        <>
            <div className="blog-area pt-150 pb-150">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="section-title text-center">
                    <img src={"images/section.webp"} alt="section-title"/>
                    <h2>LATEST FROM BLOG</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6">
                <div className="single-blog">
                    <div className="blog-img">
                        <a href="blog-details.html"><img src={"images/blog1.webp"} alt="blog"/></a>
                        <div className="blog-hover">
                            <a href="blog-details.html"></a>
                        </div>
                    </div>
                    <div className="blog-content">
                        <div className="blog-top">
                            <p>By Alex  /  June 20, 2022  /  4</p>
                        </div>
                        <div className="blog-bottom">
                            <h2><a href="blog-details.html">I must explain to you how all this a mistaken idea </a></h2>
                            <a href="blog-details.html">read more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="single-blog">
                    <div className="blog-img">
                        <a href="blog-details.html"><img src={"images/blog2.webp"} alt="blog"/></a>
                        <div className="blog-hover">
                            <a href="blog-details.html"></a>
                        </div>
                    </div>
                    <div className="blog-content">
                        <div className="blog-top">
                            <p>By Alex  /  June 20, 2022  /  4</p>
                        </div>
                        <div className="blog-bottom">
                            <h2><a href="blog-details.html">I must explain to you how all this a mistaken idea </a></h2>
                            <a href="#">read more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="single-blog mb-0">
                    <div className="blog-img">
                        <a href="blog-details.html"><img src={"images/blog3.webp"} alt="blog"/></a>
                        <div className="blog-hover">
                            <a href="#"></a>
                        </div>
                    </div>
                    <div className="blog-content">
                        <div className="blog-top">
                            <p>By Alex  /  June 20, 2022  /  4</p>
                        </div>
                        <div className="blog-bottom">
                            <h2><a href="#">I must explain to you how all this a mistaken idea </a></h2>
                            <a href="#">read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}
export default Blog;