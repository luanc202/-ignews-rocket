import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
        <Head>
            <title>Posts | Ignews</title>
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                <a href='#'>
                    <time>29 de Agosto de 2022</time>
                    <strong>Creating a & wosdjh osdhf ofsdfhsio</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos repellendus nesciunt impedit mollitia laboriosam ratione! Sequi perspiciatis, vitae obcaecati facilis aspernatur pariatur fugiat et nisi vero quibusdam sed earum?</p>
                </a>
                <a href='#'>
                    <time>29 de Agosto de 2022</time>
                    <strong>Creating a & wosdjh osdhf ofsdfhsio</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos repellendus nesciunt impedit mollitia laboriosam ratione! Sequi perspiciatis, vitae obcaecati facilis aspernatur pariatur fugiat et nisi vero quibusdam sed earum?</p>
                </a>
                < a href='#'>
                    <time>29 de Agosto de 2022</time>
                    <strong>Creating a & wosdjh osdhf ofsdfhsio</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos repellendus nesciunt impedit mollitia laboriosam ratione! Sequi perspiciatis, vitae obcaecati facilis aspernatur pariatur fugiat et nisi vero quibusdam sed earum?</p>
                </a>
            </div>
        </main>
        </>
    );
}