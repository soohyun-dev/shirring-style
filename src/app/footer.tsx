"use client";

export const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "400px",
        backgroundColor: "#e2e2e2",
        height: "128px",
        padding: "32px 64px",
      }}
      className="flex flex-row items-center justify-between"
    >
      <div className="flex-1">
        <div>
          <p>샤링스타일</p>
          <p>Shirring Style</p>
        </div>
        <div>
          <p>경기 고양시 일산서구 경의로 935 2층</p>
        </div>
        <div>
          <p style={{ opacity: "0.3" }}>
            Copyright © soohyun-dev. All rights reserved.
          </p>
        </div>
      </div>
      <div className="flex flex-1 justify-end">
        <div className="flex gap-x-4">
          <button
            onClick={() => {
              window.open("https://www.instagram.com/shirring_home");
            }}
          >
            <img src="/instagram.webp" width={64} />
          </button>
          <button
            onClick={() => {
              window.open("https://blog.naver.com/sjwmammy");
            }}
          >
            <img src="/naver-blog.png" width={64} />
          </button>
          <button
            onClick={() => {
              window.open("https://www.facebook.com/shirringstyle/");
            }}
          >
            <img src="/facebook.svg" width={64} />
          </button>
        </div>
      </div>
    </div>
  );
};
