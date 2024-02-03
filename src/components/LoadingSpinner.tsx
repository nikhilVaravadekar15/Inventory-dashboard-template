import {
    Loader2
} from "lucide-react"
import { cn } from "../lib/utils"

type TLoadingSpinnerProps = {
    color?: string
    classname?: string
}

export default function LoadingSpinner({ color, classname }: TLoadingSpinnerProps) {
    return (
        <div className="flex items-center justify-center">
            <Loader2
                color={color ? color : "black"}
                className={cn(
                    "h-12 w-12 animate-spin", classname
                )}
            />
        </div>
    )
}
