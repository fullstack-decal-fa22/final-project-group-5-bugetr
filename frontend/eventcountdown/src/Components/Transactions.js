// npm i react-chartjs-2 chart.js
import {Bar} from "react-chartjs-2";
//import { Pie } from 'react-chartjs-2";'
import { faker } from '@faker-js/faker';


const Transactions = () => {

    const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Total Spending',
          },
        },
      };

      //travel, hangouts, helath, food 
      const barLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const barData = {
        barLabels,
        datasets: [
          {
            label: 'Amount',
            //take amount from backend of sum total
            data: barLabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
         
        ],
      };


      
    //   const pie2Data = {
    //     //take from backend events
    //     pie1Labels: ["Trip to NYC", "Thanksgiving", "Skiing"],
    //     datasets: [
    //         {
    //             label: 'Amount Spent',
    //             //take from backend events
    //             data: [300, 100, 50],
    //             //loop thru and generate that number of rgba values?
    //             backgroundColor: [
    //               'rgba(255, 99, 132, 0.2)',
    //               'rgba(54, 162, 235, 0.2)',
    //               'rgba(255, 206, 86, 0.2)',
    //             ]
    //         }
    //     ]

    // };

    return (
        //  <div className= "welcome message"> 
        //      <h3>Welcome Nicole!</h3>
        //  </div>

        //  <div className="full summary">
        //      <h6>Here's a summary of your spendings in </h6>
            
        //  </div>

        

<>
    
<Bar
    options={options}
    data={barData} />


</>




    


    );
}

export default Transactions;