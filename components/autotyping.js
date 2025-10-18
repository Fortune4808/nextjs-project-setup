'use client';
import { TypeAnimation } from 'react-type-animation';

const AutoTyping = () => {
    return (
        <TypeAnimation
            preRenderFirstString={true}
            sequence={[
                'Software Developer',
                2000,
                'Web Developer',
                2000,
                'Fullstack Developer',
                2000
            ]}
            speed={75}
            deletionSpeed={90}
            wrapper="span"
            cursor={false}
            repeat={Infinity}
        />
    );
};

export default AutoTyping;