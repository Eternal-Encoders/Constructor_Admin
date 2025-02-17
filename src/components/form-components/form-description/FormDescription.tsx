import { FilledInput, FormControl, InputLabel } from "@mui/material";
import "./form-description-style.css";

interface FormNamesProps {
    description: string,
    setDescription: (description: string) => void;
}

function FormDescription({ description, setDescription }: FormNamesProps) {
    return (
        <FormControl variant="filled">
            <InputLabel htmlFor="input-description">Описание</InputLabel>
            <FilledInput id="input-description" value={description}
                onChange={(e: { target: { value: string; }; }) => {
                    setDescription(e.target.value);
                }} />
        </FormControl>
    );
}

export default FormDescription;