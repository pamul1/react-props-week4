import { NavBar } from "../Components/NavBar"
import { FruitsList } from "../Components/FruitsList"
import { Footer } from "../Components/Footer"

export const Home = () => {

    const userName = "Pax"

    const fruits = ["Apple", "Banana", "Pinneaple", "Strawberry"]

    return (
        <>
            <NavBar userName={userName}/>
            <h1>Home</h1>
            <FruitsList fruits={fruits}/>
            <Footer siteName={"Website"}/>
        </>
    )

}