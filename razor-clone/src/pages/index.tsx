import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Seo from '../components/seo/seo'
import Container from '../components/ui/container'
import HeroSliderBlock from '../components/hero/hero-slider-block'

const Home: NextPage = () => {
  return (
    <>
     <Seo
                title="Babuska Store"
                description="Fastest E-commerce store built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
                path="/"
            />
                        <Container>
                        <HeroSliderBlock
                    heroBanner={heroBanner}
                    className={`mb-7 mt-6`}
                    contentClassName="p-5 sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24"
                />
                          </Container>

    </>
  )
}

export default Home
