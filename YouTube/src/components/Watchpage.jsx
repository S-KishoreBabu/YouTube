import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CommentCard from "./CommentCard";

const Watchpage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!videoId) return;

    const getComments = async () => {
      try {
        const res = await fetch(
          `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=AIzaSyCz_YBQwlM-W4Iyxr9n9Iedfjjh3o7r4qQ`
        );
        const json = await res.json();
        setComments(json.items || []);
      } catch (err) {
        console.error("Error fetching comments", err);
      } finally {
        setLoading(false);
      }
    };

    getComments();
  }, [videoId]);

  return (
    <div className="p-4">
      <iframe
        className="w-full max-w-4xl aspect-video"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Clone"
        allowFullScreen
      ></iframe>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">
          Comments ({comments.length})
        </h2>

        {loading && <p>Loading comments...</p>}

        {comments.map((item) => (
          <CommentCard key={item.id} comment={item} />
        ))}
      </div>
    </div>
  );
};

export default Watchpage;