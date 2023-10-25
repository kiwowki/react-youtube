import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import VideoSearch from '../components/video/VideoSearch';



const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideo ] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?type=video&part=snippet&q=${searchId}`)
            .then((data) => setVideo(data.items));
    }, [searchId]);

    return (
        <section id='searchPage'>
            <h2>{searchId}</h2>
            <div className='video_inner search'>
                <VideoSearch videos={videos}/>
            </div>
        </section >
    )
}

export default Search
// 일반적으로 자식한테만 props가능함. <VideoSearch videos={videos}/> props한 거임