import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    //we use this when the data needs to be loaded upon clicking on this component only
    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github username: {data.login}
        <img src={data.avatar_url} width={300} alt="" />
    </div>
    // <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github</div>
    
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/shrivats13')
    return response.json()
}