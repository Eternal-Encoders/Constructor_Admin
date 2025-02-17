import { Button, FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import { PointTranslation, PointTypes } from "../../../utils/Interfaces";

import "./form-types-style.css";

interface FormTypesProps {
    types: PointTypes[],
    setTypes: (types: PointTypes[]) => void;
}

function FormTypes({ types, setTypes }: FormTypesProps) {
    return (
        <FormControl fullWidth>
            <InputLabel>Тип точки</InputLabel>
            {types.map((el, index) =>

                <>
                    <Select
                        key={index}
                        value={el}
                        onChange={(e) => {
                            types[index] = e.target.value as PointTypes;
                            console.log(types);
                            setTypes(types);
                        }}
                    >
                        {Object.keys(PointTranslation).map((key) => {
                            // @ts-expect-error: Call by string property name
                            const el = PointTranslation[key];

                            return <>
                                <MenuItem value={key} >
                                    {el}
                                </MenuItem>
                            </>;

                        })}
                    </Select>
                </>
            )
            }
            <Stack direction={'row'}>
                <Button
                    onClick={() => {
                        types.push(PointTypes.Auditorium);
                        setTypes(types);
                    }}
                >
                    +
                </Button>
                <Button
                    className=""
                    onClick={() => {
                        types.pop();
                        setTypes(types);
                    }}
                >
                    -
                </Button>
            </Stack>
        </FormControl >
    );
}

export default FormTypes;