import React from "react";
import {Link, Routes, Route} from "react-router-dom";
import Profile from "./Profile";

const Profiles = () =>{
    return (
        <div>
            <h3>사용자 목록 : </h3>
            <ul>
                <li>
                    <Link to="/profiles/velopert">velopert</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong</Link>
                </li>
            </ul>

            <Routes>
            <Route
                // path="/profiles"         //V6
                //exact                     //V5 -> 사용 안함
                path="/profiles/*"          //뒤에 *을 붙여야함
                element = {() => <div>사용자를 선택해 주세요</div>}
            />
                {/*<Route path="/profiles/:username" component={Profile}/>*/} //v5
                <Route path=":username" element={<Profile/>}/>
            </Routes>
        </div>
    );
}
export default Profiles;