import React from 'react'
import { useState } from 'react';
import "./works.scss"


const Works = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "",
      title: "Social Media React App",
      desc:
        "This is a complete social media react appication. You can register, login, share posts, make friends, and react friend's posts.",
      img: "projects/React-app/self_profile.jpg",
    },
    {
      id: "2",
      icon: "",
      title: "To Do List React App",
      desc:
        "This is a basic to do list react app. You can use it for every essential purpose.",
      img:"projects/React-app/to_do_list_react_app.jpg",
    },
    {
      id: "3",
      icon: "",
      title: "Movie App",
      desc:
        "This a javascript movie app using external API. You can search your favorite movies and get updated. ",
      img:"projects/javascript/movie_app.jpg"
        ,
    },
  ];

 const handleClick = (way)=>
 {
   way === "left"?
   setCurrentSlide(currentSlide > 0 ? currentSlide - 1: 2) :
   setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1  : 0)
 }


    return (
      <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
    )
}

export default Works
