import React from "react";

import Slider from "./Slider";
import Brands from "./Brands";
import Latest from "./Latest";

function Home(){
    return(
        <>
            <Slider/>
            <div className="row">
<div className="col-sm-12"><Brands/></div>
            </div>
            <div className="row">
<div className="col-sm-12"><Latest/></div>
            </div>
        </>
    )
}

export default Home;