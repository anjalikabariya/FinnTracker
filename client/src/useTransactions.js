import { useContext } from 'react';
import { TrackerContext } from './context/context';
// import the plugin core
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';
// import a particular color scheme
import { Atlas6 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.office';


const useTransactions = (title) => {
    // const chartColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d', '#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];
    //initialize chart 
    const data = (canvas) =>{
        const ctx = canvas.getContext("2d")
        const gradient = ctx.createLinearGradient(0,0,100,0);
    }
    const { transactions } = useContext(TrackerContext);
    //keep transactions matching only matching one of the titles "Purchase" / "Sale"
    const selectedTransactions = transactions.filter((t) => t.type === title);
    //calculate total balance of filtered transactions array
    const total = selectedTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);

    const chartData = {
        datasets: [{
            data: selectedTransactions.map((c) => c.amount),
            backgroundColor: gradient
        }],
        labels: selectedTransactions.map((c) => c.stockName),
    };

    return { total, chartData };
};

export default useTransactions;