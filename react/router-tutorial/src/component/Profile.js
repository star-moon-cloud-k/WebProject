import React from "react";
import {useParams} from "react-router-dom";

const data = {
    velopert: {
        name: "김동훈",
        description: "풀스택을 꿈꾸는 개발자"

    },
    gildong: {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공'
    }
};

const Profile = () =>{
    const {username} = useParams(); //router V6 버전부터 사용
    // const {username} = match.params;
    const profile = data[username];
    if (!profile){
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return(
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;