import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';
import { GrFormView } from "react-icons/gr";
import { LuThumbsUp } from "react-icons/lu";
import { BiCommentDetail } from "react-icons/bi";

// CommentList 컴포넌트를 같은 파일 내에 정의
function CommentList({ comments }) {
    return (
        <div className="comments">
            {comments.map((comment, index) => (
                <div key={index} className="comment">
                    <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                </div>
            ))}
        </div>
    );
}

const Video = () => {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [videoComments, setVideoComments] = useState([]);

    useEffect(() => {
        // 비디오 정보 가져오기
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`, { params: { maxResults: 48 } })
            .then((data) => {
                setVideoDetail(data.items[0]);
                console.log(data);
            });

        // 비디오에 대한 댓글 가져오기 (최대 10개)
        fetchFromAPI(`commentThreads?part=snippet&videoId=${videoId}`, { params: { maxResults: 10 } })
            .then((comments) => {
                console.log(comments); // 댓글 API 응답을 로깅
                setVideoComments(comments.items);
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
                                <span className='view'><GrFormView className='grIcon' /><span>조회수 </span>{videoDetail.statistics.viewCount} 회</span>
                                <span className='like'><LuThumbsUp className='luIcon' /><span>좋아요 </span>{videoDetail.statistics.likeCount} 개</span>
                                <span className='comment'><BiCommentDetail className='biIcon' /><span>댓글 </span>{videoDetail.statistics.commentCount} 개</span>
                            </div>
                        </div>
                        <div className="video_desc">
                            <span>{videoDetail.snippet.description}</span>
                        </div>
                    </div>
                    <div className="video_comment">
                        <h1>Comment</h1>
                        <CommentList comments={videoComments} />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Video;