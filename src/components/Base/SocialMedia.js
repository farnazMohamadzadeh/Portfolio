import React from "react";

export const SocialMedia = ({ url, title, src }) => {
  return (
    <div className="mr-4 text-center">
      <a href={url} title={title}>
        <img
          className=" w-8 h-w-8 ml-3 transition-all  transform hover:scale-110 hover:rotate-12"
          src={src}
          alt={title}
        />
      </a>
    </div>
  );
};
