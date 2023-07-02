import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockProps> = memo(
    ({ className, block }: ArticleTextBlockProps) => {
        const { t } = useTranslation();

        return (
            <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
                {block.title && (
                    <Text title={block.title} className={cls.title} />
                )}
                {block.paragraphs.map((paragraph) => (
                    <Text key={paragraph} text={paragraph} className={cls.paragraph} />
                ))}
            </div>
        );
    },
);
