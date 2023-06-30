import Carousel from "./Carousel";
import NavBar from "./NavBar";



function Home() {
    return (<>
            <NavBar/>
            <div className="row">
                <div className="column">
                    <Carousel/>
                </div>
                <div style={{position:"absolute", display:"flex", marginLeft:"57.9%", marginTop:"10.5%"}}>
                    <div style={{border:"solid green", padding: "32px 64px 32px 16px"}}>
                        <a style={{fontFamily:"sans-serif", fontSize:"28px", color:"black", textDecoration:"none"}} href="#">
                        <img src="/Images/Package_Icon.jpg" style={{width:"80px", height:"80px", paddingRight:"15px"}}/>
                            Where is My Package?
                        <img src="/Images/circle-right.svg" alt="arrow" style={{paddingLeft:"148px"}}/>
                        </a>
                    </div>
                </div>
                <div style={{position:"absolute", display:"flex", marginLeft:"57.9%", marginTop:"20.1%"}}>
                    <div style={{border:"solid green", padding: "32px 64px 32px 16px"}}>
                        <a style={{fontFamily:"sans-serif", fontSize:"27.2px", color:"black", textDecoration:"none"}} href="#">
                        <img src="/Images/Package Home Pick Up.png" style={{width:"80px", height:"80px", paddingRight:"15px"}}/>
                            Home Pick Up Service
                        <img src="/Images/circle-right.svg" alt="arrow" style={{paddingLeft:"163.5px"}}/>
                        </a>
                    </div>
                </div>
                <div style={{position:"absolute", display:"flex", marginLeft:"57.9%", marginTop:"29.75%"}}>
                    <div style={{border:"solid green", padding: "32px 64px 32px 16px"}}>
                        <a style={{fontFamily:"sans-serif", fontSize:"25.45px", color:"black", textDecoration:"none"}} href="#">
                        <img src="/Images/Package_Icon.jpg" style={{width:"80px", height:"80px", paddingRight:"15px"}}/>
                            Where is SwiftTransit Service Point?
                        <img src="/Images/circle-right.svg" alt="arrow" style={{paddingLeft:"25px"}}/>
                        </a>
                    </div>
                </div>

            </div>
            </>);
}

export default Home;