import React from "react";
import Container from "react-bootstrap/Container"
import API from "../utils/API";
const Home = ()=>{
    API.getTop().then((res)=>{
        console.log(res)
    })
    return (
        <Container>
            <h1>Test</h1>
        </Container>
    )
}

export default Home;