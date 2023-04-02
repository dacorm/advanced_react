import React, { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    readonly?: boolean;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
}

export const Select: FC<SelectProps> = ({
    className, label, options, value, onChange, readonly,
}) => {
    const { t } = useTranslation();

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select disabled={readonly} value={value} className={cls.select}>
                {
                    options?.map((opt) => (
                        <option className={cls.option} value={opt.value} key={opt.value}>{opt.label}</option>
                    ))
                }
            </select>
        </div>
    );
};
