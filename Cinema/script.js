function updateChartSize() {
    myChart.resize(); // Redimensionner le graphique
}

// Ajouter un gestionnaire d'événements pour le redimensionnement de la fenêtre
window.addEventListener('resize', updateChartSize);


let ctx = document.getElementById("myChart").getContext('2d');
let data = {
    labels: ["Hauts-de-France", "Grand Est", "Bourgogne-Franche-Comté"],
    datasets: [{
        data: [18.7, 17.1, 16.2],
        backgroundColor: [
            'rgba(231,216,114, 0.8)',
            'rgba(160,87,28, 0.8)',
            'rgba(251,202,57, 0.8)'
        ],
        borderColor: [
            'rgba(231, 216, 114, 1)',
            'rgba(160, 87, 28, 1)',
            'rgba(251, 202, 57, 1)'
        ],
        borderRadius: 10, // Ajoutez une bordure arrondie aux barres
        borderWidth: 2,
    }]
};

let myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {

                title: {
                    display: true,

                },

                ticks: {
                    font: {
                        size: 12, // Taille de la police pour les étiquettes de l'axe x
                        family: 'Lato', // Famille de police pour les étiquettes de l'axe x
                    }
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    lineWidth: 2, // Augmentez l'épaisseur des lignes de grille
                    color: 'rgba(0, 0, 0, 0.3)'
                },
                title: {
                    display: true,
                    font: {
                        size: 12, // Taille de la police pour l'axe y
                        family: 'Lato' // Famille de police pour l'axe y
                    }
                },
                ticks: {
                    font: {
                        size: 16, // Taille de la police pour les étiquettes de l'axe y
                        family: 'Lato' // Famille de police pour les étiquettes de l'axe y
                    }
                },

            }
        }
    }
});


var data1 = {
    labels: [],
    datasets: [{
        data: [
            {x: 11.44, y: 80.54},
            {x: 3.33, y: 21.66},
            {x: 4.92, y: 32.89},
            {x: 2.50, y: 21.93},
            {x: 0.33, y: 2.25},
            {x: 6.7, y: 47.08},
            {x: 7.26, y: 49.96},
            {x: 24.4, y: 179.46},
            {x: 4.33, y: 29.42},
            {x: 8.45, y: 55.25},
            {x: 7.82, y: 55.04},
            {x: 5.6, y: 36.82},
            {x: 7.81, y: 64.07}
        ],
        backgroundColor: 'rgba(251, 202, 57, 1)',
        pointRadius: 8,
        pointBorderColor: 'rgba(0, 0, 0, 1)', // Couleur de bordure des point
        pointBorderWidth: 2,
        hoverRadius: 8,
    }]
};

var options = {
    layout: {},
    scales: {
        x: {
            title: {
                display: true,
                text: 'Nombre entrées (en millions)',
                font: {
                    size: 16, // taille de la police
                    family: 'Lato', // famille de la police
                }
            },
            type: 'linear',
            position: 'bottom',
            grid: {
                display: true,
                borderWidth: 2, // Épaisseur du quadrillage pour l'axe des x
                color: 'rgba(0, 0, 0, 1)' // Couleur du quadrillage pour l'axe des x
            },
            ticks: {
                font: {
                    size: 16, // Changer la taille de la police pour les valeurs de l'axe des x
                    family: 'Lato',
                }
            }
        },
        y: {
            title: {
                display: true,
                text: 'Recettes (en millions)',
                font: {
                    size: 16, // taille de la police
                    family: 'Lato', // famille de la police
                }
            },
            ticks: {
                font: {
                    size: 16, // Changer la taille de la police pour les valeurs de l'axe des x
                    family: 'Lato',
                }
            },
            type: 'linear',
            position: 'left',
            grid: {
                display: true,
                borderWidth: 2, // Épaisseur du quadrillage pour l'axe des y
                color: 'rgba(0, 0, 0, 0.5)' // Couleur du quadrillage pour l'axe des y
            }
        }
    },
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    var label = '';
                    if (context.datasetIndex === 0) {
                        if (context.dataIndex === 0) {
                            label = 'Auvergne-Rhône-Alpes';
                        } else if (context.dataIndex === 1) {
                            label = 'Bourgogne-Franche-Comté';
                        } else if (context.dataIndex === 2) {
                            label = 'Bretagne';
                        } else if (context.dataIndex === 3) {
                            label = 'Centre-Val de Loire';
                        } else if (context.dataIndex === 4) {
                            label = 'Corse';
                        } else if (context.dataIndex === 5) {
                            label = 'Grand Est';
                        } else if (context.dataIndex === 6) {
                            label = 'Hauts-de-France ';
                        } else if (context.dataIndex === 7) {
                            label = 'Île-de-France';
                        } else if (context.dataIndex === 8) {
                            label = 'Normandie';
                        } else if (context.dataIndex === 9) {
                            label = 'Nouvelle-Aquitaine';
                        } else if (context.dataIndex === 10) {
                            label = 'Occitanie';
                        } else if (context.dataIndex === 11) {
                            label = 'Pays de la Loire';
                        } else if (context.dataIndex === 12) {
                            label = 'Provence-Alpes-Côte d’Azur';
                        }
                    }
                    return label;
                },

            }
        }
    }
};

var ctx1 = document.getElementById('myChart2').getContext('2d');
var myScatterChart = new Chart(ctx1, {
    type: 'scatter',
    data: data1,
    options: options
});

