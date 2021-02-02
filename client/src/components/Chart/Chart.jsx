import './styles.scss';
import React from 'react'
import CanvasJSReact from "canvasjs-react-charts";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Chart({stockData}) {
    return (
        <div className="chart__container">
            <CanvasJSChart
                options={{
                    fontColor:"white",
                    color:"white",
                    backgroundColor:"black",
                    //display data on each candle
                    tooltip: {
                        enabled: true,
                    },
                    //supports zoom-in, zoom-out, exporting chart
                    interactivityEnabled:true,
                    zoomEnabled: true,
                    exportEnabled: true,
                    //values on x axis
                    axisX: {
                        //interval type and duration between each label on axis
                        interval:10,
                        intervalType:"day",
                        valueFormatString: "DD MMM",
                        labelFontColor:"white",
                        //starting point on axis to be set from first object in response array
                        minimum: new Date(stockData && stockData[0].date*1000),
                        labelAngle:-45,
                        //setting crosshair options to enable better interaction with chart
                        crosshair: { 
                            enabled: true,
                            snapToDataPoint:true
                        },
                        //to render continuous chart and remove extra breaks of holidays/weekends 
                        scaleBreaks:{
                            spacing:2,
                            fillOpacity:0,
                            lineThickness:0,
                            customBreaks: stockData && stockData.reduce((breaks, value, index, arr) => {
                                //initiate endpoints to be scaled by fetching their dates
                                const currPoint = Number(new Date(value.date))
                                const nextPoint = Number(new Date(arr[index+1] ?  arr[index+1].date : 0))
                                //day in milliseconds
                                const oneDay = 86400;
                                //check if difference is one day, do nothing
                                const difference = nextPoint-currPoint
                                return difference === oneDay ? breaks : 
                                //else remove extra breaks by setting new endpoints on chart
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
                        //does not include zero for better scaling of data on axis
                        includeZero:false,
                    },
                    data:[{
                        //specify type of chart
                        type:"candlestick",
                        //color for rising candlesticks
                        risingColor: "green",
                        //default color
                        color: "red",
                        //set datapoints from response array
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


    
