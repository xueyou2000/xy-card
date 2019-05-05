import React from "react";
import { Card, CardMeta } from "../src";

export default function() {
    return (
        <div>
            <Card hoverable={true} style={{ width: "240px" }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                <CardMeta title="Europe Street beat">www.instagram.com</CardMeta>
            </Card>
        </div>
    );
}
