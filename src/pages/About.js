import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>About</h1>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, numquam. Aliquam hic necessitatibus dolore, eligendi ipsum fugiat, sapiente pariatur eveniet voluptatum at harum. Minima velit debitis illum quidem, alias quo.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nam aliquam ipsa at laborum aperiam amet, doloribus totam ipsum cupiditate? Itaque maiores sapiente vel soluta sed magnam, quam voluptatem laudantium!
                </p>
            </div>
        </div>
    );
};

export default About;