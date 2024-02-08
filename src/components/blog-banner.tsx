import React from "react";
import { BannerProps } from "../typescript/blog";

export default function BlogBanner({
  blog_banner,
}: {
  blog_banner: BannerProps;
}) {
  return (
    <div
      className="blog-page-banner"
      style={{ background: `${blog_banner?.bg_color}` }}
    >
      {blog_banner.banner_image ? (
        <img
          className="blog-banner"
          {...(blog_banner.banner_image.$?.url as {})}
          alt={blog_banner.banner_image.filename}
          src={blog_banner.banner_image.url}
        />
      ) : (
        ""
      )}
      <div className="blog-banner-text">
        {blog_banner.banner_title && (
          <h1 {...(blog_banner.$?.banner_title as {})} className="hero-title">
            {blog_banner.banner_title}
          </h1>
        )}

        {blog_banner.banner_description && (
          <p
            {...(blog_banner.$?.banner_description as {})}
            className="hero-description"
          >
            {blog_banner.banner_description}
          </p>
        )}
      </div>
    </div>
  );
}
