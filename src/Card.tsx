import classNames from "classnames";
import React from "react";
import { CardProps } from "./interface";
import Skeleton from "xy-skeleton";
import "xy-skeleton/assets/index.css";

export function Card(props: CardProps) {
    const { prefixCls = "xy-card", className, style, children, actions, bordered = true, cover, extra, loading = false, title, type, hoverable, bodyStyle } = props;
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-bordered`]: bordered,
        [`${prefixCls}-hoverable`]: hoverable,
        [`${prefixCls}-type-${type}`]: !!type
    });

    function renderHeader() {
        if (title) {
            return (
                <div className={`${prefixCls}-header`}>
                    <div className={`${prefixCls}-header-wrapper`}>
                        <p className={`${prefixCls}-header-title`}>{title}</p>
                        {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    function renderBody() {
        return (
            <div className={`${prefixCls}-body`} style={bodyStyle}>
                <Skeleton loading={loading}>{children}</Skeleton>
            </div>
        );
    }

    function renderActions() {
        if (actions) {
            const actionStyle: React.CSSProperties = {
                width: `${100 / actions.length}%`
            };

            return (
                <ul className={`${prefixCls}-actions`}>
                    {actions.map((action, i) => (
                        <li key={i} style={actionStyle}>
                            <span>{action}</span>
                        </li>
                    ))}
                </ul>
            );
        } else {
            return null;
        }
    }

    return (
        <div className={classString} style={style}>
            {renderHeader()}
            {cover && <div className={`${prefixCls}-cover`}>{cover}</div>}
            {renderBody()}
            {renderActions()}
        </div>
    );
}

export default React.memo(Card);
