import React from 'react'
import styles from './left.module.scss'
import LogImg from "../../../../assets/left.png"
import Button from '../../../../components/atoms/button'
import { useNavigate } from 'react-router-dom';
function Left() {
  const navigate = useNavigate();
  const handle= ()=>{
    navigate('/signup');
  }
  
  return (
    <section className={styles.left}>
      <img src={LogImg} alt="Man"/>

      <div>
        <h1>Keep life simple</h1>
        <p>Store all your notes in a simple and <br/>
           intuitive app that helps you enjoy what is <br/>
            most important in life.</p>
      </div>
      <Button text="SignUp" icon='uil:signin' handleClick={handle} />
    </section>
  )
}

export default Left
