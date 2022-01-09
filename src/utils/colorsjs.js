export const getRandomColor = (color = "#") => {
    const letters = "0123456789ABCDEF";
    const colorsBis = "012345678";

    let colorCopy = "#";

    if (color.length === 7) {
        for (let i = 0; i < 6; i++) {
            if (i % 2 === 0) {
                colorCopy += color[i + 1];
            } else {
                colorCopy += colorsBis[Math.floor(Math.random() * colorsBis.length)];
            }
        }
    } else {
        for (let i = 0; i < 6; i++) {
            if (i % 2 === 0){
                colorCopy += letters[Math.floor(Math.random() * 16)];
            } else {
                colorCopy += 'F';
            }
        }
    }

    return colorCopy;
}