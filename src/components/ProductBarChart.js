// src/components/ProductBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler);

const ProductBarChart = ({ products }) => {
    const data = {
        labels: products.map(product => product.name),  // Product names
        datasets: [
            {
                label: 'Product Quantity',
                data: products.map(product => product.quantity), // Corresponding quantities
                backgroundColor: 'rgba(173, 216, 230, 1)',  // Blue bar color
                borderColor: 'rgba(0, 0, 0, 1)',               // Black border color
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white', // Change y-axis font color
                    font: {
                        size: 16, // Change y-axis font size
                    },
                },
            },
            x: {
                ticks: {
                    color: 'white', // Change x-axis font color
                    font: {
                        size: 16, // Change x-axis font size
                    },
                },
                grid: {
                    color: 'rgba(255, 255, 255, 1)', // Optional: Set the x-axis grid color
                }
            },
        },
        plugins: {
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Background color for tooltips
                titleColor: 'white', // Tooltip title color
                bodyColor: 'gray', // Tooltip body color
                titleFont: {
                    size: 20, // Tooltip title font size
                },
                bodyFont: {
                    size: 17, // Tooltip body font size
                },
            },
            legend: {
                labels: {
                    color: 'white', // Legend font color
                    font: {
                        size: 20, // Legend font size
                    },
                },
            },
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10
            },
        },
    };

    return (
        <div style={{ backgroundColor: 'yellow', padding: '20px', borderRadius: '8px' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default ProductBarChart;