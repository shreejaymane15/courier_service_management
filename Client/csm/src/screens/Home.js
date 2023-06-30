import Carousel from "./Carousel";
import NavBar from "./NavBar";



function Home() {
    return (<>
            <NavBar/>
            <div className="row">
                <div className="column">
                    <Carousel/>
                </div>
                <div style={{position:"absolute", display:"flex", marginLeft:"55rem", marginTop:"10rem"}}>
                    <div style={{border:"solid green", padding: "2rem 4rem 2rem 1rem"}}>
                        <a style={{fontFamily:"sans-serif", fontSize:"1.75rem", color:"black", textDecoration:"none"}} href="#">
                        <img src="/Images/Package_Icon.jpg" style={{width:"5rem", height:"5rem", paddingRight:"1rem"}}/>
                            Where is My Package?
                        <img src="/Images/circle-right.svg" alt="arrow" style={{paddingLeft:"8.85rem"}}/>
                        </a>
                    </div>
                </div>
                <div style={{position:"absolute", display:"flex", marginLeft:"55rem", marginTop:"19.1rem"}}>
                    <div style={{border:"solid green", padding: "2rem 4rem 2rem 1rem"}}>
                        <a style={{fontFamily:"sans-serif", fontSize:"1.7rem", color:"black", textDecoration:"none"}} href="#">
                        <img src="/Images/Package_Icon.jpg" style={{width:"5rem", height:"5rem", paddingRight:"1rem"}}/>
                            Home Pick Up Service
                        <img src="/Images/circle-right.svg" alt="arrow" style={{paddingLeft:"9.85rem"}}/>
                        </a>
                    </div>
                </div>
                <div style={{position:"absolute", display:"flex", marginLeft:"55rem", marginTop:"28.3rem"}}>
                    <div style={{border:"solid green", padding: "2rem 4rem 2rem 1rem"}}>
                        <a style={{fontFamily:"sans-serif", fontSize:"1.59rem", color:"black", textDecoration:"none"}} href="#">
                        <img src="/Images/Package_Icon.jpg" style={{width:"5rem", height:"5rem", paddingRight:"1rem"}}/>
                            Where is MyCourier Service Point?
                        <img src="/Images/circle-right.svg" alt="arrow" style={{paddingLeft:"2.1rem"}}/>
                        </a>
                    </div>
                </div>

            </div>
            </>);
}

export default Home;