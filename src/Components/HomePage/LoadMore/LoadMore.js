import React, { useEffect, useState } from 'react';
import LoadMoreDetails from '../LoadMoreDetails/LoadMoreDetails';

const LoadMore = () => {
    const [loadMore, setLoadMore] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setLoadMore(data.slice(10, 20))
        })
    }, [])
    return (
        <div className="row container mx-auto">
            {
                loadMore.map(more => <LoadMoreDetails more={more}></LoadMoreDetails>)
            }
        </div>
    );
};

export default LoadMore;