import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);




const data = {
    labels: ['KFC', 'KLM', 'American Express' ],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 8,7,6],
        backgroundColor: [
          ' rgba(141, 67, 255, 1)',
         'rgba(76, 217, 100, 1)',
          'rgba(187, 107, 217, 1)',
          'rgba(45, 156, 219, 1)',
          'rgba(0, 178, 169, 1)',
          'rgba(168, 64, 105, 1)',
          'rgba(234, 171, 0, 1)',
         'rgba(235, 87, 87, 1)'

        ],
        // borderColor: [
        //   'rgba(141, 67, 255, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   ' rgba(187, 107, 217, 1)',
        //   'rgba(45, 156, 219, 1)',
        //   'rgba(0, 178, 169, 1)',
        //   'rgba(168, 64, 105, 1)',
        //  'rgba(234, 171, 0, 1)',
        //  'rgba(235, 87, 87, 1)'

        // ],
        borderWidth: 1,
      },
    ],
  };


  const options = {
    plugins: {
      legend: {
        position: 'bottom', // Etiketleri alt kısımda göster
      },
    },
    // scales: {
    //     x: {
    //       ticks: {
    //         maxTicksLimit: 6// Maximum 8 bölme göster
    //       }
    //     }
    //   }
  };




// const options = {
//     scales: {
//       x: {
//         // type: 'linear',
//         position: 'bottom',
//       },
//     //   y: {
//     //     type: 'category', // Kategorik (kategori) veriler için ölçek tipi
//     //   },
//     },
//   };

  const DoughnutChart = () => (
    <Doughnut data={data} options={options} />
  );
  
  export default DoughnutChart;