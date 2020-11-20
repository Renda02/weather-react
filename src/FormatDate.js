import React from "react";

const FormatDate = (props) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[props.date.getMonth()]; 
  let dateOfMonth = props.date.getDate();
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let year = props.date.getFullYear();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let min = props.date.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }

  return (
    <div className="date">
      {day}, {dateOfMonth} {month} {year}<br/>
      <small>Last Updated:</small>{hours}:{min}
    </div>
  );
};

export default FormatDate;
