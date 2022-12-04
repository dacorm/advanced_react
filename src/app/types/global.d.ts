declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    import { ReactElement, SVGProps } from 'react';

    const content: (props: SVGProps<SVGElement>) => ReactElement;
    export default content;
}
declare module '*.stories.ts';
declare module '*.stories.tsx';
declare module '*.png';
declare module '*.jpeg';

declare const __IS_DEV__: boolean;

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
