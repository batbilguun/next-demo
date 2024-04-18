"use client";

import React from "react";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row d-none">
                    <div className="col-lg-4">
                        <div className="widget">
                            <h3 className="mb-4">About</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div> 
                        <div className="widget">
                            <h3>Social</h3>
                            <ul className="list-unstyled social">
                                <li><a href="#"><span className="icon-instagram"></span></a></li>
                                <li><a href="#"><span className="icon-twitter"></span></a></li>
                                <li><a href="#"><span className="icon-facebook"></span></a></li>
                                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                <li><a href="#"><span className="icon-pinterest"></span></a></li>
                                <li><a href="#"><span className="icon-dribbble"></span></a></li>
                            </ul>
                        </div>
                    </div> 
                    <div className="col-lg-4 ps-lg-5">
                        <div className="widget">
                            <h3 className="mb-4">Company</h3>
                            <ul className="list-unstyled float-start links">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Vision</a></li>
                                <li><a href="#">Mission</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                            </ul>
                            <ul className="list-unstyled float-start links">
                                <li><a href="#">Partners</a></li>
                                <li><a href="#">Business</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Creative</a></li>
                            </ul>
                        </div>
                    </div> 
                    <div className="col-lg-4">
                        <div className="widget">
                            <h3 className="mb-4">Recent Post Entry</h3>
                            <div className="post-entry-footer">
                                <ul>
                                    <li>
                                        <a href="">
                                            {/* <img src="images/img_1_sq.jpg" alt="Image placeholder" className="me-4 rounded"> */}
                                            <div className="text">
                                                <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                                                <div className="post-meta">
                                                    <span className="mr-2">March 15, 2018 </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            {/* <img src="images/img_2_sq.jpg" alt="Image placeholder" className="me-4 rounded"> */}
                                            <div className="text">
                                                <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                                                <div className="post-meta">
                                                    <span className="mr-2">March 15, 2018 </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            {/* <img src="images/img_3_sq.jpg" alt="Image placeholder" className="me-4 rounded"> */}
                                            <div className="text">
                                                <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                                                <div className="post-meta">
                                                    <span className="mr-2">March 15, 2018 </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>


                        </div> 
                    </div> 
                </div>

                <div className="row">
                    <div className="col-12 text-center">
                        <p>Copyright © 2024. All Rights Reserved. — Designed with love by Distributed by
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}