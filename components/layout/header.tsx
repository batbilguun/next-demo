"use client";


import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    console.log("pathname->", pathname);

    return (
        <nav className="site-nav">
            <div className="container">
                <div className="menu-bg-wrap">
                    <div className="site-navigation">
                        <div className="row g-0 align-items-center">
                            <div className="col-2">
                                <Link href="/" className="logo m-0 float-start">Blogy<span className="text-primary">.</span></Link>
                            </div>
                            <div className="col-8 text-center">
                                <form action="#" className="search-form d-inline-block d-lg-none">
                                    {/* <input type="text" className="form-control" placeholder="Search..."> */}
                                    <span className="bi-search"></span>
                                </form>

                                <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                                    <li className={`${pathname === "/" ? "active" : ""}`}><Link href="/">Нүүр хуудас</Link></li>
                                    <li className={`${pathname === "/about" ? "active" : ""}`}><Link href="/about">Бидний тухай</Link></li>
                                    <li className={`${pathname === "/products" ? "active" : ""}`}><Link href="/products">Бүтээгдэхүүн</Link></li>
                                    <li className={`${pathname === "/contact" ? "active" : ""}`}><Link href="/contact">Холбоо барих</Link></li>
                                    
                                </ul>
                            </div>
                            <div className="col-2 text-end">
                                <a href="#" className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light">
                                    <span></span>
                                </a>
                                <form action="#" className="search-form d-none d-lg-inline-block">
                                    {/* <input type="text" className="form-control" placeholder="Search..."> */}
                                    <span className="bi-search"></span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )

}