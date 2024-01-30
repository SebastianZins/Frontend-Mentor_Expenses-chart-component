import BalanceChart from './BalanceChart';
import GenericCard from 'components/GenericCard';
import PageLayout from 'components/PageLayout';
import 'utils/pages/ExpencesChart/expensesChart.css';
import BalanceSummary from './BalanceSummary';

function ExpencesChart() {
    return (
        <PageLayout>
            <GenericCard row={0}>
                <BalanceSummary />
            </GenericCard>
            <GenericCard row={1}>
                <BalanceChart />
            </GenericCard>
        </PageLayout>
    );
}

export default ExpencesChart;
