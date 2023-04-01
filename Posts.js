import { useEffect } from 'react'

const Posts = ({ children, onLoad }) => {
    useEffect(() => {
        onLoad()
    }, [])
    return children
}

export default Posts