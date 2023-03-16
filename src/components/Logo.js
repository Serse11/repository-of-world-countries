import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
            {/* les images importées depuis la balises img
             sont accessibles dans le dossier public */}
            <img src="./logo192.png" alt="logo react" />
            <h3>React World</h3>
        </div>
    );
};

export default Logo;