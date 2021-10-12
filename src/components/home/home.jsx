import React from "react";
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";



const Home = () => {

    return (
        <>
            <header>
                <p>Escoja el tipo de usuario</p>
                <Link to='/waiterView'>
                    <Button>Mesero</Button>
                </Link>
                <Link to='/kitchenView'>
                    <Button disabled>Cocina</Button>
                </Link>
            </header>
        </>
    )
}

export default Home