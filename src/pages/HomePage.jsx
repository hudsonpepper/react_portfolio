import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';

import portfolioData from '../utils/portfolioData'
import API from '../utils/API';
const posts = portfolioData();


export default function HomePage() {
  console.log('posts', posts)
  console.log("homepage.jsx")
  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <>
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post, index) => (
          <article
            key={index}
            className="relative max-h-16 isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 pt-48 lg:pt-80"
          >
            <a href={post.githubRepo}>
              <img src={`./src/assets/${post.imageFileName}`} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
            </a>
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              {/* <time dateTime={post.datetime} className="mr-8">
                {post.date}
              </time> */}
              <div className="-ml-4 flex items-center gap-x-4">
                <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                {/* <div className="flex gap-x-2.5">
                  <img src={post.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                  {post.author.name}
                </div> */}
              </div>
            </div>
            <div>
              <div>
                <h4 className="text-slate-400">
                  {post.tags.join(" • ")}
                </h4>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-50">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
