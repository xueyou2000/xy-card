import React from "react";
import { Card } from "../src";

export default function() {
    return (
        <div>
            <Card title="Card title" loading={true} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    );
}
