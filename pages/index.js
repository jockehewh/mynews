import Navbar from '@/components/Navbar';
import styles from '@/styles/Navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
export default function Home() {
  const dispatch = useDispatch()

  return (
    <>
      <Slider/>
    </>
  )
}
