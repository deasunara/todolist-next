"use client"
import React, { useState } from 'react'



export async function getStaticProps() {
    const res = await fetch('http://localhost:3001/task')
    const dataUser = await res.json()
    console.log('data >>>>>>>>' ,dataUser)
    return {
        props: {
            data: dataUser,
        },
        }
    }

    interface HomeProps {
        dataUser: {
            id: number;
            nama: string;
            job: string;
            favorite_color: string;
        }[];
    }



const AddTable = (props: HomeProps) => {
const data = props
const [userData, setUserData] = useState(data)
  return (
   <table>
        <thead>
            <tr>
                <th></th>
                <th>nama</th>
                <th>job</th>
                <th>favorite color</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                {userData.map((user) => (
                    <td key={user.id}>{user.id}</td>
                ))}
                <td>1</td>
                <td>dea</td>
                <td>develop</td>
                <td>black</td>
            </tr>
        </tbody>
   </table>

  );
}
export default AddTable