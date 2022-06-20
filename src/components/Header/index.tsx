import styles from './styles.module.scss'
import Image from 'next/image';
import { SignInButton } from '../SignInButton/index';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.haderContent}>
                <Image 
                src="/images/logo.svg" 
                alt="ig.news" 
                width='100%'
                height='100%'
                />
                <nav>
                    <a className={styles.active} href="">Home</a>
                    <a href="">Posts</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}