import { useCallback, useMemo } from "react";
import { Card } from "react-bootstrap";

export default function Coffee(props = {
    name: "",
    price: 0.00,
    img: "",
    owner: "",
    user: null
}) {
    const showDelete = useCallback(() => {
        return props.user != null ? props.user.email === props.owner : false
    }, [props.user])

    return (
    <Card className=" bg-secondary p-4 m-4 rounded-lg shadow-md w-4/12 sm:w-3/12 md:w-1/5 lg:w-2/12 lg:max-w-[15vw]">
        <div className="relative">
            <Card.Img className="z-10 rounded-md aspect-square" src={props.img} />
            <Card.Img className="absolute top-0 left-0 z-20 py-4 rounded-sm" src="logo-mug.png" />
        </div>
        <Card.Body>
            <Card.Title className="pt-2 text-center text-white text-md md:text-xl">{props.name}</Card.Title>
            <Card.Text className="text-lg text-center text-white">${props.price}</Card.Text>
            {
                showDelete() ? (
                    <button>X</button>
                ) : null
            }
        </Card.Body>
    </Card>
    )
}