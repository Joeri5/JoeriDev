export const codeData = [
    {
        code: `public boolean eligibleForRefresh(String token) {
        DecodedJWT decodedJWT = verifyJwt(token);
        if (decodedJWT == null) return false;

        return new Date().getTime() > decodedJWT.getIssuedAt().getTime() +
                (JWT_TOKEN_REFRESH_AFTER * 1000L);
}`,
        timeStamp: "2022-12-19 18:29:00",
        language: "java",
        detailsContent: "This is a snippet from the Java codebase. It is used to determine if a JWT token is eligible for refresh. The token is eligible for refresh if the current time is greater than the time the token was issued plus the refresh time.",
    },
    {
        code: `const toggleSubFile = (index: number, subIndex: number, subFileIndex: number) => {
        setAboutFolders(aboutFolders.map((folder, i) => {
                if (i === index) {
                    folder.subFolders.map((subFolder, j) => {
                        if (j === subIndex) {
                            subFolder.subFiles.map((subFile, k) => {
                                if (k === subFileIndex) {
                                    subFile.open = !subFile.open
                                    dispatch(toggleFile())
                                } else {
                                    // subFile.open = false
                                }
                                return subFile
                            })
                        }
                        return subFolder
                    })
                }
                return folder
            })
        );
    }`,
        timeStamp: "2022-12-19 18:29:00",
        language: "typescript",
        detailsContent: "This is a snippet from the React codebase. It is used to toggle the open state of a sub file in the about page. The sub file is the file that is displayed when a sub folder is clicked.",
    },
    {
        code: `checkIfEat() {
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];
        const THRESHOLD = 3;

        // Calculate the distance between the head of the snake and the food
        let distance = Math.sqrt(Math.pow(head[0] - this.state.food[0], 2) + Math.pow(head[1] - this.state.food[1], 2));

        // Check if the distance is less than the threshold
        if (distance < THRESHOLD) {
            // The snake has eaten the food, so you can increase the food count and generate a new food
            let newSnake = [...this.state.snakeDots];
            newSnake.unshift([])
            this.setState({
                snakeDots: newSnake
            })
            this.setState({food: getRandomCoords()})
            this.countFood()
            this.enlargeSnake()
        }

        if (head[0] == this.state.food[0] && head[1] == this.state.food[1]) {
            let newSnake = [...this.state.snakeDots];
            newSnake.unshift([])
            this.setState({
                snakeDots: newSnake
            })
            this.setState({food: getRandomCoords()})
            this.countFood()
            this.enlargeSnake()
        }

}`,
        timeStamp: "2022-12-19 18:29:00",
        language: "typescript",
        detailsContent: "This is a snippet from the React codebase. It is used to check if the snake has eaten the food. If the snake has eaten the food, the snake will grow and a new food will be generated.",
    },
    {
        code: `const getRandomCoords = () => {
    let min = 1;
    let max = 90;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    return [x, y]
}`,
        timeStamp: "2022-12-19 18:29:00",
        language: "typescript",
        detailsContent: "This is a snippet from the React codebase. It is used to generate a random coordinate for the food.",
    }
]
