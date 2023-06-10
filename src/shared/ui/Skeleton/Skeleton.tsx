import React, { CSSProperties, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton: FC<SkeletonProps> = ({
    className, height, border, width,
}) => {
    const { t } = useTranslation();

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div style={styles} className={classNames(cls.Skeleton, {}, [className])} />
    );
};
