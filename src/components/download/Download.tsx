import { useContext } from "react";
import { MapContext } from "../../contexts/MapContext";

import { Button } from "@mui/material";
import { IMapObject } from "../../utils/Interfaces";
import "./download-style.css";

interface DownloadProps {
    institiute: string,
    floor: number;
}

function Download({ institiute, floor }: DownloadProps) {
    const {
        graph,
        audiences,
        options,
        service
    } = useContext(MapContext);

    function handelOnClick() {
        const obj: IMapObject = {
            service,
            audiences,
            graph,
            ...options
        };

        const link = document.createElement("a");
        const newFile = new Blob([JSON.stringify(obj)], { type: "application/json" });
        link.href = URL.createObjectURL(newFile);
        link.download = `${institiute}_${floor}.json`;
        link.click();
    }

    return (
        <>
            <Button variant="contained" onClick={handelOnClick}>
                Скачать граф
            </Button>
        </>
    );
}

export default Download;
