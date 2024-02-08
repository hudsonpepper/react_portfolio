import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
import Profile from '../components/UI/ProfileSections/ProfileTeaser';
import ProjectItem from '../components/UI/ListItem';
import Banner from '../components/Banner/index'
import portfolioData from '../utils/portfolioData'
import API from '../utils/API';
const posts = portfolioData();


export default function HomePage() {
  console.log('posts', posts)
  console.log("homepage.jsx")
  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <>
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post, index) => (
          <article
            key={index}
            className="relative max-h-16 isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Vulputate enim nulla aliquet porttitor lacus luctus. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Id consectetur purus ut faucibus pulvinar. Nibh tellus molestie nunc non blandit massa enim nec. Duis convallis convallis tellus id interdum velit. Lectus urna duis convallis convallis tellus id. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Tellus orci ac auctor augue mauris. Purus faucibus ornare suspendisse sed nisi lacus. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Nulla malesuada pellentesque elit eget. Tincidunt arcu non sodales neque sodales ut etiam sit. At varius vel pharetra vel turpis. Non odio euismod lacinia at quis risus sed vulputate. Mauris cursus mattis molestie a iaculis at.

        Massa massa ultricies mi quis hendrerit. Mattis rhoncus urna neque viverra justo nec ultrices dui. Ut pharetra sit amet aliquam. At augue eget arcu dictum varius. Ac auctor augue mauris augue neque gravida in. Habitant morbi tristique senectus et netus. Feugiat sed lectus vestibulum mattis ullamcorper velit. Habitant morbi tristique senectus et netus et malesuada fames ac. Maecenas sed enim ut sem viverra aliquet eget sit amet. Suspendisse interdum consectetur libero id faucibus nisl.

        Lectus arcu bibendum at varius vel pharetra vel. Faucibus scelerisque eleifend donec pretium vulputate sapien. Ac turpis egestas integer eget aliquet. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Gravida quis blandit turpis cursus in hac habitasse. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Imperdiet massa tincidunt nunc pulvinar. Ligula ullamcorper malesuada proin libero nunc. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Venenatis cras sed felis eget velit aliquet. Tellus cras adipiscing enim eu turpis egestas pretium. Gravida cum sociis natoque penatibus et magnis dis. Mi eget mauris pharetra et ultrices neque. Elementum pulvinar etiam non quam lacus. Et tortor at risus viverra adipiscing. Quis viverra nibh cras pulvinar.

        Etiam non quam lacus suspendisse faucibus interdum posuere lorem. In est ante in nibh mauris. Malesuada proin libero nunc consequat interdum varius. Tellus in hac habitasse platea dictumst vestibulum. Est sit amet facilisis magna etiam. Diam quis enim lobortis scelerisque. Morbi leo urna molestie at elementum. Egestas egestas fringilla phasellus faucibus. Amet cursus sit amet dictum sit amet. Erat nam at lectus urna duis.

        Laoreet suspendisse interdum consectetur libero. Aenean pharetra magna ac placerat. Id neque aliquam vestibulum morbi. Lectus nulla at volutpat diam ut. Consectetur libero id faucibus nisl tincidunt eget nullam. Dui accumsan sit amet nulla facilisi morbi. Felis bibendum ut tristique et egestas quis ipsum. Euismod in pellentesque massa placerat duis ultricies. Mi eget mauris pharetra et. Tortor posuere ac ut consequat. Integer eget aliquet nibh praesent tristique magna. Consequat interdum varius sit amet mattis vulputate enim nulla. Vulputate odio ut enim blandit volutpat maecenas volutpat.

        Non odio euismod lacinia at. Convallis tellus id interdum velit laoreet id donec ultrices. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Integer enim neque volutpat ac. Senectus et netus et malesuada fames. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Condimentum lacinia quis vel eros. Id consectetur purus ut faucibus pulvinar. Purus faucibus ornare suspendisse sed nisi lacus. Aliquam sem et tortor consequat id porta nibh venenatis. Leo a diam sollicitudin tempor id eu. Dui vivamus arcu felis bibendum ut tristique. Id semper risus in hendrerit gravida rutrum quisque non. Phasellus egestas tellus rutrum tellus pellentesque eu. Pellentesque adipiscing commodo elit at imperdiet. Aliquam malesuada bibendum arcu vitae elementum. In ornare quam viverra orci sagittis.

        Vitae nunc sed velit dignissim sodales. Facilisi cras fermentum odio eu feugiat. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Semper risus in hendrerit gravida rutrum quisque non. Mauris cursus mattis molestie a iaculis at erat pellentesque. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Orci eu lobortis elementum nibh tellus. Accumsan lacus vel facilisis volutpat est velit. Augue lacus viverra vitae congue. Tellus in metus vulputate eu scelerisque. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. A cras semper auctor neque vitae tempus. Eget nullam non nisi est sit amet facilisis. Sit amet nisl purus in mollis nunc sed id semper. Interdum velit laoreet id donec ultrices. Lectus proin nibh nisl condimentum id. Et tortor at risus viverra adipiscing at in tellus. Auctor augue mauris augue neque gravida in fermentum et. Quis eleifend quam adipiscing vitae proin.

        Laoreet suspendisse interdum consectetur libero id faucibus. Ac auctor augue mauris augue neque gravida in fermentum et. Sed tempus urna et pharetra pharetra massa. Molestie ac feugiat sed lectus vestibulum mattis. Arcu ac tortor dignissim convallis aenean et tortor at. Eu lobortis elementum nibh tellus. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Netus et malesuada fames ac. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Condimentum lacinia quis vel eros donec ac odio tempor. Convallis tellus id interdum velit laoreet id. Adipiscing diam donec adipiscing tristique. Ornare suspendisse sed nisi lacus sed viverra tellus. Mattis enim ut tellus elementum. Sem nulla pharetra diam sit amet nisl suscipit. Sed euismod nisi porta lorem mollis aliquam ut.

        At auctor urna nunc id cursus. Duis at consectetur lorem donec massa sapien faucibus et. Tristique senectus et netus et malesuada fames ac turpis egestas. Morbi non arcu risus quis varius quam quisque id. Suspendisse interdum consectetur libero id faucibus nisl. Risus in hendrerit gravida rutrum quisque non tellus orci. Consectetur adipiscing elit ut aliquam. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Lorem mollis aliquam ut porttitor. Cursus eget nunc scelerisque viverra. Justo eget magna fermentum iaculis eu non. Volutpat diam ut venenatis tellus. Ut pharetra sit amet aliquam id diam. Mattis enim ut tellus elementum sagittis vitae et. Fermentum posuere urna nec tincidunt praesent semper. Congue quisque egestas diam in arcu cursus. Id semper risus in hendrerit gravida. Donec et odio pellentesque diam volutpat.

        Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Mattis nunc sed blandit libero. Porta lorem mollis aliquam ut porttitor leo a. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Venenatis tellus in metus vulputate eu scelerisque felis. Turpis massa tincidunt dui ut ornare. Dolor purus non enim praesent elementum facilisis leo vel. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Ipsum a arcu cursus vitae congue. Et netus et malesuada fames ac turpis egestas sed. Amet nulla facilisi morbi tempus. Ultricies lacus sed turpis tincidunt id aliquet. Ante in nibh mauris cursus mattis molestie. Morbi tincidunt augue interdum velit euismod in. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Purus in mollis nunc sed id semper risus in. Ultrices in iaculis nunc sed augue lacus viverra vitae. Amet risus nullam eget felis.
      </p>
    </>
  );
}
