import { Button, FilledInput, FormControl, InputLabel, Stack, Typography } from "@mui/material";
import { ITime, IWeek } from "../../../utils/Interfaces";
import { getDefaultTime } from "../../../utils/const";
import "./form-time-style.css";

interface FormTimeProps {
    week: IWeek,
    setWeek: (week: IWeek) => void;
}

function FormTime({ week, setWeek }: FormTimeProps) {
    console.log(week);
    return (
        <>
            <Typography sx={{ marginBottom: '8px' }}>График работы</Typography>
            {week.map((day, index) => {
                return day && (
                    <Stack direction='column' spacing={2} sx={{ mb: 2 }}>
                        <Stack direction='row' spacing={2} key={`${index}_Times`}>
                            <FormControl>
                                <InputLabel>От</InputLabel>
                                <FilledInput
                                    type="time"
                                    value={day.from}
                                    onChange={(e) => {
                                        const curDay = week[index] ? week[index] as ITime : getDefaultTime();
                                        curDay.from = e.target.value;
                                        week[index] = curDay;
                                        setWeek(week);
                                    }}
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel>До</InputLabel>
                                <FilledInput
                                    type="time"
                                    value={day.to}
                                    onChange={(e) => {
                                        const curDay = week[index] ? week[index] as ITime : getDefaultTime();
                                        curDay.to = e.target.value;
                                        week[index] = curDay;
                                        setWeek(week);
                                    }}
                                />
                            </FormControl>
                        </Stack>
                        {/* <Stack direction='row'>
                            <FormControl >
                                <InputLabel>День</InputLabel>
                                <Select
                                    //@ts-expect-error Call by Enum like an array
                                    value={WeekDay[index]}
                                    onChange={(curDay) => {
                                        week.splice(index, 1);
                                        week[Number(curDay.target.value)] = day;
                                        setWeek(week);
                                    }}
                                >
                                    {//@ts-expect-error Iterate trough enum
                                        Object.values(WeekDay).filter<number>((e) => !isNaN(Number(e)) && e >= index).map((e) => {
                                            //@ts-expect-error Call by Enum like an array
                                            const el: WeekDay = WeekDay[e];
                                            return (
                                                <MenuItem value={e} key={e}>
                                                    {el}
                                                </MenuItem>
                                            );
                                        })}
                                </Select>
                            </FormControl>
                        </Stack> */}
                    </Stack>
                );
            })
            }
            <Stack direction='row'>
                {week.length <= 6 &&
                    <Button
                        onClick={() => {
                            //@ts-expect-error In this scenario week.length is allways < 7
                            week[week.length] = getDefaultTime();
                            setWeek(week);
                        }}
                    >
                        +
                    </Button>
                }
                <Button
                    onClick={() => {
                        week.pop();
                        for (let i = week.length - 1; i >= 0; i--) {
                            const dayWeek = week[i];
                            if (!dayWeek) {
                                week.pop();
                            } else {
                                break;
                            }
                        }
                        setWeek(week);
                    }}
                >
                    -
                </Button>
            </Stack>
        </>
    );
}

export default FormTime;