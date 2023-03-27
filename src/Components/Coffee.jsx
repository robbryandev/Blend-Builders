import { Card } from "react-bootstrap";

export default function Coffee(props = {
    name: "",
    price: 0.00,
    img: ""
}) {
    return (
    <Card className=" bg-secondary p-4 m-4 rounded-lg shadow-md w-4/12 sm:w-3/12 md:w-1/5 lg:w-2/12 lg:max-w-[15vw]">
        <div className="relative">
            <Card.Img className="z-10 rounded-md aspect-square" src={props.img} />
            <Card.Img className="rounded-sm z-20 absolute top-0 left-0 py-4" src="logo-mug.png" />
        </div>
        <Card.Body>
            <Card.Title className="text-center text-xl text-white pt-2">{props.name}</Card.Title>
            <Card.Text className="text-lg text-center text-white">${props.price}</Card.Text>
        </Card.Body>
    </Card>
    )
}