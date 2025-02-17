import { IGraphPoint } from "../../utils/Interfaces";
import PointsLink from "../points-link/PointsLink";

interface LinksLayerProps {
    points: { [id: string]: IGraphPoint; };
}

function LinksLayer({ points }: LinksLayerProps) {
    return (
        <div className="links-layer">
            {Object.keys(points).map((key) => {
                const links = points[key].links.map(nextId => <PointsLink key={`${key}-${nextId}`} start={key} end={nextId} />);

                return <>
                    {links}
                </>;
            })}
        </div>
    );
}

export default LinksLayer;