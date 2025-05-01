import React from 'react'

const SectionTitle = ({value}) => {
  return (
    <div className='border-b border-gray-200 pb-5'>
        <h2 className='text-3xl font-medium tracking-wider capitalize text-gray-100'>{value}</h2>
    </div>
  )
}

export default SectionTitle