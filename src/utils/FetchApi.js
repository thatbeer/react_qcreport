

import React from 'react'

export const fetchGetApi = async (props) => {
    const { links , input } = props
    const response = await fetch(links).then((res) => res.json())
  return response
}

export const fetchPostApi = async (props) => {
    const { links , input } = props
    const response = await fetch(links , {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(input)
    }).then((res) => res.json())
    return response
}

