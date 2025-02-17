import { FilledInput, FormControl, InputLabel } from "@mui/material";
import "./form-menu-style.css";

interface FormMenuProps {
    menuId: string;
}

function FormMenu({ menuId }: FormMenuProps) {
    return (<FormControl variant="filled">
        <InputLabel htmlFor="input-description">Id для Меню</InputLabel>
        <FilledInput id="input-description" value={menuId} />
    </FormControl>);

}

export default FormMenu;