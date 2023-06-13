const Course = () =>{
    return(
        <>
            <div class="courses-area pt-150 text-center">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title">
                    <img src={"images/section.webp"} alt="section-title"/>
                    <h2>COURSES WE OFFER</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="single-course">
                    <div class="course-img">
                        <a href="course-details.html"><img src={"images/course1.webp"} alt="course"/>
                        </a>
                    </div>
                    <div class="course-content">
                        <h3><a href="course-details.html">CSE ENGINEERING</a></h3>
                        <p>I must explain to you how all this a mistaken idea of denouncing great explorer of the rut the is lder of human happiness</p>
                        <a class="default-btn" href="course-details.html">read more</a>
                    </div>   
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="single-course">
                    <div class="course-img">
                        <a href="course-details.html"><img src={"images/course2.webp"} alt="course"/>
                        </a>
                    </div>
                    <div class="course-content">
                        <h3><a href="course-details.html">CSE ENGINEERING</a></h3>
                        <p>I must explain to you how all this a mistaken idea of denouncing great explorer of the rut the is lder of human happiness</p>
                        <a class="default-btn" href="course-details.html">read more</a>
                    </div>   
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="single-course mb-0">
                    <div class="course-img">
                        <a href="course-details.html"><img src={"images/course3.webp"} alt="course"/>
                        </a>
                    </div>
                    <div class="course-content">
                        <h3><a href="course-details.html">CSE ENGINEERING</a></h3>
                        <p>I must explain to you how all this a mistaken idea of denouncing great explorer of the rut the is lder of human happiness</p>
                        <a class="default-btn" href="course-details.html">read more</a>
                    </div>   
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    );
}

export default Course;