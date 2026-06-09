document.getElementById('draw').addEventListener('click', function () {
    const omikujiResults = ['超大吉', '大吉', '中吉', '小吉', '末吉', '凶', '大凶'];
    const result = omikujiResults[Math.floor(Math.random() * omikujiResults.length)];
    const resultElem = document.getElementById('result');
    resultElem.textContent = `あなたの運勢は... ${result}!`;

    let color;
    switch (result) {
        case '超大吉':
            color = '#FFD700';
            break;
        case '大吉':
            color = '#FF8C00';
            break;
        case '中吉':
            color = '#228B22';
            break;
        case '小吉':
            color = '#20B2AA';
            break;
        case '末吉':
            color = '#1E90FF';
            break;
        case '凶':
            color = '#DC143C';
            break;
        case '大凶':
            color = '#8B0000';
            break;
        default:
            color = '#000000';
    }

    resultElem.style.color = color;
});