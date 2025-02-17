import { FilledInput, FormControl, InputLabel } from "@mui/material";
import "./form-stair-id-style.css";

interface FormStairIdProps {
    stairId: string,
    setStairId: (stairId: string) => void;
}

function FormStairId({ stairId, setStairId }: FormStairIdProps) {
    return (
        <FormControl>
            <InputLabel>Id лестницы</InputLabel>
            <FilledInput
                value={stairId}
                onChange={(e: { target: { value: string; }; }) => setStairId(e.target.value)}
            />
        </FormControl>
    );
}

export default FormStairId;