import React, { useState } from 'react'
import "./portfolio.scss"
import { Portfoliolist } from '../portfolioList/Portfoliolist'

import { useEffect } from 'react'
import {
  featuredPortfolio,
  reactPortfolio,
  javaScriptPortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data"



const Portfolio = () => {

  const [selected, setSelected]= useState(["featured"])
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "react",
      title: "React App",
    },
    {
      id: "java",
      title: "JavaScript",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];


  useEffect(() => {

    switch(selected) {
      case "featured":
        setData(featuredPortfolio)
        break;
      case "react":
        setData(reactPortfolio)
        break;

        case "java":
          setData(javaScriptPortfolio)
        break;

        case "design":
          setData(designPortfolio)
        break;

        case "content":
          setData(contentPortfolio)
        break;
      default:
        setData(featuredPortfolio)
    }
 
  }, [selected]);



    return (
      <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) =>(
          <Portfoliolist title={item.title}
          setSelected={setSelected}
          active= {selected === item.id}
          id={item.id}
           />
        ))}
      </ul>
      <div className="container">
        {data.map((d)=> (
          <div className='item'>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
    )
}

export default Portfolio
