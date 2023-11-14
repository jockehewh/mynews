import styles from '@/styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, addName } from '@/reducers/example';
import { useState } from 'react';
export default function Home() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.value)
  const [name, setName] = useState("")
  return (
    <>
      
    </>
  )
}
