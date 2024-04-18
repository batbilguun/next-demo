"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    return (
        <div className="site-cover site-cover-sm same-height overlay single-page" style={{ backgroundImage: `url('images/hero_5.jpg')` }}>
            <div className="container">
                <div className="row same-height justify-content-center">
                    <div className="col-md-6">
                        <div className="post-entry text-center">
                            <h1 className="mb-4">404 - Уучлаарай хуудас олдсонгүй</h1>
                            <button className="btn btn-success" onClick={() => router.push("/")}>
                                Нүүр хуудасруу буцах
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}