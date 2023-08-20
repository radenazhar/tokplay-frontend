import Comment from "./Comment";
import { useEffect, useState } from "react";
import axios from "axios";

function CommentList({ id }) {
    const [commentList, setCommentList] = useState([]);
  
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
  
    function handleUsername(e) {
      setUsername(e.target.value);
    }
  
    function handleComment(e) {
      setComment(e.target.value);
    }
  
    function submit(e) {
      e.preventDefault();
      axios
        .post(`https://belt-kangaroo.cyclic.cloud/api/v1/comments/${id}`, {
          username,
          comment,
        })
        .then((res) => {
          setCommentList([...commentList, res.data.data.comment]);
        });
    }
  
    useEffect(() => {
      axios
        .get(`https://belt-kangaroo.cyclic.cloud/api/v1/comments/${id}`)
        .then((res) => {
          setCommentList(res.data.data.comments);
        });
    }, []);
  
    return (
      <div className="col-md-3">
        {/* Komponen 1: List Komentar dan Input Komentar */}
        <div className="mb-3">
          <h3>Komentar Terbaru</h3>
          <ul className="list-group">
            {commentList.map((el) => (
              <Comment key={el._id} data={el} />
            ))}
          </ul>
        </div>
        <div className="mb-3">
          <h4>Tambahkan Komentar</h4>
          <form>
            <div className="mb-3">
              <input
                onChange={handleUsername}
                type="text"
                placeholder="username"
              />
            </div>
            <div className="mb-3">
              <textarea
                onChange={handleComment}
                className="form-control"
                rows="3"
                placeholder="Tulis komentar Anda"
              ></textarea>
            </div>
            <button onClick={submit} type="submit" className="btn btn-primary">
              Kirim Komentar
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default CommentList;
  