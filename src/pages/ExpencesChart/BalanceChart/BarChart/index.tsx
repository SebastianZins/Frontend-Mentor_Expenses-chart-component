import { AxisBottom } from '@visx/axis';
import { Group } from '@visx/group';
import { scaleBand, scaleLinear } from '@visx/scale';
import data_type from 'data/data-type';
import data from 'data/data.json';
import { useMemo } from 'react';
import CustomBar from './Bar';

function BarChart({ width, height }: { width: number; height: number }) {
    // check curr date (week day number)
    const currDate = new Date().getDay();

    // accessors
    const getDay = (d: data_type) => d.day;
    const getAmount = (d: data_type) => Number(d.amount);
    const getWeekDayNumber = (d: data_type) => Number(d.day_number);

    // bounds
    const xMax = width;
    const yMax = height - 20 - 25;

    // tooltip
    const tooltipHeight = 25;
    const tooltipPadding = 5;

    // scales, memoize for performance
    const xScale = useMemo(
        () =>
            scaleBand<string>({
                range: [0, xMax],
                round: true,
                domain: data.map(getDay),
                padding: 0.25,
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
                    const value = '$' + getAmount(d);
                    const weekDayNumber = getWeekDayNumber(d);
                    const barWidth = xScale.bandwidth();
                    const barPadding = barWidth * 0.2;
                    const barHeight = yMax - (yScale(getAmount(d)) ?? 0);
                    const barX = xScale(day);
                    const barY =
                        yMax - barHeight + tooltipHeight + tooltipPadding;
                    const tooltipRectX =
                        barX === undefined ? undefined : barX - barPadding;
                    const tooltipTextX =
                        barX === undefined ? undefined : barX + barWidth / 2;
                    const tooltipY = barY - tooltipHeight - tooltipPadding;
                    return (
                        <CustomBar
                            day={day}
                            value={value}
                            weekDayNumber={weekDayNumber}
                            barWidth={barWidth}
                            barPadding={barPadding}
                            barHeight={barHeight}
                            barX={barX}
                            barY={barY}
                            tooltipRectX={tooltipRectX}
                            tooltipY={tooltipY}
                            tooltipHeight={tooltipHeight}
                            tooltipTextX={tooltipTextX}
                            currDateNumber={currDate}
                        />
                    );
                })}
            </Group>
            <AxisBottom
                top={yMax - 8 + tooltipHeight + tooltipPadding}
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
