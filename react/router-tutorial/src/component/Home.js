import React from 'react';
import {Link} from "react-router-dom";

const Home = () =>{
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지</p>
            <ul>
                <li>
                    <Link to ="/about">소개</Link>
                </li>
                <li>
                    <Link to = "/profiles/star_moon_cloud_k">star-moon-cloud-k</Link>
                </li>
                <li>
                    <Link to = "/profiles/gildong">gildong</Link>
                </li>
                <li>
                    <Link to = "/articles">게시글 목록</Link>
                </li>
                <li>
                    <Link to = "/login">login</Link>
                </li>
                <li>
                    <Link to = "/mypage">My Page</Link>
                </li>


            </ul>
        </div>
    );
}

export default Home;