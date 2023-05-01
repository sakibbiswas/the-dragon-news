import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and condition</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti cupiditate dolorem ipsam dolor. Eum ex sequi fuga corrupti quasi veritatis amet similique ab omnis numquam, dolores vitae laudantium nihil perferendis!</p>
            <p>Go back to <Link to='/register'>Register</Link></p>

        </div>
    );
};

export default Terms;