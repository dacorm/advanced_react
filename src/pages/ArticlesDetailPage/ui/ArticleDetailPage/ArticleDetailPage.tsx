import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';

const ArticleDetailPage = () => {
    const { t } = useTranslation();
    const { id } = useParams();

    return (
        <div>
            <ArticleDetails id={id} />
        </div>
    );
};

export default ArticleDetailPage;
