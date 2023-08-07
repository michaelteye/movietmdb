import React, { useState } from 'react'
import LatestTv from './Latest/LatestTv'
import LatestMovie from './Latest/LatestMovie'
import FetchTrendsQuery from '../hooks/getAllTrends'

export default function LatestMovieTv() {
    const [activeButton, setActiveButton] = useState('Movies')

    const buttonStyle = 'rounded bg-[#1a212d] ml-2 my-2 px-2 text-center text-[#605f62] h-[30px] font-light text-[12px]'
    const buttonStyle1 = 'rounded bg-[#ffae06] text-white ml-2 my-2 px-2 text-center h-[30px] font-light text-[12px] w-[70px]'
    const detailstyle = 'rounded bg-[#1a212d] ml-2 my-2 px-2 text-center text-[#605f62] h-[30px] font-light text-[12px]'
    const tvstyle = 'rounded bg-[#1a212d] ml-2 my-2 px-2 text-center text-[#605f62] h-[30px] font-light text-[12px] w-[70px] justify-center'

    const handleButton = (ButtonName:any)=>{
        setActiveButton(ButtonName)
    }
return (
        <>
            <div className='flex'>
                    <p className='my-2 ml-2 text-white font-extrabold text-[24px]'>LATEST</p>
                    <button 
                    onClick={()=>handleButton('Movies')}
                    className={activeButton === 'Movies' ? buttonStyle1 : buttonStyle}>Movies</button>
                    <button
                    onClick={()=>handleButton('Tv')}
                    className={activeButton === 'Tv' ? buttonStyle1 : tvstyle }>Tv SHow</button>
                        <div className='pl-[780px]'> 
                                <a href="">
                                    <button className={detailstyle}>
                                        More
                                    </button>
                                </a>
                        </div>
            </div>
                    <div className="flex flex-wrap">
                        { activeButton === 'Movies' && <LatestMovie/> }
                        { activeButton === 'Tv' && <LatestTv/> }
                    </div>
        </>
  )
}
