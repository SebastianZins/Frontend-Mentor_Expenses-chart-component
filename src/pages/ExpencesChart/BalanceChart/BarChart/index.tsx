import { AxisBottom } from '@visx/axis';
import { Group } from '@visx/group';
import { scaleBand, scaleLinear } from '@visx/scale';
import { Bar } from '@visx/shape';
import data_type from 'data/data-type';
import data from 'data/data.json';
import { useMemo } from 'react';

const currDateNumber = 3;

function BarChart({ width, height }: { width: number; height: number }) {
    // accessors
    const getDay = (d: data_type) => d.day;
    const getAmount = (d: data_type) => Number(d.amount) * 100;

    // bounds
    const xMax = width;
    const yMax = height - 20;

    // scales, memoize for performance
    const xScale = useMemo(
        () =>
            scaleBand<string>({
                range: [0, xMax],
                round: true,
                domain: data.map(getDay),
                padding: 0.2,
            }),
        [xMax]
    );
    const yScale = useMemo(
        () =>
            scaleLinear<number>({
                range: [yMax, 0],
                round: true,
                domain: [0, Math.max(...data.map(getAmount))],
            }),
        [yMax]
    );

    return width < 10 ? null : (
        <svg height={height} width={width}>
            <Group top={0}>
                {data.map((d) => {
                    const day = getDay(d);
                    const barWidth = xScale.bandwidth();
                    const barHeight = yMax - (yScale(getAmount(d)) ?? 0);
                    const barX = xScale(day);
                    const barY = yMax - barHeight;
                    return (
                        <Bar
                            key={`bar-${day}`}
                            x={barX}
                            y={barY}
                            width={barWidth}
                            height={barHeight}
                            className={
                                'bar' +
                                (currDateNumber === d.day_number
                                    ? ' currDate'
                                    : '')
                            }
                            rx={5}
                            onClick={(events) => {
                                if (events)
                                    alert(
                                        `clicked: ${JSON.stringify(
                                            Object.values(d)
                                        )}`
                                    );
                            }}
                        />
                    );
                })}
            </Group>
            <AxisBottom
                top={yMax - 8}
                scale={xScale}
                tickStroke={''}
                hideAxisLine
                tickLabelProps={{
                    fontSize: 12,
                    fontWeight: 700,
                    textAnchor: 'middle',
                }}
            />
        </svg>
    );
}

export default BarChart;
