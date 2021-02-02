import './styles.scss';
import React from 'react'
import CanvasJSReact from "canvasjs-react-charts";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Chart({stockData}) {
    return (
        <div className="chart__container">
            <CanvasJSChart
                options={{
                    legend:{
                        
                    },
                    fontColor:"white",
                    color:"white",
                    backgroundColor:"black",
                    tooltip: {
                        enabled: true,
                    },
                    interactivityEnabled:true,
                    zoomEnabled: true,
                    exportEnabled: true,
                    axisX: {
                        interval:10,
                        intervalType:"day",
                        valueFormatString: "DD MMM",
                        labelFontColor:"white",
                        minimum: new Date(stockData && stockData[0].date*1000),
                        labelAngle:-45,
                        crosshair: { 
                            enabled: true,
                            snapToDataPoint:true
                        },
                        scaleBreaks:{
                            spacing:2,
                            fillOpacity:0,
                            lineThickness:0,
                            customBreaks: stockData && stockData.reduce((breaks, value, index, arr) => {
                                
                                const currPoint = Number(new Date(value.date))
                                const nextPoint = Number(new Date(arr[index+1] ?  arr[index+1].date : 0))
                                const oneDay = 86400;
                                const difference = nextPoint-currPoint
                                return difference === oneDay ? breaks : 
                                    [...breaks, {
                                        startValue : (new Date(currPoint * 1000)), 
                                        endValue: (new Date(nextPoint * 1000))
                                    }] 
                            }, [])
                        }
                    },
                    axisY:{
                        labelFontColor:"white",
                        crosshair:{
                            enabled:true
                        },
                        includeZero:false,
                    },
                    data:[{
        
                        type:"candlestick",
                        risingColor: "green",
                        color: "red",
                        dataPoints: stockData && stockData.map(element => ({
                            x: new Date(element.date *1000),
                            y: [element.open, element.high, element.low, element.close]
                        }))
                    }]
                }}
            />
        </div>

    )
}

export default Chart


    
