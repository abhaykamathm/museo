import React, { useState } from 'react';
import "./ProfileRemainder.css";
import search from "../Home/Images/search.svg";
import firstImage from "../../../public/Images/Profile/Rectangle 11615.png"
import clock from "../../../public/Images/Profile/Clock.png"

const ProfileReminder = () => {
    // const[toggeleCard,setToggeleCard]=useState()
    return (
        <div id='reminder_container' className='br-8'>
            <div className="reminder_top_nav pd-16">
                <div className="reminder_top_nav_left gp-8">
                    <div id="header-1" className='fs-24'>All Reminders</div>
                    <div className="line-bar fs-24">|</div>
                    <div id="header-2" className='fs-16'> (10)</div>
                </div>
                <div className="reminder_top_nav_right">
                    <div className="search-bar br-8">
                        <input placeholder="Search Lots" id="search-text" className='fs-18' />
                        <div className="search-img">
                            <img src={search} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="reminder_card_section">
                <div className="card_section">
                    <div className="card_section_header fs-20">
                        Upcoming Auctions
                    </div>
                    <div className="cards_container">
                        <div className="card1">
                            <div className="card1_img">
                                <img src={firstImage} alt="" />
                            </div>
                            <div className="card1_text_container">
                                <div className="text1">
                                    Portrait of Young Man Holding a Roundel
                                </div>
                                <div className="text2">
                                    Sandro Botticelli
                                </div>
                                <div className="card_footer">
                                    <div className="card_footer_img">
                                        <img src={clock} alt="" />
                                    </div>
                                    <div className="card_footer_text">
                                        2hr : 30mins : 20sec left
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="card1">
                            <div className="card1_img">
                                <img src={firstImage} alt="" />
                            </div>
                            <div className="card1_text_container">
                                <div className="text1">
                                    Portrait of Young Man Holding a Roundel
                                </div>
                                <div className="text2">
                                    Sandro Botticelli
                                </div>
                                <div className="card_footer">
                                    <div className="card_footer_img">
                                        <img src={clock} alt="" />
                                    </div>
                                    <div className="card_footer_text">
                                        2hr : 30mins : 20sec left
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="card1">
                            <div className="card1_img">
                                <img src={firstImage} alt="" />
                            </div>
                            <div className="card1_text_container">
                                <div className="text1">
                                    Portrait of Young Man Holding a Roundel
                                </div>
                                <div className="text2">
                                    Sandro Botticelli
                                </div>
                                <div className="card_footer">
                                    <div className="card_footer_img">
                                        <img src={clock} alt="" />
                                    </div>
                                    <div className="card_footer_text">
                                        2hr : 30mins : 20sec left
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="card1">
                            <div className="card1_img">
                                <img src={firstImage} alt="" />
                            </div>
                            <div className="card1_text_container">
                                <div className="text1">
                                    Portrait of Young Man Holding a Roundel
                                </div>
                                <div className="text2">
                                    Sandro Botticelli
                                </div>
                                <div className="card_footer">
                                    <div className="card_footer_img">
                                        <img src={clock} alt="" />
                                    </div>
                                    <div className="card_footer_text">
                                        2hr : 30mins : 20sec left
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="card1">
                            <div className="card1_img">
                                <img src={firstImage} alt="" />
                            </div>
                            <div className="card1_text_container">
                                <div className="text1">
                                    Portrait of Young Man Holding a Roundel
                                </div>
                                <div className="text2">
                                    Sandro Botticelli
                                </div>
                                <div className="card_footer">
                                    <div className="card_footer_img">
                                        <img src={clock} alt="" />
                                    </div>
                                    <div className="card_footer_text">
                                        2hr : 30mins : 20sec left
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
                <div className="card_section2">
                    <div className="card_section_header fs-20">
                        Ongoing Auctions
                    </div>
                    <div className="cards_container2">
                        <div className="card2">
                            <div className="card2_img">
                                <img src={firstImage} alt="" />
                            </div>
                        </div>
                         <div className="card2">
                            <div className="card2_img">
                                <img src={firstImage} alt="" />
                            </div>
                        </div>
                        <div className="card2">
                            <div className="card2_img">
                                <img src={firstImage} alt="" />
                            </div>
                        </div>
                         <div className="card2">
                            <div className="card2_img">
                                <img src={firstImage} alt="" />
                            </div>
                        </div>
                        <div className="card2">
                            <div className="card2_img">
                                <img src={firstImage} alt="" />
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileReminder
