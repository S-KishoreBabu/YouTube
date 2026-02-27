import React from "react";

const CommentCard = ({ comment }) => {
  const snippet = comment.snippet.topLevelComment.snippet;

  return (
    <div className="flex gap-3 mb-4">
      <img
        src={snippet.authorProfileImageUrl}
        alt="profile"
        className="w-10 h-10 rounded-full"
      />

      <div>
        <h4 className="font-semibold text-sm">
          {snippet.authorDisplayName}
        </h4>

        <p
          className="text-sm text-gray-700"
          dangerouslySetInnerHTML={{
            __html: snippet.textDisplay,
          }}
        />

        <div className="text-xs text-gray-500 mt-1">
          👍 {snippet.likeCount}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;