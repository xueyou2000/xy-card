import React from "react";
import { Card } from "../src";

export default function() {
    return (
        <div>
            <Card title="最外层卡片" style={{ width: 300 }}>
                <p
                    style={{
                        fontSize: 14,
                        color: "rgba(0, 0, 0, 0.85)",
                        marginBottom: 16,
                        fontWeight: 500
                    }}
                >
                    Group title
                </p>

                <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                    Inner Card content
                </Card>
                <Card style={{ marginTop: 16 }} type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                    Inner Card content
                </Card>
            </Card>
        </div>
    );
}
