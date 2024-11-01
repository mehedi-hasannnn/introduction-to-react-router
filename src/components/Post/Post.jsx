import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid seagreen',
        padding: '5px',
        borderRadius: '20px'
    }
    const handleShowDetail = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h3>Post of ID: {id}</h3>
            <p> {title} </p>
            <Link to={`/post/${id}`}>Read more</Link>
            <Link to={`/post/${id}`}> <button>Show Details</button> </Link>
            <button onClick={handleShowDetail}>Click for Details</button>
        </div>
    );
};

export default Post;