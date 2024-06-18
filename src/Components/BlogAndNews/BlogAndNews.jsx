import React from 'react';
import styles from './BlogAndNews.module.css'
import blogImg from '../../assets/images/blogImg.png';
import doctorIcon from '../../assets/images/doctorIcon.png';

const BlogAndNews = () => {
  return (
    <div className={styles.blogNews}>
        <p>Blog & News</p>
        <h3>Read Our Latest News</h3>

        <div className={styles.tipInner} >
        <div className={styles.tipProtect}>
            <img src={blogImg} alt="Tip Protect" />
            <ul className={styles.listTop}>
                <li>Medical</li>
                <li> | </li>
                <li>March 31, 2022</li>
            </ul>
            <p>
            6 Tips To Protect Your Mental Health When You’re Sick
            </p>
            <ul className={styles.listTip}>
                <li><img src={doctorIcon} alt='Doctor Tip' /></li>
                <li>Rebecca Lee</li>
            </ul>
        </div>
        <div className={styles.tipProtect}>
            <img src={blogImg} alt="Tip Protect" />
            <ul className={styles.listTop}>
                <li>Medical</li>
                <li> | </li>
                <li>March 31, 2022</li>
            </ul>
            <p>
            6 Tips To Protect Your Mental Health When You’re Sick
            </p>
            <ul className={styles.listTip}>
                <li><img src={doctorIcon} alt='Doctor Tip' /></li>
                <li>Rebecca Lee</li>
            </ul>
        </div>
        <div className={styles.tipProtect}>
            <img src={blogImg} alt="Tip Protect" />
            <ul className={styles.listTop}>
                <li>Medical</li>
                <li> | </li>
                <li>March 31, 2022</li>
            </ul>
            <p>
            6 Tips To Protect Your Mental Health When You’re Sick
            </p>
            <ul className={styles.listTip}>
                <li><img src={doctorIcon} alt='Doctor Tip' /></li>
                <li>Rebecca Lee</li>
            </ul>
        </div>
        </div>

    </div>
  )
}

export default BlogAndNews