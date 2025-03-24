# Algorithms Visualiser

A React-based web application for visualizing various pathfinding algorithms. This project helps users understand how different pathfinding algorithms work by providing an interactive visual representation.

## Features

- Interactive grid-based visualization
- Multiple pathfinding algorithms:
  - Breadth-First Search (BFS)
  - Dijkstra's Algorithm
  - A* Search
- Maze generation using Depth-First Search
- Real-time visualization of algorithm execution
- Customizable grid size
- Wall placement for creating obstacles
- Start and end point selection

## Live Demo

Visit the live demo at: [https://filipkucherenkov.github.io/Algorithms_Visualiser/](https://filipkucherenkov.github.io/Algorithms_Visualiser/)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/filipkucherenkov/Algorithms_Visualiser.git
cd Algorithms_Visualiser/visualiser
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

## Usage

1. Select an algorithm from the dropdown menu
2. Place the start point by clicking the "Start" button and selecting a cell
3. Place the destination point by clicking the "Destination" button and selecting a cell
4. Create walls by clicking and dragging on cells
5. Click "Run" to visualize the selected algorithm
6. Use "Reset" to clear the grid
7. Try the "Generate Maze" feature to create random mazes

## Technologies Used

- React.js
- CSS Grid
- JavaScript (ES6+)
- GitHub Pages (for deployment)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Check it out here: https://algorithm-visualiser-app.herokuapp.com/
 #### Quick Note: Please view it on a wider screen as the design is not responsive.
 
## Technologies used:
  * ReactJS
  * Docker 
  * Docker container was deployed on Heroku
 
 
## ReactJS Web app visualising different Pathfinding algorithms such as A-star, Breadth-First-Search and Dijkstra. 👨‍💻 
#### Functionality includes:
  * Selecting source and destination nodes and visualising the min path between them and the search process. 🔥
  * You can choose which algorithms to run and visualise. 🔥
  * The board can be reset at any time using a button. 🔥
  * The Generate maze button uses DFS algorithm to generate a maze on the grid. 🔥
  * You can also draw custom walls.🔥
  
  
  ![image](https://user-images.githubusercontent.com/72323426/143968193-dbd9ec05-38b1-4ea1-a437-467d984e3856.png)
  
  ![image](https://user-images.githubusercontent.com/72323426/143968102-5ac20467-9af0-45d2-85a5-074d169b1e13.png)

