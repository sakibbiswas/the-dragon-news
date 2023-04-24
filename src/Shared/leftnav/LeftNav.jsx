import React, { useEffect, useState, } from 'react';
import {
    Link
} from "react-router-dom";
const LeftNav = () => {
    const [categories, setcategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/Categories')
            .then(res => res.json())
            .then(data => setcategories(data))
    }, [])
    return (
        <div >
            <h3>All category</h3>
            <div className='ps-4'>

                {
                    categories.map(category => <p
                        key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>

                    </p>)

                }
            </div>

        </div>
    );
};

export default LeftNav;