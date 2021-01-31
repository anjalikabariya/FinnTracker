import { useContext } from 'react';
import { TrackerContext } from './context/context';

//generate background colors for dynamic doughnut chart
function getColors(length){
    let pallet = ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];
    let colors = [];
    for(let i = 0; i < length; i++) {
      colors.push(pallet[i % pallet.length]);
    }
    return colors;
}

//custom hook defined
const useTransactions = (title) => {
    //initialize chart 
    const { transactions } = useContext(TrackerContext);
    //keep transactions matching only matching one of the titles "Purchase" / "Sale"
    const selectedTransactions = transactions.filter((t) => t.type === title);
    //calculate total balance of filtered transactions array
    const total = selectedTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);
    //properties to be mapped in doughnut chart
    const chartData = {
        datasets: [{
            data: selectedTransactions.map((c) => c.amount),
            backgroundColor: getColors(selectedTransactions.length)
        }],
        labels: selectedTransactions.map((c) => c.stockName),
    };
    return { total, chartData };
};

export default useTransactions;