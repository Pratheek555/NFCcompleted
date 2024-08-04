import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table"
import { useEffect, useState } from "react";
import axios from 'axios'
import { Button } from "@/components/ui/button"







export default function Box() {

    const [scannedProducts, setScannedProducts] = useState([])
    const [amount, setAmount] = useState(0);

    const resetting = async () => {
        // Clear the frontend state
        setScannedProducts([]);
        // Optionally, send a request to the backend to reset the products
        try {
            await axios.post("https://nfc-6ksa.onrender.com/reset-products");
        } catch (error) {
            console.error("Error resetting products:", error);
        }
    };

    useEffect(() => {
        fetch("https://nfc-6ksa.onrender.com/pricing").then(async (res) => {
            const data = await res.json();
            console.log(data);
            setScannedProducts(data);

        });
    }, []);


    useEffect(() => {
        // Calculate the total amount whenever scannedProducts changes
        const totalAmount = scannedProducts.reduce((acc, product) => acc + product.price, 0);
        setAmount(totalAmount);
    }, [scannedProducts]);


    return (

        <div className="grid grid-cols-1">
            <Table className="bg-black text-white">

                <TableCaption>A list of your added products.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Product ID</TableHead>
                        <TableHead className="text-center">Product Name</TableHead>
                        <TableHead className="text-center">Price</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {scannedProducts.map((res) => (
                        <TableRow key={res.id}>
                            <TableCell className="font-medium">{res.id}</TableCell>
                            <TableCell>{res.name}</TableCell>
                            <TableCell>{res.price}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>

                    </TableRow>
                </TableFooter>
            </Table>

            <div className="my-5 text-white">
                <h1 className="text-4xl">Total Amount: {amount}</h1>
                <Button variant="outline" className="text-black m-5" onClick={resetting} >Reset</Button>
                <Button variant="outline" className="text-black m-5" onClick={resetting} >Reset</Button>
                <Button variant="outline" className="text-black m-5" onClick={resetting} >Reset</Button>
            </div>
        </div>


    )
}