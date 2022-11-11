import React from 'react';
import Hero from '../components/hero/Hero';
import Features from '../components/Features/Features'
import Content from '../components/Content/Content'
import { heroOne, heroTwo, heroThree } from '../data/HeroData';
import Footer from '../components/Footer/Footer';

//Hero Feature Content Carrousel


const Home = () => {
    return (
        <>
    <Hero />
    <Features />
    <Content {...heroOne} />
    <Content {...heroTwo}/>
    <Content {...heroThree}/>
    
    <Footer />
    </>
    )

}
export default Home