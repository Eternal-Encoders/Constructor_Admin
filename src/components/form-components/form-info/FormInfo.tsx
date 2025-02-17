import { FilledInput, FormControl, InputLabel } from "@mui/material";
import "./form-info-style.css";

interface FormInfoProps {
    info: string,
    setInfo: (names: string) => void;
}

function FormInfo({ info, setInfo }: FormInfoProps) {
    return (
        <FormControl variant="filled">
            <InputLabel htmlFor="input-description">Информация</InputLabel>
            <FilledInput id="input-description" value={info}
                onChange={(e) => {
                    setInfo(e.target.value);
                }} />
        </FormControl>
    );
}

export default FormInfo;