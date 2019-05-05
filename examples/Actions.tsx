import React from "react";
import { Card, CardMeta } from "../src";
import { faCog, faEdit, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
    return (
        <div>
            <Card
                title="Card title"
                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                style={{ width: 300 }}
                actions={[<FontAwesomeIcon icon={faCog} />, <FontAwesomeIcon icon={faEdit} />, <FontAwesomeIcon icon={faEllipsisH} />]}
            >
                <CardMeta title="Europe Street beat" avatar={<img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}>
                    www.instagram.com
                </CardMeta>
            </Card>
        </div>
    );
}
