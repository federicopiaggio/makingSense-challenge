import React from "react";
import DailyCard from "./DailyCard";

const Overview = (props) => {
  const secundaryCard = [
    {
      key: 1,
      dailyDesc: "Page Views",
      status: "green",
      svgIcon: props.FacebookIcon,
      dailyNumber: 87,
      dailyPercent: 3,
    },
    {
      key: 2,
      dailyDesc: "Likes",
      status: "red",
      svgIcon: props.FacebookIcon,
      dailyNumber: 52,
      dailyPercent: 2,
    },
    {
      key: 3,
      dailyDesc: "Likes",
      status: "green",
      svgIcon: props.InstagramIcon,
      dailyNumber: 5462,
      dailyPercent: 2257,
    },
    {
      key: 4,
      dailyDesc: "Profile Views",
      status: "green",
      svgIcon: props.InstagramIcon,
      dailyNumber: 52,
      dailyPercent: 1375,
    },
    {
      key: 5,
      dailyDesc: "Retweets",
      status: "green",
      svgIcon: props.TwitterIcon,
      dailyNumber: 117,
      dailyPercent: 303,
    },
    {
      key: 6,
      dailyDesc: "Likes",
      status: "green",
      svgIcon: props.TwitterIcon,
      dailyNumber: 507,
      dailyPercent: 553,
    },
    {
      key: 7,
      dailyDesc: "Likes",
      status: "red",
      svgIcon: props.YoutubeIcon,
      dailyNumber: 107,
      dailyPercent: 19,
    },
    {
      key: 8,
      dailyDesc: "Total Views",
      status: "red",
      svgIcon: props.YoutubeIcon,
      dailyNumber: 1407,
      dailyPercent: 12,
    },
  ];
  return (
    <div className='daily-container'>
      <h2>Overview - Today</h2>
      {secundaryCard.map((card) => (
        <DailyCard key={card.key} card={card}></DailyCard>
      ))}
    </div>
  );
};

export default Overview;
