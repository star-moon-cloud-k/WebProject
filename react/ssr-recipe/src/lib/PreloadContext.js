import { createContext, useContext } from 'react';

//서버 환경 : {done: false , promises : []}
const PreloadContext = createContext(null);
export default PreloadContext;

export const Preloader = ({ resolve }) => {
    const preloadContext = useContext(PreloadContext);
    if (!preloadContext) return null;   //context 값이 유효하기 않다면 아무것도 하지 않음
    if (preloadContext.done) return null;   //이미 작업이 끝났다면 아무것도 하지 않음

    //promise 배열에 프로미스 등록
    //설령 resovle 함수가 프로미스를
    //Promise.resolve 함수 사용
    preloadContext.promises.push(Promise.resolve(resolve()));
    return null;
};

