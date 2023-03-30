import React from 'react'

const About = () => {
  return (
    <div name="about" 
    className='w-full h-screen bg-gradient-to-b from-gray-800 
    to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            
            <p className='text-xl mt-4'>
            Hello! Please allow me to introduce myself. Feeling unsatisfied with the monotony of my current job as a Registered Dental Hygienist, I began searching for a career that would offer me the opportunity to solve problems, think critically, and be creative. 
            After exploring different options, I've stumbled upon front-end web development and was instantly captivated by the idea of working on projects with a team, with a structured hierarchy in place. 
            Although I'm new to the field, I'm eager to dive in and contribute to real-world projects that address pressing issues faced by companies.
            I am hoping to learn and grow under the guidance of a supportive mentor and alongside like-minded colleagues. 
            My goal is to expand my skill set by exploring back-end development and becoming a well-rounded developer.
            </p>
            
        </div>
    </div>
  )
}

export default About