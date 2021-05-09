import React from 'react'
import './style.scss';
import Pages from '../../Components/HOC/Page/index'
import Slider from '../Home/Components/Carousel/index'
import WorkExperience from '../Home/Components/WorkExperience/index'
import Features from '../Home/Components/MainFeatures/index'

class Home extends React.Component{
    render() {
        return(
                <>
                    <Pages showHeader>
                        <Slider />
                        <WorkExperience />
                        <Features />
                    </Pages>
                </>
        );
    }
}

export default Home;