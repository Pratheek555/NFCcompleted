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





const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]

export default function Box() {

    const [scannedProducts, setScannedProducts] = useState([])
    const [amount, setAmount] = useState(0);

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
            </div>
        </div>


    )
}