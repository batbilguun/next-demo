"use client";
import { useRouter } from "next/navigation";

export default function Index() {
    const router = useRouter();
    return (
        <>
            <h1>Бүтээгдэхүүн</h1>
            <div>
                <button className={"btn btn-danger"} onClick={() => router.push("/")}>
                    Буцах
                </button>
            </div>
        </>
    )
}