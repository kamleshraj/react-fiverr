import React from 'react'

const SectionTitle = ({title}) => {
  const styledTitle={
    fontSize:'30px',
    marginBottom:'15px'
  }
  return (
    <>
        <h3 style={styledTitle}>{title}</h3>
    </>
  )
}

export default SectionTitle