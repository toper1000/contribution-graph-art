const { execSync } = require("child_process");

let matrix = [
    [0, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
];

const COL_NUM = matrix[0].length;
const ROW_NUM = 7;

let startDate = new Date("2025-06-01T12:00:00"); // must be a Sunday

for (let col = 0; col < COL_NUM; col++) {
    for (let row = 0; row < ROW_NUM; row++) {
        if (matrix[row][col] == 1) {
            const gitDateString = startDate.toISOString();

            const commitCommand = `GIT_AUTHOR_DATE="${gitDateString}" GIT_COMMITTER_DATE="${gitDateString}" git commit --allow-empty -m "Pixel"`;

            execSync(commitCommand);
        }
        startDate.setDate(startDate.getDate() + 1);
    }
}
