import { Accordion, AccordionDetails, AccordionSummary, Container, Stack } from "@mui/material";
import { useContext } from "react";
import { MapContext } from "../../contexts/MapContext";
import { IWeek, PointTypes } from "../../utils/Interfaces";
import { getRandomString } from "../../utils/Utils";
import Download from "../download/Download";
import {
    FormMenu,
    FormNames,
    FormPass,
    FormStairId,
    FormTime,
    FormTypes
} from "../form-components";
import FormDescription from "../form-components/form-description/FormDescription";
import FormInfo from "../form-components/form-info/FormInfo";
import "./menu-style.css";


interface MenuProps {
    dataId: string | undefined;
}

function Menu({ dataId }: MenuProps) {
    const { graph, options, updateGraphPoint } = useContext(MapContext);

    function setByKey(key: string, value: unknown) {
        if (dataId) {
            const newData = { ...graph[dataId] };

            // @ts-expect-error: There is call by the property name
            newData[key] = value;

            if (newData.types.indexOf(PointTypes.Stair) !== -1) {
                newData.stairId = newData.stairId ? newData.stairId : getRandomString(9);
            } else {
                newData.stairId = undefined;
            }

            if (newData.types.indexOf(PointTypes.Exit) !== -1) {
                newData.isPassFree = newData.isPassFree !== undefined ? newData.isPassFree : true;
            } else {
                newData.isPassFree = undefined;
            }

            const dinnings = [
                PointTypes.Cafe,
                PointTypes.Dinning,
                PointTypes.Vending
            ];
            if (dinnings.some((e) => newData.types.indexOf(e) !== - 1)) {
                newData.menuId = newData.menuId ? newData.menuId : getRandomString(9);
            } else {
                newData.menuId = undefined;
            }

            updateGraphPoint(dataId, newData);
        }
    }

    function setNames(names: string[]) {
        setByKey("names", names);
    }

    function setType(type: PointTypes[]) {
        setByKey("type", type);
    }

    function setWeek(time: IWeek) {
        setByKey("time", time);
    }

    function setDescription(description: string) {
        setByKey("description", description);
    }

    function setInfo(info: string) {
        setByKey("info", info);
    }

    function setIsPassFree(isPassFree: boolean) {
        setByKey("isPassFree", isPassFree);
    }

    function setStairId(stairId: string) {
        setByKey("stairId", stairId);
    }

    function setAccordionSummary() {
        return dataId ? graph[dataId].names.length > 0 ? graph[dataId].names.join(", ") : 'Menu' : "Menu";
    }

    return (
        <Container maxWidth={false} className="menu">
            <div className="menu-form bg-light" onClick={(e) => e.stopPropagation()}>
                <Accordion style={{ maxHeight: "600px", overflowY: "auto" }}>
                    <AccordionSummary>{setAccordionSummary()}</AccordionSummary>
                    <AccordionDetails>
                        {dataId &&
                            <Container maxWidth={false}>
                                <Stack direction={'row'}>
                                    <FormNames names={graph[dataId].names} setNames={setNames} />
                                </Stack>
                                {/* <Stack direction={'column'}> */}
                                <FormTypes types={graph[dataId].types} setTypes={setType} />
                                {/* </Stack> */}
                                <FormTime week={graph[dataId].time} setWeek={setWeek} />
                                <Stack direction={'row'}>
                                    <FormDescription description={graph[dataId].description} setDescription={setDescription} />
                                </Stack>
                                <Stack direction={'row'}>
                                    <FormInfo info={graph[dataId].info} setInfo={setInfo} />
                                </Stack>


                                {graph[dataId].menuId &&
                                    <Stack direction={'row'}>
                                        <FormMenu menuId={String(graph[dataId].menuId)} />
                                    </Stack>
                                }

                                {graph[dataId].isPassFree &&
                                    <Stack direction={'row'}>
                                        <FormPass
                                            isPassFree={Boolean(graph[dataId].isPassFree)}
                                            setIsPassFree={setIsPassFree}
                                        />
                                    </Stack>
                                }

                                {graph[dataId].stairId &&
                                    <Stack direction={'row'}>
                                        {
                                            <FormStairId stairId={graph[dataId].stairId} setStairId={setStairId} />
                                        }
                                    </Stack>
                                }
                            </Container>
                        }
                        <Download
                            institiute={options.institute}
                            floor={options.floor}
                        />
                    </AccordionDetails>
                </Accordion>

            </div>
        </Container>
    );
}

export default Menu;