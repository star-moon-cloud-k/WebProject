import {Outlet , useNavigate} from "react-router-dom";

const Layout = () =>{
    const navigate = useNavigate();

    const goBack = () => {
        //이전 페이지로 이동
        navigate(-1);
    };

    const goArticles = () =>{
        //articles로 이동
        navigate('/articles', {replace : true});
    };
    const goIndex = () =>{
        //articles로 이동
        navigate('/');
    }

    return (
        <div>
            <header style = {{background : 'lightgray', padding : 16, fontSize : 24}}>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goArticles}>게시글 목록</button>
                <button onClick={goIndex}>홈으로 이동</button>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;