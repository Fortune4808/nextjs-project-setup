"use client";
import BackgroundSlider from 'react-background-slider';

const Background = () => {
    return (
        <BackgroundSlider
            images={[
                "/all-images/bg-pix/bg-1.jpg",
                "/all-images/bg-pix/bg-2.jpg",
                "/all-images/bg-pix/bg-3.jpg"
            ]}
        />
    )
}

export default Background
