import React from 'react'
import "./portfoliolist.scss"

export const Portfoliolist = ({title, id, setSelected, active}) => {
    return (
        <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
    )
}
