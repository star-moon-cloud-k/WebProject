import React, {useMemo} from "react";
import qs from 'qs';
import {useLocation} from "react-router-dom";

function useQuery() {
    const {search} = useLocation();
    return useMemo(()=> new URLSearchParams(search), [search])
}

const About = ({location}) =>{
    let query = useQuery();
    // const query = qs.parse(location.search, {
    //     ignoreQueryPrefix : true    //이 설정을 통해 문자열 앞의 ?를 생략한다
    // });
    const showDetail = query.get('detail') === 'true'; //쿼리의 파싱 결과 값은 문자열
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트 입니다.</p>
            {showDetail && <p>detail 값을 true로 설정하셨군요</p>}
        </div>
    );
};

export default About;