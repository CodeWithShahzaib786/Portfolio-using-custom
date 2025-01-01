import React from 'react'
import Heading from './Heading'
import Card from './Card'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = [
    {
        id: 0,
        title: "Tapal Landing Page",
        des: "Html and CSS base landing page",
        img: "/landing page tapal.JPG",
        tags: ["Html" , "CSS","Node"],
    },
    {
        id: 1,
        title: "Resume Builder",
        des: "Html, CSS and Typescript base resume builder project",
        img: "/resume builder screenshot.JPG",
        tags: ["Html" , "CSS" , "Typescript","Node"],
    },
    {
        id: 2,
        title: "Simple CLI Calculator",
        des: "Typescript base Simple Cli calculator",
        img: "/simple calculator.JPG",
        tags: ["Typescript", "Node"],
    },
    {
        id: 3,
        title: "Currency Converter",
        des: "Typescript base Currency converter project",
        img: "/currency converter.JPG",
        tags: ["Typescript", "Node"],
    },
    {
        id: 4,
        title: "Student Management System OOP",
        des: "Typescript base Student Management System OOP project ",
        img: "/sms system.JPG",
        tags: ["Typescript", "Node"],
    },
    {
        id: 5,
        title: "Todo List",
        des: "Typescript base todo-list project",
        img: "/todo-list.JPG",
        tags: ["Typescript", "Node"],
    },

]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title="My Projects"/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.des}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
