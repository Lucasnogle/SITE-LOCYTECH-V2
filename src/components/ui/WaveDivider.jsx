import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const WaveDivider = ({ lightFill, darkFill, type = 'wave' }) => {
    const { theme } = useTheme();

    // Fallback to lightFill if no darkFill is provided
    const fill = theme === 'dark' ? (darkFill || lightFill) : lightFill;

    // Radically different geometric shapes for distinct section transitions.
    // They all start at X=0 and end at X=1200, bottom filled to Y=120
    const paths = {
        'wave': "M0,60 Q150,90 300,60 T600,60 T900,60 T1200,60 L1200,120 L0,120 Z", // gentle, symmetrical multiple waves
        'curve-right': "M0,120 Q600,0 1200,80 L1200,120 L0,120 Z", // single sweeping curve rising to the right
        'slant-left': "M0,120 L1200,0 L1200,120 L0,120 Z", // sharp diagonal line covering the bottom right
        'slant-right': "M0,0 L1200,120 L0,120 Z", // sharp diagonal line covering the bottom left
        'curve-center': "M0,120 Q600,-40 1200,120 Z", // smooth hill/valley dipping in the center
    };

    const activePath = paths[type] || paths['wave'];

    // We keep heights small (15px to 40px max) to make them subtle and elegant
    return (
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-50 pointer-events-none">
            <svg
                className="relative block h-[15px] sm:h-[20px] md:h-[30px] lg:h-[40px]"
                style={{ width: 'calc(100% + 2px)', transform: 'translate(-1px, 0)' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <path
                    d={activePath}
                    fill={fill}
                    style={{ transition: 'fill 0.5s ease' }}
                ></path>
            </svg>
        </div>
    );
};

export default WaveDivider;
