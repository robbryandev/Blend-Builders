import { Card } from "react-bootstrap";

export default function Coffee(props = {
    name: "",
    price: 0.00,
    img: ""
}) {
    return (
    <Card className=" bg-secondary p-4 m-4 rounded-lg shadow-md w-4/12 sm:w-3/12 md:w-1/5 lg:w-2/12 lg:max-w-[15vw]">
        <Card.Img className="border-b-2 border-b-white pb-4" src={props.img} />
        <Card.Body>
            <Card.Title className="text-center text-xl text-white pt-2">{props.name}</Card.Title>
            <Card.Text className="text-lg text-center text-white">${props.price}</Card.Text>
        </Card.Body>
    </Card>
    )
}