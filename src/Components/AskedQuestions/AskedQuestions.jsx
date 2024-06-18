import React, { useState } from 'react';
import styles from './AskedQuestions.module.css';
import askImg from '../../assets/images/askedQuestion.png';

const AskedQuestions = () => {
    const [isOpen, setIsOpen] = useState(null)
    const questions = [
        {
            id:1,
            question:'Why choose our medical for your family? ',
            answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit nihil deleniti enim quas dignissimos, fuga voluptates earum autem provident quasi veritatis, asperiores, tempore perspiciatis repudiandae atque tempora illum? Nostrum?"

        }, 
        {
            id:2,
            question:'Why we are different from others?',
            answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit nihil deleniti enim quas dignissimos, fuga voluptates earum autem provident quasi veritatis, asperiores, tempore perspiciatis repudiandae atque tempora illum? Nostrum?"

        },
        {
            id:3,
            question:'Trusted & experience senior care & love',
            answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit nihil deleniti enim quas dignissimos, fuga voluptates earum autem provident quasi veritatis, asperiores, tempore perspiciatis repudiandae atque tempora illum? Nostrum?"

        },
        {
            id:4,
            question:'How to get appointment for emergency ',
            answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit nihil deleniti enim quas dignissimos, fuga voluptates earum autem provident quasi veritatis, asperiores, tempore perspiciatis repudiandae atque tempora illum? Nostrum?"

        },
    ];

    const toggleAcc = (index) => {
        setIsOpen(isOpen === index ? null : index)
    }

  return (
    
    <div className={styles.askedMain}>
        <p> Get Your Answer </p>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.innerAsk} >
           <div> <img src={askImg} alt="Ask Questions" /></div>
           
            <div style={{width:"400px"}}>
                
        {
            questions.map((que, index) => (
                <div  onClick={() => toggleAcc(index)} key={que.id}>
                <div className={styles.title}>
                  <h4>{que.question}</h4>
                  <span>{isOpen === index ? '-' : '+'}</span>
                </div>
                {isOpen === index && <div>{que.answer}</div>}
              </div>
            ))
        }
      </div>
           
        </div>
    </div>
  )
}

export default AskedQuestions