interface SnakeProps {
    snakeDots:number[][]
}

export default function Snake(props: SnakeProps) {
    const lastDotIndex = props.snakeDots.length - 1;
    return (
        <div>
            {props.snakeDots.map((dot, index) => {
                const styleDot = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`,
                    // Set the opacity of the last child to 1, and decrease it by 5% for each preceding child
                    opacity: index === lastDotIndex ? 1 : 1 - ((lastDotIndex - index) * 0.05)
                }
                // If the dot's opacity is lower than 10%, return null instead of rendering the element
                if (styleDot.opacity < 0.1) {
                    return null;
                }
                return (
                    <div className="snake-dot" key={index} style={styleDot}></div>
                )
            })}
        </div>
    )
}

