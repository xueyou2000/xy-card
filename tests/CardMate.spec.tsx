import React from "react";
import { render } from "react-testing-library";
import { Card, CardMeta } from "../src";

describe("CardMeta", () => {
    test("Render", () => {
        const wrapper = render(<CardMeta title="meta标题">描述说明</CardMeta>);
        const title = wrapper.getByText("meta标题");
        expect(title.classList.contains("xy-card-meta-title")).toBeTruthy();
        const description = wrapper.getByText("描述说明");
        expect(description.classList.contains("xy-card-meta-description")).toBeTruthy();
    });

    test("Avatar", () => {
        const wrapper = render(
            <CardMeta avatar={<img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="avatar img" />} title="meta标题">
                描述说明
            </CardMeta>
        );

        const img = wrapper.getByAltText("avatar img");
        expect(img.parentElement.classList.contains("avatar")).toBeTruthy();
    });
});
