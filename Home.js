import React from 'react'
import {useEffect } from 'react'


function Home() {
    useEffect(()=> {
     axios.get('')
     .then(res =>  )
     .catch(err => console.log(err))
    }, [])

    return(
        <div className='container mt-5'>
            <table className='table'>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}