import React from 'react';
import "./OriginFilter.css";
import sideImage from '../../../public/Images/Filter/Rectangle 891.png';
import Map from '../Map/Map';
import logo from '../../../public/Images/Filter/Arrow Right.png';
import vector from '../../../public/Images/Filter/Vector.png';



const OriginFilter = () => {
    return (
        <>
            <Map />
            <div id='origin-filter'>
                <div className="image-section ">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="image-container gp-24">
                        <div className="auction-image top-image">
                            <img className="auction-image-img" src={sideImage} alt="" />
                        </div>
                        <div className="auction-image">
                            <img className="auction-image-img" src={sideImage} alt="" />
                        </div>
                        <div className="auction-image">
                            <img className="auction-image-img" src={sideImage} alt="" />
                        </div>
                    </div>

                </div>

            </div>
            <div className="origin-cat br-8">
                <div className="text fs-16">
                    Category
                </div>
                <div className="vector-img">
                    <img src={vector} alt="" />
                </div>
            </div>
        </>


    )
}

export default OriginFilter
