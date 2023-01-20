import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const Chart  = dynamic(() => import('react-apexcharts'), { ssr: false });
export default function Bar() {

    const [state, setstate] = useState()
   
    useEffect(() => {
        setstate(
            {

                series: [
                    {
                        name: "1st year",
                        data: [0, 35, 10, 40, 10, 40, ]
                    },
                    {
                        name: "2nd year",
                        data: [40, 10 , 30, 20, 20, 10, ]
                    },

                ],
                options: {
                    chart: {
                        // height: 350,
                        type: 'bar',
                       color: {},
                        toolbar: {
                            show: true} },
                    colors: ['#FF0000', '#004DFF'],
                    dataLabels: {
                        enabled: true,
                        color: ['#FF0000', '#004DFF'],
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    title: {
                        text: 'Bar graph',
                        align: 'center'
                    },
                    grid: {
                        borderColor: 'black',
                        row: {
                            colors: ['white','grey'], // takes an array which will be repeated on columns
                            opacity: 0.3
                        },
                    },
                    markers: {
                        size:10
                    },
                    xaxis: {
                        categories: ['Student1', 'Student2', 'Student3', 'Student4', 'Student5', 'Student6', 'Student7'],
                        title: {
                            text: 'Student-name'
                        }
                    },
                    yaxis: {
                        title: {
                            text: 'Performance'
                        },
                        min: 0,
                        max: 100
                    },
                    legend: {
                        position: 'bottom',
                        horizontalAlign: 'center',
                        floating: true,                      
                        offsetY: 1,
                        offsetX: 5
                    }
                },


            }

        )
    }, [])


    useEffect(() => {
        console.log(state, "state")
    }, [state])


    return (
        <div className='container items-center '>
            <Chart
                options={state?.options}
                series={state?.series}
                type="bar"
                height="600"
                width="800"
                
           
             
                
            />
        </div>
    )
}