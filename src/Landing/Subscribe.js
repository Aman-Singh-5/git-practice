const Subscribe = () =>{
    return(
        <>
            <section className="subscribe-area pt-60 pb-70">
                <div className="container" style={{textAlign: "center"}}>
                    <div className="row">
                        <div className="subscribe-caption">
                            <h2 style={{marginBottom: "4px"}}>SUBSCRIBE OUR NEWSLETTER</h2>
                            <p>
                            I must explain to you how all this mistaken idea
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-9 email_text_area">
                                <form style={{height: "100%"}}>
                                    <input type="email" placeholder="Enter your Email" style={{width: "100%",height: "100%",border: "1px solid #E1E1E1", paddingLeft:"26px"}}></input>
                                </form>
                            </div>
                            <div className="col-lg-3 subscribe_div">
                                <button className="default-btn" style={{border: "none"}}>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Subscribe;