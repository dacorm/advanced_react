import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTests';

export interface renderWithRouterOptions {
    route: string;
}

export function renderWithRouter(component: ReactNode, options: renderWithRouterOptions) {
    const {
        route,
    } = options;

    return render(
        <MemoryRouter>
            <I18nextProvider i18n={i18n}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}
