import React from "react";
import {
  FaRegClock,
  FaTools,

  FaSmile,
  FaSearch,
  FaICursor,
  
  FaInbox
} from "react-icons/fa";

import profilepic from '../static/fred.jpg'

export const Data = [
  {
    icon: <FaRegClock />,
    title: "save time",
    description:
    "we post only dev related jobs. No need to search through plenty unrelated jobs just to find a dev job"
     
  },
  {
    icon: <FaTools />,
    title: "No scam",
    description: "We post only verified dev jobs"
      
  },

  {
    icon: <FaSmile />,
    title: "Best Experience",
    description:
      "We let your job reach the best developers"
  }
];
export const how = [
  {
    icon: <FaSearch />,
    title: "Browse available jobs",
    description: "Relax and browse through the available jobs on our platform"
  },
  {
    icon: <FaICursor />,
    title: "Apply to jobs the that meets your experience",
    description:
      "Feel free to apply to as many jobs that meets your experience"
  },

  {
    icon: <FaInbox />,
    title: "Give Us Feedback",
    description: "Leave us a feed back when neccessary"
  }
];

export const heading = {
  title:
    "Apply to that dream developer job today and get hired. Make that dream a reality"
};
export const subtxt = {
  title:
    "AchifDevjobs makes the latest dev jobs readily available to you"
};
export const howitworkssubtxt = {
  title:
    "At AchifDevJobs we help you secure your dream dev job by posting the latest jobs from the right employers ."
};

export const about = {
  body:
    "AchifDevJobs is a job board that  seeks to make dev job hunting an easy task."
};

export const team = {
  title:
    "We are a team of software of engineers who want to make access to dev jobs an easy one "
};

export const teamData =[{
  picture:profilepic,
  name:'Fred Achi',
  position:'Founder',
  description:"Fred is a self taught web developer. After graduating with a degree in Computer Engineering from the Kwame Nkrumah university of Science and Technology in May 2018, he decided to focus on web development "
}]

export const aboutus = {
  title:
    "Get to know the brains behind AchifDevJobs",
    body:"Dev job hunting has never been this easy!!!!"
};

export const contactus ={
  phone:'+233548480707',
  email:'achifdevjob@gmail.com',
  address:'Adenta Accra, Ghana',
  description:" How's it going? Got a special request, Want to see your job listed on our platform, we are more than happy yo hear from you. "
}