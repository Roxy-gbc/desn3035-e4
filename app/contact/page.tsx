import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";

export default function Page() {
    return <>

        <div className="container py-4">
            <div className="row">

                <Header />

                <Nav />

                <div className="col-9">
                    <img className="d-block w-100 mb-3" src="https://fastly.picsum.photos/id/251/1280/720.jpg?hmac=YDyCcHsQDDzvzCfZ-MLi2fr2pFqpoH9OqSqmJFBwV7w" />
                    <h1>Conatct Us!</h1>
                    <p>
                        Your can call us anytime you want at 647 xxx xxxx.
                    </p>
                </div>

            </div>
        </div>

    </>
}