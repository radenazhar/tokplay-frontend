function Comment({ data }) {
    return (
      <li className="list-group-item">
        <p>{data.comment}</p>
        <p>{data.username}</p>
      </li>
    );
  }
  
  export default Comment;
  