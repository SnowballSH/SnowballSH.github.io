import React from 'react';

export default function Project(props) {
  return (
    <div className="wrapper">
      <a
        target="_blank"
        href={props.url}
        rel="noopener noreferrer"
      >
        <div className="wrapper">
          <img src={props.img} alt={props.alt} className="project"/>
        </div>
      </a>
    </div>
  )
}