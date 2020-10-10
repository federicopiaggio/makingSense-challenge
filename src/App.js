
import React, { Component } from 'react';
import DailyCard from "./components/DailyCard";
import GeneralCard from "./components/GeneralCard";
import FacebookIcon from "./images/icon-facebook.svg";
import InstagramIcon from "./images/icon-instagram.svg";
import TwitterIcon from "./images/icon-twitter.svg";
import YoutubeIcon from "./images/icon-youtube.svg";


export default class App extends Component {


  render() {
    return (
      <div className="app">
          <div className="general-container">
            <GeneralCard
              classBorder="border facebook"
              status= "green"
              svgIcon={FacebookIcon}
              userName="@nathanf"
              generalNumber={1987}
              todayNumber={12}
              generalDesc="Followers"
              ></GeneralCard>
            <GeneralCard
              classBorder="border twitter"
              status= "green"
              svgIcon={TwitterIcon}
              userName="@nathanf"
              generalNumber={1044}
              todayNumber={99}
              generalDesc="Followers"
            ></GeneralCard>
            <GeneralCard              
              classBorder="border instagram"
              status= "green"
              svgIcon={InstagramIcon}
              userName="@realnathanf"
              generalNumber={11000}
              todayNumber={1099}
              generalDesc="Followers"
            ></GeneralCard>
            <GeneralCard          
              classBorder="border youtube"
              status= "red"
              svgIcon={YoutubeIcon}
              userName="Nathan F."
              generalNumber={8239}
              todayNumber={144}
              generalDesc="Subscribers"
            ></GeneralCard>
          </div>
          <div className="daily-container">
        <DailyCard
          dailyDesc="Page Views"
          status="green"
          svgIcon={FacebookIcon}
          dailyNumber={87}
          dailyPercent={3}
        ></DailyCard>
        <DailyCard
          dailyDesc="Likes"
          status= "red"
          svgIcon={FacebookIcon}
          dailyNumber={52}
          dailyPercent={2}
        ></DailyCard>
        <DailyCard
          dailyDesc="Likes"
          status= "green"
          svgIcon={InstagramIcon}
          dailyNumber={5462}
          dailyPercent={2257}
        ></DailyCard>
        <DailyCard
          dailyDesc="Profile Views"
          status= "green"
          svgIcon={InstagramIcon}
          dailyNumber={52}
          dailyPercent={1375}
        ></DailyCard>
        <DailyCard
          dailyDesc="Retweets"
          status= "green"
          svgIcon={TwitterIcon}
          dailyNumber={117}
          dailyPercent={303}
          ></DailyCard>
        <DailyCard
          dailyDesc="Likes"
          status= "green"
          svgIcon={TwitterIcon}
          dailyNumber={507}
          dailyPercent={553}
        ></DailyCard>
        <DailyCard
          dailyDesc="Likes"
          status= "red"
          svgIcon={YoutubeIcon}
          dailyNumber={107}
          dailyPercent={19}
        ></DailyCard>
        <DailyCard
          dailyDesc="Total Views"
          status= "red"
          svgIcon={YoutubeIcon}
          dailyNumber={1407}
          dailyPercent={12}
        ></DailyCard>
      </div>
      </div>
    );
  }
}


