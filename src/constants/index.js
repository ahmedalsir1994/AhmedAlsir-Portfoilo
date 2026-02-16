import { m } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  php,
  laravel,
  mysql,
  html,
  css,
  tailwind,
  nodejs,
  git,
  figma,
  nld,
  birba,
  eventreg,
  booking,
  todoapp,
  resturentmenu,
  scw,
  cbr,
  ghso,
  realtime,
  threejs,
} from "../assets";
import { b } from "framer-motion/client";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Laravel & PHP Backend",
    icon: mobile,
  },
  {
    title: "WordPress & CMS Architect",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Northline Of Development",
    icon: nld,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - present",
    points: [
      "Developing and maintaining custom web applications using PHP, Laravel, WordPress, and modern JavaScript technologies.",
      "Designing and building scalable CMS platforms.",
      "Integrating secure payment gateways.",
      "Collaborating closely with designers, project stakeholders, and team members to deliver responsive, high performance, and cross browser compatible applications while conducting code reviews and ensuring clean, maintainable architecture.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Birba",
    icon: birba,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Present",
    points: [
      "Developing and maintaining web applications using Laravel and Wordpress and other related technologies.",
      "Collaborating with cross-functional teams including designers, Marketing manager, and other teams to create high-quality products.",
      "Manage Microsoft 365 Office (emails and SharePoint).",
      "Provide daily assistance for the team.",
    ],
  },
  {
    title: "Technical Support",
    company_name: "Realtime Techniques",
    icon: realtime,
    iconBg: "#E6DEDD",
    date: "Sep 2019 - Aug 2021",
    points: [
      "Providing daily assistance for the Head Office and Warehouse for PC builds and software support.",
      "Printer setup, software installation and configuration (package Microsoft Office 365, browsers, ERP systems).",
      "Identity and access management for all existing and new practitioners.",
      "Participates in maintaining licensing information for all corporate desktops.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Event System",
    description:
      "Web-based platform that allows users to search, manage event submissions, providing a convenient and efficient solution for event management needs.",
    tags: [
      {
        name: "laravel",
        color: "red-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: eventreg,
    source_code_link: "https://github.com/ahmedalsir1994/EventManagement-App",
    live_link: "https://example.com/event-system",
  },
  {
    name: "Booking App",
    description:
      "Web application for booking appointments and managing schedules, manage their bookings, and receive notifications for upcoming appointments.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: booking,
    source_code_link: "https://github.com/ahmedalsir1994",
    live_link: "https://example.com/booking-app",
  },
  {
    name: "Todo List App",
    description:
      "A web application that allows users to create, manage, and track their tasks efficiently, also providing status for upcoming tasks, pending tasks, and completed tasks.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: todoapp,
    source_code_link: "https://github.com/ahmedalsir1994/Todo-app",
    live_link: "https://example.com/todo-app",
  },
   {
    name: "Menu Management System",
    description:
      "A comprehensive menu management system that allows users to manage and organize their menus efficiently.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: resturentmenu,
    source_code_link: "https://github.com/ahmedalsir1994/ResturentMenu-app",
    live_link: "https://example.com/menu-system",
  },
  {
    name: "Saudi Climate Week",
    description:
      "A website that provides information about the Saudi Climate Week event, including event details, schedule, and registration.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: scw,
    source_code_link: "https://saudiclimateweek.com",
    live_link: "https://saudiclimateweek.com",
  },
  {
    name: "Green Hydrogen Summit",
    description:
      "A website that provides information about the Green Hydrogen Summit event, including event details, schedule, and registration.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: ghso,
    source_code_link: "https://greenhydrogensummitoman.com/",
    live_link: "https://greenhydrogensummitoman.com/",
  },
  {
    name: "Circular Business Review",
    description:
      "A Magazine website that provides news and interviews about the Circular Business Review, including event details, schedule, and registration.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: cbr,
    source_code_link: "https://www.circularbusinessreview.com/",
    live_link: "https://www.circularbusinessreview.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
