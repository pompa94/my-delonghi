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

// const [listChange,setListChange] = 

// 필터
const filterList = list.filter(
    (item)=>{
        item.color === colorChange
    }
)

  // useCallback
  // 데이터 통신으로 가져오기
  const fetchData = useCallback(
    ()=>{
      /* fetch 안에 결로 입력 index.html의 위치에서 찾아가야됨 */
      fetch('./data.json')
      .then(response => response.json())
      .then(data => setList(data))
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
                colorChange={mycolor=>setList(mycolor)}
                />
                <div id="product">
                    <ul>
                        {
                            // 반복문
                            // AppointData.map(
                            // list.map(
                            filterList.map(
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