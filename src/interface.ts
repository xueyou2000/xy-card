export interface CardMetaProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 头像/图标
     */
    avatar?: React.ReactNode;
    /**
     * 描述内容
     */
    children?: React.ReactNode;
    /**
     * 标题
     */
    title: React.ReactNode;
}

export interface CardProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 卡片内容
     */
    children?: React.ReactNode;
    /**
     * 卡片操作按钮
     * @description 在卡片底部的操作按钮集合
     */
    actions?: React.ReactNode[];
    /**
     * 是否有边框
     * @description 默认true
     */
    bordered?: boolean;
    /**
     * 卡片封面
     */
    cover?: React.ReactNode;
    /**
     * 右上角扩展操作
     */
    extra?: React.ReactNode;
    /**
     * 是否加载中
     */
    loading?: boolean;
    /**
     * 卡片标题
     */
    title?: React.ReactNode;
    /**
     * 卡片类型
     */
    type?: "inner";
    /**
     * 鼠标移入悬浮
     */
    hoverable?: boolean;
    /**
     * 卡片内容样式
     */
    bodyStyle?: React.CSSProperties;
}
