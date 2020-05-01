import React from "react";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

function Navigate(){
    return (
        <Navbar bg="light" expand="lg">
            <Nav.Link href="/">Home</Nav.Link>

            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
            <Nav.Link href="/shoppingCart">Shopping Cart</Nav.Link>
        </Navbar>
    )
}
export default Navigate;