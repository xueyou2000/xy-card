import React from "react";
import { render } from "@testing-library/react";
import { Card } from "../src";

describe("Card", () => {
    const mockMatchMedia = jest
        // 默认
        .fn(() => ({ matches: false, addListener: jest.fn(), removeListener: jest.fn() }))
        // 第一次结果
        .mockImplementationOnce(() => ({ matches: true, addListener: jest.fn(), removeListener: jest.fn() }))
        // 第二次结果
        .mockImplementationOnce(() => ({ matches: false, addListener: jest.fn(), removeListener: jest.fn() }));

    (global as any).matchMedia = mockMatchMedia;

    test("Render", () => {
        const wrapper = render(
            <Card title="Card title">
                <p>Card content</p>
            </Card>,
        );

        const title = wrapper.getByText("Card title");
        expect(title.classList.contains("xy-card-header-title")).toBeTruthy();

        const content = wrapper.getByText("Card content");
        expect(content.parentElement.classList.contains("xy-skeleton")).toBeTruthy();

        const card = wrapper.container.querySelector(".xy-card");
        expect(card.classList.contains("xy-card-bordered")).toBeTruthy();
    });

    test("Cover", () => {
        const wrapper = render(
            <Card cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                <p>Card content</p>
            </Card>,
        );

        const img = wrapper.getByAltText("example");
        expect(img.parentElement.classList.contains("xy-card-cover")).toBeTruthy();
    });

    test("Inner Type", () => {
        const wrapper = render(
            <Card type="inner">
                <p>Card content</p>
            </Card>,
        );

        const card = wrapper.container.querySelector(".xy-card");
        expect(card.classList.contains("xy-card-type-inner")).toBeTruthy();
    });

    test("Loading", () => {
        const wrapper = render(
            <Card loading={true}>
                <p>Card content</p>
            </Card>,
        );

        const skeleton = wrapper.container.querySelector(".xy-skeleton");
        expect(skeleton.classList.contains("loading")).toBeTruthy();
    });

    test("Actions", () => {
        const wrapper = render(
            <Card actions={["按钮1", "按钮2"]}>
                <p>Card content</p>
            </Card>,
        );

        const btns = wrapper.container.querySelectorAll(".xy-card-actions li") as NodeListOf<HTMLElement>;
        expect(btns.length).toBe(2);

        expect(btns[0].style.width).toBe("50%");
        expect(btns[1].style.width).toBe("50%");
    });
});
