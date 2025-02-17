import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./form-pass-style.css";

interface FormPassProps {
    isPassFree: boolean,
    setIsPassFree: (isPassFree: boolean) => void;
}

function FormPass({ isPassFree, setIsPassFree }: FormPassProps) {
    return (
        <FormControl>
            <InputLabel id="select-label">Нужен ли пропуск?</InputLabel>
            <Select
                labelId="select-label"
                id="select-pass"
                label="Нужен ли пропуск?"
                value={String(!isPassFree)}
                onChange={(e) => setIsPassFree(e.target.value === "true" ? false : true)}
            >
                <MenuItem value={"true"}>Да</MenuItem>
                <MenuItem value={"false"}>Нет</MenuItem>
            </Select>
        </FormControl>
    );
}

export default FormPass;