import { PiMicrophoneStageBold } from 'react-icons/pi'
import { LiaRecordVinylSolid } from "react-icons/lia";
import { TbMusicDollar } from "react-icons/tb";
import { TbHandRock } from 'react-icons/tb'
import { AiFillGithub } from "react-icons/ai";
import { TbBrandBlogger } from "react-icons/tb";
import { AiOutlineYoutube } from "react-icons/ai";

export const menuText = [
    {
        title: "가수 유튜브 공식 홈",
        icon: <PiMicrophoneStageBold />,
        src: "/"
    },{
        title: "오늘의 음악",
        icon: <LiaRecordVinylSolid />,
        src: "/today"
    },{
        title: "유명 락밴드 소개",
        icon: <TbMusicDollar />,
        src: "/musician"
    },
]

export const keywordText = [
    {
        title: "Beatles",
        icon: <TbHandRock />,
        src: "/search/Beatles"
    },{
        title: "Led Zeppelin",
        icon: <TbHandRock />,
        src: "/search/Led Zeppelin"
    },{
        title: "Pink Floyd",
        icon: <TbHandRock />,
        src: "/search/UCY2qt3dw2TQJxvBrDiYGHdQ"
    },{
        title: "Queen",
        icon: <TbHandRock />,
        src: "/search/UCiMhD4jzUqG-IgPzUmmytRQ"
    },{
        title: "AC/DC",
        icon: <TbHandRock />,
        src: "/search/UCB0JSO6d5ysH2Mmqz5I9rIw"
    },{
        title: "Rolling Stones",
        icon: <TbHandRock />,
        src: "/search/UCB_Z6rBg3WW3NL4-QimhC2A"
    },{
        title: "Eagles",
        icon: <TbHandRock />,
        src: "/search/UCPTypnDNlOZVnD7MY30_YBw"
    },{
        title: "U2",
        icon: <TbHandRock />,
        src: "/search/UC4gPNusMDwx2Xm-YI35AkCA"
    },{
        title: "Aerosmith",
        icon: <TbHandRock />,
        src: "/search/UCBxdHQVOaZhUOIj_3gt2FYw"
    },{
        title: "Metallica",
        icon: <TbHandRock />,
        src: "/search/UCbulh9WdLtEXiooRcYK7SWw"
    },{
        title: "Oasis",
        icon: <TbHandRock />,
        src: "/search/UCUDVBtnOQi4c7E8jebpjc9Q"
    },{
        title: "Coldplay",
        icon: <TbHandRock />,
        src: "/search/UCDPM_n1atn2ijUwHd0NNRQw"
    },{
        title: "Muse",
        icon: <TbHandRock />,
        src: "/search/UCGGhM6XCSJFQ6DTRffnKRIw"
    },{
        title: "Radiohead",
        icon: <TbHandRock />,
        src: "/search/UCq19-LqvG35A-30oyAiPiqA"
    }
]

export const snsText = [
    {
        title: "Github",
        src: "https://github.com/kiwowki",
        icon: <AiFillGithub />,
    },{
        title: "Blog",
        src: "http://kiwowki.dothome.co.kr/php2/html/main.html",
        icon: <TbBrandBlogger />,
    },{
        title: "Youtube",
        src: "https://www.youtube.com/channel/UCB-BuZ8_DIWxJvbzVUomdTQ",
        icon: <AiOutlineYoutube />,
    }
]