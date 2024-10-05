import React from 'react'
import Image from "../../assets/images/player_silhouette.webp"

export const Players = () => {
    return (
        <div className=" size-full flex flex-col lg:flex-row text-primary">
            <section className="flex justify-center items-center w-full lg:w-1/2 h-1/2 lg:h-full">
                <div className="w-3/5 lg:w-[35vw] h-3/5 bg-black rounded-2xl flex flex-col justify-center items-center gap-4 p-4 shadow-sm shadow-accent">
                    <h1 className="font-bold text-2xl lg:text-5xl flex gap-4 justify-center items-center">Add Player</h1>
                    <div className='flex w-full gap-4 flex-col lg:flex-row '>
                        <div className='flex w-full lg:w-1/2 h-1/2 lg:h-full justify-center items-center'>
                            <img className='flex justify-center items-center size-60 border-2 border-primary bg-accent' src={Image} alt="Player silhouette"></img>
                        </div>
                        <div className='flex w-full lg:w-1/2 h-1/2 lg:h-full justify-center items-center'>
                            <form className="flex flex-col gap-4 text-text">
                                <label htmlFor="real-name">Real Name</label>
                                <input className="bg-background text-primary active:ring-primary" type="text" id="real-name" name="real-name"/>
                                <label htmlFor="alias">Alias</label>
                                <input className="bg-background text-primary " type="text" id="alias" name="alias"/>
                                <label htmlFor="team">Team</label>
                                <select className='flex flex-col w-full justify-center items-center gap-4 bg-transparent border-2 border-white text-center'>
                                    <option className='w-2/3 text-center'>Team</option>
                                </select>
                                <label htmlFor="team">Country</label>
                                <select className='flex flex-col w-full justify-center items-center gap-4 bg-transparent border-2 border-white text-center'>
                                    <option className='w-2/3 text-center'>Country</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <button className="border-2 border-accent rounded-full w-1/3 h-8">Create</button>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center w-full lg:w-1/2 h-1/2 lg:h-full gap-4">
                <h1 className="font-bold text-2xl lg:text-5xl flex gap-4 justify-center items-center">Current Players</h1>
                <table className="w-[95%] h-2/3 border border-accent">
                    <tr>
                        <th>Avatar</th>
                        <th>Alias</th>
                        <th>Real Name</th>
                        <th>Team</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>Freshie</td>
                        <td>Adam Paterson</td>
                        <td>Boss</td>
                        <td>Ca</td>
                    </tr>

                    </table> 
            </section>
        </div>
    )
}
