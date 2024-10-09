import { Button, ButtonProps } from 'antd';
import { forwardRef } from 'react';
import { ArrowNarrowLeftIcon } from '~icons';

interface IProps extends ButtonProps {
    color?: 'green' | 'pink';
}

export const ButtonMore = forwardRef<HTMLButtonElement, IProps>(
    ({ color = 'green', className, ...buttonProps }, ref) => (
        <Button
            ref={ref}
            iconPosition='end'
            icon={<ArrowNarrowLeftIcon className='rotate-180' />}
            className={`custom-btn-more custom-btn-more--${color} ${className}`}
            {...buttonProps}
        >
            Xem thêm
        </Button>
    ),
);
ButtonMore.displayName = 'ButtonMore';
