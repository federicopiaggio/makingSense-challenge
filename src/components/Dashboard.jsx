import React from "react";
import GeneralCard from "./GeneralCard";

const Dashboard = (props) => {
  const PrincipalCards = [
    {
      key: 1,
      modalTitle: "Facebook followers",
      classBorder: "border facebook",
      status: "green",
      svgIcon: props.FacebookIcon,
      userName: "@nathanf",
      generalNumber: 1987,
      todayNumber: 12,
      generalDesc: "Followers",
    },
    {
      key: 2,
      modalTitle: "Twitter followers",
      classBorder: "border twitter",
      status: "green",
      svgIcon: props.TwitterIcon,
      userName: "@nathanf",
      generalNumber: 1044,
      todayNumber: 99,
      generalDesc: "Followers",
    },
    {
      key: 3,
      modalTitle: "Instagram followers",
      classBorder: "border instagram",
      status: "green",
      svgIcon: props.InstagramIcon,
      userName: "@realnathanf",
      generalNumber: 11000,
      todayNumber: 1099,
      generalDesc: "Followers",
    },
    {
      key: 4,
      modalTitle: "Youtube subscribers",
      classBorder: "border youtube",
      status: "red",
      svgIcon: props.YoutubeIcon,
      userName: "Nathan F.",
      generalNumber: 8239,
      todayNumber: 144,
      generalDesc: "Subscribers",
    },
  ];

  return (
    <div className='general-container'>
      {" "}
      {PrincipalCards.map((card) => (
        <GeneralCard
          key={card.key}
          card={card}
          OpenModal={props.OpenModal}
        ></GeneralCard>
      ))}
    </div>
  );
};

export default Dashboard;
