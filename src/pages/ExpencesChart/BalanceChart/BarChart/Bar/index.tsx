import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { useState } from 'react';

function CustomBar({
    day,
    value,
    weekDayNumber,
    barWidth,
    barPadding,
    barHeight,
    barX,
    barY,
    tooltipRectX,
    tooltipY,
    tooltipHeight,
    tooltipTextX,
    currDateNumber,
}: {
    day: string;
    value: string;
    weekDayNumber: number;
    barWidth: number;
    barPadding: number;
    barHeight: number;
    barX: number | undefined;
    barY: number;
    tooltipRectX: number | undefined;
    tooltipY: number;
    tooltipHeight: number;
    tooltipTextX: number | undefined;
    currDateNumber: number;
}) {
    // hover handler
    const [ishovered, setIsHovered] = useState(false);
    const switchHovered = () => {
        setIsHovered(!ishovered);
    };

    return (
        <Group>
            <Bar
                key={`bar-${day}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                className={
                    'bar' +
                    (currDateNumber === weekDayNumber ? ' currDate' : '')
                }
                rx={5}
                onMouseOver={switchHovered}
                onMouseOut={switchHovered}
            />
            <Group
                className='tooltip'
                visibility={ishovered ? 'visible' : 'hidden'}
            >
                <rect
                    x={tooltipRectX}
                    y={tooltipY}
                    width={barWidth + barPadding * 2}
                    height={tooltipHeight}
                    className='tooltip-rect'
                    rx={5}
                />
                <text
                    x={tooltipTextX}
                    y={tooltipY + tooltipHeight / 2}
                    text-anchor='middle'
                    alignment-baseline='middle'
                    className='tooltip-text'
                >
                    {value}
                </text>
            </Group>
        </Group>
    );
}

export default CustomBar;
