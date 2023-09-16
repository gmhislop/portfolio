import jobnerImg from "public/jobner-1.png";
import glimbleImg from "public/glimble-1.png";
import spottenImg from "public/spotten-1.png";
import dytterImg from "public/dytter-1.webp";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { TbSchool } from "react-icons/tb";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Creative Business Student",
        location: "University InHolland, Amsterdam",
        description:
            "Communication and Multimedia Design is a multidisciplinary field of study that combines elements of design, technology, and communication.",
        icon: React.createElement(TbSchool),
        date: "2014 - 2018",
    },
    {
        title: "Founder",
        location: "Alldey Studios, Amsterdam",
        description:
            "I launched my own e-commerce brand, which operated in four countries. In this role, I led and motivated a creative team encompassing designers, marketers, finance professionals, sales associates, and customer care representatives. Alldey Studios was recognized for its excellence in minimalist and environmentally conscious design.",
        icon: React.createElement(BiShoppingBag),
        date: "2018 - 2021",
    },
    {
        title: "Online Graphic and Web Designer",
        location: "Twisted Foundation, Almere",
        description:
            "While working at this foundation, I was responsible for building an end-to-end solution from scratch using WordPress, HTML5, CSS, and JavaScript, which led to a substantial boost in user engagement.",
        icon: React.createElement(RiComputerLine),
        date: "2020 - 2021",
    },
    {
        title: "Front-End Developer",
        location: "Dytter, Utrecht",
        description:
            "A healthcare booking platform relied upon by thousands of caregivers. I developed three crucial features for the mobile application using React Native and React, subsequently deploying them to production through Git and Azure.",
        icon: React.createElement(GiHealthNormal),
        date: "2022 - 2023",
    },
    {
        title: "Frontend Developer",
        location: "Label A, Amsterdam",
        description:
            "At one of the largest digital agencies in the Netherlands, I am currently responsible for implementing user interface components using a variety of front-end web technologies.",
        icon: React.createElement(FaReact),
        date: "2023 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Glimble webshop",
        description:
            "In addition to the Glimble public transportation app, the task was assigned to create a webshop as a headless solution.",
        tags: ["React", "TypeScript", "Next.js", "Shopify", "GraphQL", "Contentful", "Styled Components"],
        imageUrl: glimbleImg,
    },
    {
        title: "Jobner jobmarket",
        description:
            "While developing the app, my primary responsibilities included designing the onboarding process, authentication, and notifications. Jobner is a job marketplace that offers a variety of job opportunities for students.",
        tags: ["React Native", "TypeScript", "Styled Components"],
        imageUrl: jobnerImg,
    },
    {
        title: "Spotten parking app",
        description:
            "With the Spotten Municipality Parking app, you can check the real-time availability of parking spaces in your vicinity, eliminating the need for you to search for an open parking spot ever again.",
        tags: ["React Native", "TypeScript", "Node.js", "Styled Components"],
        imageUrl: spottenImg,
    },
    {
        title: "Dytter bookingsplatform",
        description:
            "Through the Dytter app, freelancers gain access to a system with thousands of one-time and recurring assignments at VVT (Care for the Elderly), disability care, and mental healthcare facilities.",
        tags: ["React Native", "TypeScript", "Node.js", "Sass"],
        imageUrl: dytterImg,
    },
] as const;

export const skillsData = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Git",
    "Tailwind",
    "Styled Components",
    "Three.js",
    "Firebase",
    "Contentful",
    "Redux",
    "GraphQL",
    "Framer Motion",
] as const;