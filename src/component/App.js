import React, { useState,useCallback,useEffect } from "react";
import ReactDOM from 'react-dom/client';

// component연결
import Nav from './Nav'
import MainTop from "./MainTop";
import Addfilter from './Addfilter'
import AddList from './AddList'
import Footer from './Footer'
// 소스
// import AppointData from '../data.json'
// css
import './App.css'


function App(){
const [list,setList] = useState([])

const [original,setOriginal] = useState()
// console.log(list)

const [priceFilter,setPriceFilter] = useState(900000)




// 필터


  // useCallback
  // 데이터 통신으로 가져오기
  const fetchData = useCallback(
    ()=>{
      /* fetch 안에 결로 입력 index.html의 위치에서 찾아가야됨 */
      fetch('./data.json')
      .then(response => response.json())
      .then(data => 
        {setList(data),
        setOriginal(data)})
    },[]
  )

  // useEffect
  useEffect(()=>{fetchData()},[fetchData])

    return(
        <div id="wrap">
            <Nav />
            <MainTop />
            <div id="all">
                <Addfilter 
                handleFilter={(type,filter)=>{
                    const result = original.filter((item)=> item[type] === filter)
                    setList(result)
                    }}
                priceFilter={priceFilter}
                onPriceChange={myprice=>setPriceFilter(myprice)}
                />
                <div id="product">
                    <ul>
                        {
                            // 반복문
                            // AppointData.map(
                            // list.map(
                            list.map(
                                (appointment)=>(<AddList 
                                key={appointment.id}
                                appointment={appointment}
                                // work변경
                                />)
                            )
                        }
                        
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default App