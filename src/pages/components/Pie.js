import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
export default function Pie() {

    const [state, setstate] = useState()

    useEffect(() => {
        setstate(
            {
                series: [44, 55, 13, 43, 22],

                options: {
                    chart: {
                        width: 380,
                        type: 'pie',
                    },
                    labels: ['john', 'alex', 'felix', 'jake', 'tom'],
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
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

        <div className=''>
            <Chart
                options={state?.options}
                series={state?.series}
                type="pie"
                height="600"
                width="800">
            </Chart>
        </div>

    )
}

