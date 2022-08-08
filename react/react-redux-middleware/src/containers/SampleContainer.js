import React from 'react';
import {connect} from 'react-redux';
import Sample from '../component/Sample';
import {getPost, getUsers} from '../modules/sample';

const {useEffect} = React;
const SampleContainer = ({
    getPost,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers
})=>{
    //클래스 형태 컴포넌트였다면 componentDidMount
    useEffect(()=>{
        getPost(1);
        getUsers(1);
    }, [getPost, getUsers]);
    return (
        <Sample
            post ={post}
            users = {users}
            loadingUsers={loadingUsers}
            loadingPost={loadingPost}
            />
    );
};

export default connect(
    ({sample}) =>({
        post: sample.post,
        users: sample.users,
        loadingPost : sample.loading.GET_POST,
        loadingUsers : sample.loading.GET_USERS
    }),
    {
        getPost,
        getUsers
    }
)(SampleContainer)