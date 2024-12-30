import React from 'react'
import Calender from '../assets/calender.png'
import Recipe from '../assets/recipe.png'
import Hackerthon from '../assets/hackerthon.png'
import Expense from '../assets/expense.png'
import weather from '../assets/weather.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Calendr',
          desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
          image: Calender,
          live: "friendly-sawine-236a29.netlify.app",
          github: "https://github.com/mahin13747/Calender.git"
        },
        {
          title: 'Recipe App',
          desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
          image: Recipe,
          live: "https://forec.netlify.app",
          github: "https://github.com/mahin13747/Food-Recipe.git"
        },
        {
          title: '2048 Game',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Hackerthon,
          live: "capable-muffin-ddd3d0.netlify.app",
          github: "https://github.com/mahin13747/hackthon.git"
        },
        {
          title: 'Expensive splitter',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Expense,
          live: "expensivespl.netlify.app",
          github: "https://github.com/mahin13747/Expense-Finance-Tracker.git"
        },
        {
          title: 'Weather App',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: weather,
          live: "spectacular-youtiao-f47d57.netlify.app",
          github: "https://github.com/mahin13747/Weather-App.git"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
