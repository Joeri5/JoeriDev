import React, {CSSProperties, useState} from "react";
import Food from "./food";
import Snake from "./snake";
import InfoScore from "./infoScore";
import {Simulate} from "react-dom/test-utils";
import play = Simulate.play;

const getRandomCoords = () => {
    let min = 1;
    let max = 90;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    return [x, y]
}

const initialState = {
    food: getRandomCoords(),
    speed: 100,
    pause: true,
    play: false,
    foodCount: 0,
    maxFood: 12,
    gameOver: "",
    plays: 0,
    gameWon: "",
    direction: 'RIGHT',
    snakeDots: [
        [0, 0], [2, 0]
    ]
}

class Game extends React.Component {
    state = initialState

    componentDidMount(): void {
        setInterval(this.moveSnake, this.state.speed)
        document.onkeydown = this.onKeyDown;

    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        this.checkIfOutOfBorders();
        this.checkIfCollapsed();
        this.checkIfEat();
        this.checkIfWon();
    }

    onKeyDown = (e: any) => {
        e = e || window.event;
        switch (e.keyCode) {
            case 38:
                this.setState({direction: 'UP'});
                break;
            case 40:
                this.setState({direction: 'DOWN'});
                break;
            case 37:
                this.setState({direction: 'LEFT'});
                break;
            case 39:
                this.setState({direction: 'RIGHT'});
                break;

        }
        //console.log(this.state.direction)

    }

    countFood = () => {
        this.setState({foodCount: this.state.foodCount + 1})
    }

    foodLeft = () => {
        return this.state.maxFood - this.state.maxFood - this.state.foodCount
    }

    moveSnake = () => {
        let dots = [...this.state.snakeDots]
        let head = dots[dots.length - 1]

        switch (this.state.direction) {
            case 'RIGHT':
                head = [head[0] + 2, head[1]]
                break;
            case 'LEFT':
                head = [head[0] - 2, head[1]]
                break;
            case 'DOWN':
                head = [head[0], head[1] + 2]
                break;
            case 'UP':
                head = [head[0], head[1] - 2]
                break;
        }
        if (!this.state.pause && this.state.play) {

            dots.push(head);
            dots.shift();
            this.setState({
                snakeDots: dots
            })
        }
    }

    checkIfOutOfBorders() {
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];
        if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
            this.onGameOver();
        }
    }

    checkIfCollapsed() {
        let snake = [...this.state.snakeDots];
        let head = snake[snake.length - 1];
        snake.pop()
        snake.forEach(dot => {
            if (head[0] == dot[0] && head[1] == dot[1]) {
                this.onGameOver();
            }
        })
    }

    checkIfEat() {
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];
        let food = this.state.food;
        if (head[0] == food[0] && head[1] == food[1]) {
            this.setState({
                food: getRandomCoords()
            })
            this.enlargeSnake();
            this.increaseSpeed();
            this.countFood();
        }
    }

    checkIfWon() {
        if (this.state.foodCount >= this.state.maxFood) {
            this.onGameWon();
        }
    }

    enlargeSnake() {
        let newSnake = [...this.state.snakeDots];
        newSnake.unshift([]);
        this.setState({
            snakeDots: newSnake
        })
    }

    increaseSpeed() {
        if (this.state.speed > 10) {
            this.setState({
                speed: this.state.speed - 10
            })
        }
    }

    onGameWon() {
        this.setState(Object.assign({}, initialState, {plays: this.state.plays + 1}));
        this.setState({gameWon: "Well Done!"})
    }

    onGameOver() {
        this.setState(Object.assign({}, initialState, {plays: this.state.plays + 1}));
        this.setState({gameOver: `Game Over!`})

    }

    render() {
        const foodLeft = this.state.maxFood - this.state.foodCount;
        const foodImages = [];
        for (let i = 0; i < 12; i++) {
            const style: CSSProperties = {};
            // If the index of the food image is greater than or equal to the number of food items eaten, set the opacity to 50%
            if (i >= foodLeft) {
                style.opacity = 0.5;
            }
            foodImages.push(<img src="/food.svg" alt="" className="w-7 inline-block" key={i} style={style}/>);
        }
        return (
            <div className="w-[37.5rem] h-[37.5rem] bg-gradient-to-br from-[#175553] to-[#43D9AD]/20 relative">
                <div className="flex justify-center">
                    {this.state.plays < 1 && (
                        <button
                            className={`rounded-md ${this.state.play ? "" : "w-32"} bottom-20 left-28 z-50 py-2 bg-[#FEA55F] absolute`}
                            onClick={() => {
                                this.setState({play: true, pause: false})
                            }}>{this.state.play ? "" : "Play Game"}</button>
                    )}
                    {/*{this.state.play ?*/}
                    {/*    <button className="ml-2 rounded-md w-32 px-2 py-1 bg-slate-700 text-white" onClick={() => {*/}
                    {/*        this.setState({pause: this.state.pause ? false : true})*/}
                    {/*    }}>{this.state.pause ? "Return Game" : "Pause Game"}</button>*/}
                    {/*    :*/}
                    {/*    <></>*/}
                    {/*}*/}
                    {!this.state.play && (
                        <>
                            <div
                                className={`${this.state.gameOver ? "py-5 w-[250px]" : ""} ${this.state.gameWon ? "py-5 w-[250px]" : ""} absolute bottom-28 left-14 text-[#43D9AD] z-50 uppercase text-xl text-center bg-[#011627D6]`}>
                                {this.state.gameWon}
                                {this.state.gameOver}
                            </div>
                            <div>
                                {(this.state.gameWon || this.state.gameOver) && this.state.plays >= 1 && (
                                    <button
                                        className="bottom-20 z-50 left-36 absolute text-white"
                                        onClick={() => this.setState({play: true, pause: false})}
                                    >
                                        {this.state.gameWon ? "play" : "start"}-again
                                    </button>
                                )}
                            </div>
                        </>
                    )}
                </div>
                <div className="w-full translate-y-14 flex">
                    <div className={`game-area ml-14 ${this.state.pause ? "bg-gray-500" : "bg-gray-200"} rounded-lg`}>
                        <Snake snakeDots={this.state.snakeDots}/>
                        <Food dot={this.state.food}/>
                        <InfoScore score={this.state.snakeDots.length} foodCount={this.state.foodCount}
                                   foodLeft={this.foodLeft()}/>
                    </div>
                </div>
                <div className="absolute right-0 mr-14 top-14 space-y-7">
                    <img src="/controls.svg" alt="" className="w-[12.5rem]"/>
                    <div className="px-5 flex flex-col gap-3">
                        <p className="text-white">&#47;&#47;&nbsp;&nbsp;&nbsp;food left</p>
                        <div className="grid grid-cols-6">
                            {foodImages.map(foodImage => foodImage)}
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/bolt.svg" alt="" className="absolute top-5 left-5"/>
                    <img src="/bolt.svg" alt="" className="absolute top-5 right-5"/>
                    <img src="/bolt.svg" alt="" className="absolute bottom-5 left-5"/>
                    <img src="/bolt.svg" alt="" className="absolute bottom-5 right-5"/>
                </div>
            </div>
        )
    }
}

export default Game;