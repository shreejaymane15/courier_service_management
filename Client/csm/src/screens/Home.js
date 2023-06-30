import Carousel from "./Carousel";
import NavBar from "./NavBar";



function Home() {
    return (<>
            <NavBar/>
            <div className="row">
                <div className="column">
                    <Carousel/>
                </div>
                <div style={{position:"absolute", display:"flex", marginLeft:"65rem", marginTop:"15rem"}}>
                    <div style={{border:"solid green", padding: "2rem 4rem 2rem 1rem"}}>
                        <a style={{fontFamily:"sans-serif", fontSize:"2rem", color:"black", textDecoration:"none"}} href="#">
                        <img src="/Images/Package_Icon.jpg" style={{width:"5rem", height:"5rem", paddingRight:"1rem"}}/>
                            Track Your Package
                        <img src="/Images/circle-right.svg" alt="arrow" style={{paddingLeft:"8.85rem"}}/>
                        </a>
                    </div>
                </div>
                <div style={{position:"absolute", display:"flex", marginLeft:"65rem", marginTop:"24.2rem"}}>
                    <div style={{border:"solid green", padding: "2rem 4rem 2rem 1rem"}}>
                        <a style={{fontFamily:"sans-serif", fontSize:"2rem", color:"black", textDecoration:"none"}} href="#">
                        <img src="/Images/Package_Icon.jpg" style={{width:"5rem", height:"5rem", paddingRight:"1rem"}}/>
                            Enterprise Logistic Services
                        <img src="/Images/circle-right.svg" alt="arrow" style={{paddingLeft:"2rem"}}/>
                        </a>
                    </div>
                </div>
            </div>
            </>);
}

export default Home;