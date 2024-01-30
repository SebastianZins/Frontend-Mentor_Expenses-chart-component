import 'utils/pages/ExpencesChart/expensesChart.css';
import icon from 'images/logo.svg';

function BalanceSummary() {
    return (
        <main className='balance-summary'>
            <div className='label'>
                <p className='balance-label'>My balance</p>
                <p className='balance-number'>$921.48</p>
            </div>
            <div className='logo'>
                <img src={icon} alt='' />
            </div>
        </main>
    );
}

export default BalanceSummary;
