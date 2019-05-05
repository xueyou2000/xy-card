import classNames from "classnames";
import React from "react";
import { CardMetaProps } from "./interface";

export function CardMeta(props: CardMetaProps) {
    const { prefixCls = "xy-card-meta", className, style, title, children, avatar } = props;

    return (
        <div className={classNames(prefixCls, className)} style={style}>
            {avatar && (
                <div className="avatar-wrapper">
                    <span className="avatar">{avatar}</span>
                </div>
            )}
            <div className={`${prefixCls}-summary`}>
                <p className={`${prefixCls}-title`}>{title}</p>
                {children && <div className={`${prefixCls}-description`}>{children}</div>}
            </div>
        </div>
    );
}

export default React.memo(CardMeta);
