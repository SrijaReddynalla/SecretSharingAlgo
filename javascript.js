const fs = require('fs');

function parseInput(filePath) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const n = data.keys.n;
    const k = data.keys.k;
    const roots = [];

    for (let key in data) {
        if (key !== 'keys') {
            const x = parseInt(key);
            const base = parseInt(data[key].base);
            const y = parseInt(data[key].value, base); 
            roots.push({ x, y });
        }
    }

    return { n, k, roots };
}

function findConstantTerm(roots, k) {
    let constantTerm = 0;

    for (let i = 0; i < k; i++) {
        const { x: xi, y: yi } = roots[i];
        
        let term = yi;
        for (let j = 0; j < k; j++) {
            if (i !== j) {
                const { x: xj } = roots[j];
                term *= -xj / (xi - xj);
            }
        }
        constantTerm += term;
    }

    return Math.round(constantTerm); 
}

function main() {
    const testCaseFiles = ['testcase1.json', 'testcase2.json'];
    
    testCaseFiles.forEach((file) => {
        const { n, k, roots } = parseInput(file);
        const constantTerm = findConstantTerm(roots, k);
        console.log(`Constant term for ${file}: ${constantTerm}`);
    });
}

main();