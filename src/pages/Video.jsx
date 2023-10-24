import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';
import { GrFormView } from "react-icons/gr";
import { LuThumbsUp } from "react-icons/lu";
import { BiCommentDetail } from "react-icons/bi";

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
                            atyle={{ position: 'absolute', top: 0, left: 0 }}
                        />
                    </div>
                    <div className='video_info'>
                        <h2 className='video_title'>
                            {videoDetail.snippet.title}
                        </h2>
                        <div className='video_channel'>
                            <div className='id'>
                                <Link to={`/channel/${videoDetail.snippet.channelId}`}>{videoDetail.snippet.channelTitle}</Link>
                            </div>
                            <div className='count'>
                                <span className='view'><GrFormView className='grIcon'/>조회수 : {videoDetail.statistics.viewCount} 회</span>
                                <span className='like'><LuThumbsUp className='luIcon'/>좋아요 수 : {videoDetail.statistics.likeCount} 개</span>
                                <span className='comment'><BiCommentDetail className='biIcon'/>댓글 수 : {videoDetail.statistics.commentCount} 개</span>
                            </div>
                        </div>
                        <div className="video_desc">
                            <span>{videoDetail.snippet.description}</span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Video;