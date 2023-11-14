import styles from '@/styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
export default function Home() {
  const dispatch = useDispatch()

  return (
    <>
      <Slider/>
    </>
  )
}
