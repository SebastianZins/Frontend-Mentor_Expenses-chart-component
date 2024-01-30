import 'utils/pages/ExpencesChart/expensesChart.css';
import BarChart from './BarChart';
import { ParentSize } from '@visx/responsive';

function BalanceChart() {
    return (
        <article className='balance-chart'>
            <div className='diagram-component'>
                <div className='label'>Spending - Last 7 days</div>
                <div className='diagram'>
                    <ParentSize debounceTime={10}>
                        {(parent) => (
                            <BarChart
                                width={parent.width}
                                height={parent.height}
                            />
                        )}
                    </ParentSize>
                </div>
            </div>
            <div className='seperator'></div>
            <div className='total-component'>
                {/* Data this Month */}
                <div className='number-column left'>
                    <div className='label'>Total this Month</div>
                    <div className='amount-big'>$478.33</div>
                </div>
                {/* Data last Month */}
                <div className='number-column right'>
                    <div className='amount-small'>+2.4%</div>
                    <div className='label'>from last month</div>
                </div>
            </div>
        </article>
    );
}

export default BalanceChart;
