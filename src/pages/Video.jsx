import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';

const Video = () => {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => {
                setVideoDetail(data.items[0]);
                console.log(data);
            });
    }, [videoId]); 

    return (
        <section id='videoViewPage'>
            {videoDetail && (
                <div className='video_view'>
                    <div className='video_play'>
                        <ReactPlayer
                            playing={true}
                            url={`https://www.youtube.com/watch?v=${videoId}`}
                            width='100%'
                            height='91vh'
                            controls={true}
                            atyle={{position: 'absolute', top: 0, left:0}}
                        />
                    </div>
                    <div className='video_info'>
                        <h2 className='video_title'>
                            제목 : {videoDetail.snippet.title}
                        </h2>
                        <div className='video_channel'>
                            <div className='id'>ID : {videoDetail.id}</div>
                            <div className='count'>
                                <div className='view'>조회수 : {videoDetail.statistics.viewCount} 회</div>
                                <div className='like'>좋아요 수 : {videoDetail.statistics.likeCount} 개</div>
                                <div className='comment'>댓글 수 : {videoDetail.statistics.commentCount} 개</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Video;