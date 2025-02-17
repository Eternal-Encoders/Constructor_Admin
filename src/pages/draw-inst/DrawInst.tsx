import { Container, Stack } from "@mui/material";
import { useState } from "react";
import MapUploader from "../../components/map-uploader/MapUploader";
import Renderer from "../../components/renderer/Renderer";
import { DrawState } from "../../contexts/DrawContext";
import { MapState } from "../../contexts/MapContext";

function DrawInst() {
    const [isUpload, setIsUpload] = useState(true);

    return (
        <DrawState>
            <MapState>
                {isUpload ?
                    <Container maxWidth={false} >
                        <Stack direction="row" height={100} alignItems={"center"}>
                            <Stack direction='column' justifyContent={"center"} >
                                <MapUploader onUpload={setIsUpload} />
                            </Stack>
                        </Stack>
                    </Container>
                    :
                    <Renderer />
                }
            </MapState>
        </DrawState>
    );
}

export default DrawInst;