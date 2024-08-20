function knightMoves(start, end) {
    const directions = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    const queue = [[start]];
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        const path = queue.shift();
        const currentPos = path[path.length - 1];

        if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
            return path;
        }

        for (const [dx, dy] of directions) {
            const newX = currentPos[0] + dx;
            const newY = currentPos[1] + dy;
            const newPos = [newX, newY];

            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8 && !visited.has(newPos.toString())) {
                visited.add(newPos.toString());
                queue.push([...path, newPos]);
            }
        }
    }
}

// Example usage
const path = knightMoves([3, 3], [4, 3]);
console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
path.forEach(square => console.log(square));
