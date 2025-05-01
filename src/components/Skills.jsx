import React from 'react'
import SectionTitle from './SectionTitle'
import { skills } from '../data'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <section className='py-20 align-element w-full'  id='skills'>
        <SectionTitle value='tech stack'/>
        <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {skills.map((skill)=>{
                return <SkillCard key={skill.id} {...skill}/>
            })}
        </div>
    </section>
  )
}

export default Skills