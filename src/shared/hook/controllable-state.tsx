import React from 'react';
import { useCallbackRef } from '~hook/callback-ref';

interface IControllableState<T> {
    prop: T | undefined;
    defaultProp: T | undefined;
    onChange: ((state: T) => void) | undefined;
}
function useControllableState<T>({ prop, defaultProp, onChange }: IControllableState<T>) {
    const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({ defaultProp, onChange });
    const handleChange = useCallbackRef(onChange);
    const isControlled = prop !== undefined;
    const value = isControlled ? prop : uncontrolledProp;

    if (prop !== undefined && onChange === undefined) {
        console.error(
            'Warning: You provided a `value` prop without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange`.',
        );
    }

    const setValue: React.Dispatch<React.SetStateAction<T | undefined>> = React.useCallback(
        (nextValue) => {
            if (isControlled) {
                const newValue = nextValue instanceof Function ? nextValue(prop) : nextValue;
                if (newValue !== undefined && newValue !== prop) handleChange(newValue);
            } else {
                setUncontrolledProp(nextValue);
            }
        },
        [handleChange, isControlled, prop, setUncontrolledProp],
    );

    return [value, setValue] as const;
}

function useUncontrolledState<T>({ defaultProp, onChange }: Omit<IControllableState<T>, 'prop'>) {
    const uncontrolledState = React.useState<T | undefined>(defaultProp);
    const [value] = uncontrolledState;
    const valueRef = React.useRef(value);
    const handleChange = useCallbackRef(onChange);

    React.useEffect(() => {
        if (value !== undefined && value !== valueRef.current && handleChange) {
            handleChange(value);
            valueRef.current = value;
        }
    }, [handleChange, value]);

    return uncontrolledState;
}

export { useControllableState };
