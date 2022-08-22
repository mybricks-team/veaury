import AAVue from './AA.vue'
import BasicVue from "./Basic.vue";
import DDVue from './DD'
import EEVue from './EE'
import {applyPureVueInReact, getReactNode, applyVueInReact, getVNode} from 'veaury'
import {Component, useRef, useEffect, useState, useMemo} from 'react'
import {h, Fragment, Text} from 'vue'

const AA = applyPureVueInReact(AAVue)
const Basic = applyPureVueInReact(BasicVue)

// console.log(couldBeClass(BB))
function TT() {
  return <div>TTTTT</div>
}

export default function (props) {
  const ref = useRef(null)
  const vModelAa = useState(Math.random)
  const [aa, setAa] = vModelAa
  const [style, setStyle] = useState({color: 'red'})
  useEffect(() => {
    console.log(44444, ref.current)
    // setInterval(() => {
    //   setAa(Math.random())
    // }, 1000)
  }, [])
  useEffect(() => {
    console.log('AA props updated')
    // setInterval(() => {
    //   setStyle({color: 'blue'})
    // }, 1000)
  }, [props])
  function changeStyle(color) {
    setStyle({
      color
    })
  }
  return <div>
    <AA>
      <Basic vnode={getVNode(<div><TT/></div>)}></Basic>
    </AA>
    <button onClick={() => changeStyle('red')}>set red</button><button onClick={() => changeStyle('blue')}>set blue</button>
  </div>
}
