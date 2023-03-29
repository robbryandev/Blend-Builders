import { useCallback } from "react";
import { Card } from "react-bootstrap";
import { deleteDoc, doc } from "firebase/firestore";
import {db} from "../Utils/firebase";
import {edit, cartStore} from "../Pages/Home";
import { useStore } from "zustand";

export default function Coffee(props = {
    name: "",
    id: 0,
    price: 0.00,
    img: "",
    owner: "",
    user: null
}) {
    const showDelete = useCallback(() => {
        return props.user != null ? props.user.email === props.owner : false
    }, [props.user])

    return (
    <Card className=" bg-secondary p-4 m-4 rounded-lg shadow-md w-4/12 sm:w-3/12 md:w-1/5 lg:w-2/12 lg:max-w-[15vw] coffee-card animate__animated animate__zoomIn">
        <div className="relative">
            <Card.Img className="z-10 rounded-md aspect-square" src={props.img != null ? props.img : "#"} />
            <Card.Img alt={`Flavor uploaded by: ${props.owner}`} className="absolute top-0 left-0 z-20 py-4 rounded-sm" src="logo-mug.png" />
        </div>
        <Card.Body>
            <Card.Title className="pt-2 text-center text-white text-md md:text-xl">{props.name}</Card.Title>
            <div className="p-0 m-0 text-center">
                <button onClick={() => {
                    let newCart = {...cartStore.getState().cart}
                    newCart[props.id] = typeof newCart[props.id] != "undefined"  ? newCart[props.id] + 1 : 1;
                    cartStore.setState({cart: newCart})
                }} className="text-lg text-white">${props.price}</button>
            </div>
            {
                showDelete() ? (
                    <div className="text-center">
                        <button className="bg-primary mr-2 text-white rounded-md px-[1rem] py-[0.2rem] mt-2" type="button" onClick={() => {
                            edit.value = {show: true, coffee: {name: props.name, price: props.price, img: props.img, id: props.id}}
                            window.location = "/#add-coffee"
                        }}>Edit</button>
                        <button className="bg-red-900 text-white rounded-md px-[1rem] py-[0.2rem] mt-2" type="button" onClick={() => {
                            deleteDoc(doc(db, "flavors", props.id))
                                .catch((err) => {
                                    console.log(err);
                                })
                        }}>X</button>
                    </div>
                ) : null
            }
        </Card.Body>
    </Card>
    )
}