import React, { useEffect, useState } from 'react';
import Profile from '../../UserProfilePage/Profile/Profile';
import LoadMoreDetails from '../LoadMoreDetails/LoadMoreDetails';

const LoadMore = () => {
    const [loadMore, setLoadMore] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            setLoadMore(data.slice(10, 20))
        })
    }, [])
    return (
        <div className="row container mx-auto">
            {
                loadMore.map(more => <LoadMoreDetails more={more} key={more.id}></LoadMoreDetails>)
            }
        </div>
    );
};

export default LoadMore;