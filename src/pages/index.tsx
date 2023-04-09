import { Noto_Sans_JP } from 'next/font/google'
import Head from 'next/head'
// import Image from 'next/image'
import { Button } from '@/components/button'
import styles from '@/styles/Home.module.css'

const notoSansJp = Noto_Sans_JP({
  weight: ['400', '700'],
  preload: false,
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <Button backgroundColor="#fff" label="Next.js" />
        </div>
        <p className={notoSansJp.className}>吾輩は猫である</p>
        <p className={notoSansJp.className}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae hic
          sunt alias doloremque esse sapiente, ratione at, itaque sed
          perspiciatis officiis libero odio et ipsum, soluta nobis molestiae
          consequatur iste!
        </p>
      </main>
    </>
  )
}
