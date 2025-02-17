import { Button, FilledInput, FormControl, Stack, Typography } from "@mui/material";
import "./form-names-style.css";

interface FormNamesProps {
    names: string[],
    setNames: (names: string[]) => void;
}

function FormNames({ names, setNames }: FormNamesProps) {
    return (
        <FormControl>
            <Typography>Названия</Typography>
            <Stack direction='column'>
                {names.map((el, index) => {
                    return <>
                        <FilledInput
                            key={index}
                            type="text"
                            placeholder="Название"
                            value={el}
                            onChange={(e) => {
                                names[index] = e.target.value;
                                setNames(names);
                            }}
                        />
                    </>;
                })}
            </Stack>
            <Stack direction={'row'}>
                <Button
                    onClick={() => {
                        names.push("");
                        setNames(names);
                    }}
                >
                    +
                </Button>
                <Button
                    onClick={() => {
                        names.pop();
                        setNames(names);
                    }}
                >
                    -
                </Button>
            </Stack>
        </FormControl>
    );
}

export default FormNames;