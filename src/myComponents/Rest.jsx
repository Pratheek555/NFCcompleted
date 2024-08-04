import React from "react"
import { Button } from "@/components/ui/button"

export default function ResetButton() {
    return (<div>
        <Button variant="outline" onClick={() => {
            console.log("The reset button was pressed bitch")
        }} >Reset</Button>
    </div>)
}