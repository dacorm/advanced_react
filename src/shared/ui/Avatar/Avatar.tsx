import React, { CSSProperties, FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt: string;
}

export const Avatar: FC<AvatarProps> = ({
    className, src, size, alt,
}) => {
    const { t } = useTranslation();

    const styles = useMemo<CSSProperties>(() => ({
        width: `${size}px`,
        height: `${size}px`,
    }), []);

    return (
        <img src={src} alt={alt} style={styles} className={classNames(cls.Avatar, {}, [className])} />
    );
};
