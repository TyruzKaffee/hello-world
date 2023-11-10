const pyramidContainer = document.getElementById('pyramid-container');
const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', generatePyramid);

function generatePyramid() {
  const height = prompt('Altura de la pirámide (1-50):');
  if (!height || height < 1 || height > 50) {
    alert('Altura inválida. Debe estar entre 1 y 50.');
    return;
  }

  pyramidContainer.innerHTML = '';
  const pyramid = conePyramid(height);
  const maxPath = findPath(pyramid);
  displayPyramid(pyramid, maxPath);
}

function conePyramid(height) {
  const pyramid = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      row.push(Math.floor(Math.random() * 98) + 1); // Números pseudoaleatorios de 1 a 99
    }
    pyramid.push(row);
  }
  return pyramid;
}

function findPath(pyramid) {
  const height = pyramid.length;
  const dp = pyramid.map((row) => row.slice());
  for (let i = height - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  const maxPath = [];
  let j = 0;
  for (let i = 0; i < height - 1; i++) {
    maxPath.push([i, j]);
    if (dp[i + 1][j + 1] > dp[i + 1][j]) {
      j++;
    }
  }
  maxPath.push([height - 1, j]);
  return maxPath;
}

function displayPyramid(pyramid, maxPath) {
  const table = document.createElement('table');
  table.classList.add('pyramid');
  pyramid.forEach((row, i) => {
    const tr = document.createElement('tr');
    row.forEach((value, j) => {
      const td = document.createElement('td');
      td.textContent = value;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });

  pyramidContainer.appendChild(table);

  maxPath.forEach(([i, j]) => {
    table.rows[i].cells[j].classList.add('pathCell');
  });

  const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetPyramid);

const resultDiv = document.createElement('div');
  resultDiv.classList.add('resultGenerate');
  pyramidContainer.appendChild(resultDiv);

  maxPath.forEach(([i, j]) => {
    const box = document.createElement('div');
    box.classList.add('box');
    box.textContent = pyramid[i][j]; 
    resultDiv.appendChild(box);
  });

  
  const suma = maxPath.reduce((accumulator, [i, j]) => accumulator + pyramid[i][j], 0);
  const sumaDiv = document.createElement('div');
  sumaDiv.textContent = `Resultado: ${suma}`;
  sumaDiv.classList.add('sumBox');
  resultDiv.appendChild(sumaDiv);
}


function resetPyramid() {
  pyramidContainer.innerHTML = ''; 
}