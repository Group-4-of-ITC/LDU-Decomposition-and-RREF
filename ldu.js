function calculateLDU(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    // Extracting L (lower), D (diagonal), and U (upper) matrices
    let L = Array.from({ length: rows }, () => Array(cols).fill(0));
    let D = Array.from({ length: rows }, () => Array(cols).fill(0));
    let U = Array.from({ length: rows }, () => Array(cols).fill(0));
  
    // Matrix factorization
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i < j) {
                U[i][j] = matrix[i][j];
            } else if (i === j) {
                D[i][i] = matrix[i][i];
            } else {
                L[i][j] = matrix[i][j];
            }
        }
    }
  
    // Show L, D, and U matrices
    document.getElementById('lduOutput').innerHTML = `
        <h3>L Matrix</h3>
        <pre>${matrixToString(L)}</pre>
        <h3>D Matrix</h3>
        <pre>${matrixToString(D)}</pre>
        <h3>U Matrix</h3>
        <pre>${matrixToString(U)}</pre>
    `;
  }
  
  function matrixToString(matrix) {
    return matrix.map(row => row.map(elem => elem.toFixed(4)).join('\t')).join('\n');
  }
  