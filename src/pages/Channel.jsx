import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api';

import VideoSearch from '../components/video/VideoSearch';

const Channel = () => {
    const { channelId } = useParams();
    const [ channelDetail, setChannelDetail ] = useState(); // 데이터가 하나라 배열 표시x
    const [ channelVideo, setChannelVideo ] = useState([]);
    const [ channelVideos, setChannelVideos ] = useState([]);

    useEffect(() => {
        const fetchChannelData = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet,id,statistics,brandingSettings&id=${channelId}`);
                setChannelDetail(data.items[0]);

                const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date&type=video`);
                console.log(videosData);  //확인하기
                setChannelVideo(videosData.items);

            } catch (error) {
                console.error("Error fetching channel data", error);
            }
        };

        const fetchChannelVideos = async () => {
            try {
                const data = await fetchFromAPI(`search?key=YOUR_YOUTUBE_API_KEY&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`);
                setChannelVideos(data.items);
            } catch (error) {
                console.error("Error fetching channel videos", error);
            }
        };

        // 데이터 가져오기
        fetchChannelData();
        fetchChannelVideos();
    }, [channelId]);

    return (
        <section id='channel'>
            {channelDetail && (
                <div className='channel_inner'>
                    <div
                        className='channel_header'
                        style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}
                    >
                        <div className="circle">
                            <img src={channelDetail.snippet.thumbnails.default.url} alt="Channel Banner" />
                        </div>
                    </div>
                    <div className='channel_info'>
                        <h3 className='title'>{channelDetail.snippet.title}</h3>
                        <p className='desc'><span>{channelDetail.snippet.description}</span></p>
                        <div className='info'>
                            <span><p>구독자 수</p>: {channelDetail.statistics.subscriberCount} 명</span>
                            <span><p>동영상 개수</p>: {channelDetail.statistics.videoCount} 개</span>
                            <span><p>총 조회수</p>: {channelDetail.statistics.viewCount} 회</span>
                        </div>
                    </div>
                    <div className="channel_video video_inner">
                        <VideoSearch videos={channelVideo}/>
                    </div>
                    <div className='channel_more'></div>
                </div>
            )}
        </section>
    );
};

export default Channel;