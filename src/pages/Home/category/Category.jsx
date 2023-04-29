import React from 'react';
import {
    useLoaderData,
    useParams
} from "react-router-dom";
import News from '../news/news/News';
import Catagorycard from '../catagorycard/Catagorycard';
const Category = () => {
    const { id } = useParams();
    const catagorynews = useLoaderData()
    return (
        <div>
            <h2>This is a category : {catagorynews.length}</h2>
            {
                catagorynews.map(newss => <Catagorycard
                    key={newss.id}
                    newss={newss}></Catagorycard>)
            }
        </div>
    );
};

export default Category;
