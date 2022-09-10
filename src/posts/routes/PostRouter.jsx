import { Navigate, Route, Router, Routes } from 'react-router-dom'
import { Post } from '../components'
import { PostsLayout } from '../layout/PostsLayout'
import { Posts } from '../pages/Posts'

export const PostRouter = () => {
    return (
            <Routes>
                <Route path="/feed/" element={<PostsLayout />} >
                <Route path='posts' element={<Posts />} />
                <Route path='post/:id' element={<Post />} />
            </Route>
                <Route path='*' element={<Navigate to='/feed/posts' />} />
            </Routes>
    )
}
