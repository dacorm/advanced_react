import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
    className?: string;
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockProps> = memo(
    ({ className, block }: ArticleCodeBlockProps) => {
        const { t } = useTranslation();

        return (
            <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
                <Code>{block.code}</Code>
            </div>
        );
    },
);
