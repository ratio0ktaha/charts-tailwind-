import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
export default function Donut() {

    const [state, setstate] = useState()

    useEffect(() => {
        setstate(
            {
                series: [20, 30, 20, 20, 10],

                options: {
                    chart: {
                        width: 380,
                        type: 'donut',
                    },
                    labels: ['john', 'alex', 'felix', 'jake', 'tom'],
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            title: {
                                text: 'donut chart',
                                align: 'center'},
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                }
            }
        )
    }, [])









    // useEffect(() => {
    //     console.log(state, "state")
    // }, [state]),


    return (

        <div className='container items-center '>
            <Chart
                options={state?.options}
                series={state?.series}
                type="donut"
                height="600"
                width="800">
            </Chart>
        </div>

    )
}

