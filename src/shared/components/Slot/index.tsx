import React from 'react';
import { composeRefs } from '~helper/composeRef';

interface ISlotProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
}
const Slot = React.forwardRef<HTMLElement, ISlotProps>((props, forwardRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);

    if (!slottable) {
        return (
            <SlotClone {...slotProps} ref={forwardRef}>
                {children}
            </SlotClone>
        );
    }

    const newElement = slottable.props.children as React.ReactNode;
    const newChildren = childrenArray.map((child) => {
        if (child !== slottable) return child;
        if (React.Children.count(newElement) > 1) return React.Children.only(null);
        return React.isValidElement(newElement) ? (newElement.props.children as React.ReactNode) : null;
    });

    return (
        <SlotClone {...slotProps} ref={forwardRef}>
            {React.isValidElement(newElement) ? React.cloneElement(newElement, undefined, newChildren) : null}
        </SlotClone>
    );
});
Slot.displayName = 'Slot';

interface ISlotCloneProps {
    children: React.ReactNode;
}
const SlotClone = React.forwardRef<any, ISlotCloneProps>((props, forwardRef) => {
    const { children, ...slotProps } = props;
    if (!React.isValidElement(children)) return React.Children.count(children) > 1 ? React.Children.only(null) : null;

    const childrenRef = getElementRef(children);
    const cloneProps = {
        ...mergeProps(slotProps, children.props),
        ref: forwardRef ? composeRefs(forwardRef, childrenRef) : childrenRef,
    };
    return React.cloneElement(children, { ...cloneProps });
});
SlotClone.displayName = 'SlotClone';

const Slottable = ({ children }: { children: React.ReactNode }) => {
    return <React.Fragment>{children}</React.Fragment>;
};

function isSlottable(child: React.ReactNode): child is React.ReactElement {
    return React.isValidElement(child) && child.type === Slottable;
}

// Before React 19 accessing `element.props.ref` will throw a warning and suggest using `element.ref`
// After React 19 accessing `element.ref` does the opposite.
// https://github.com/facebook/react/pull/28348
//
// Access the ref using the method that doesn't yield a warning.
function getElementRef(element: React.ReactElement) {
    // React <=18 in DEV
    let getter = Object.getOwnPropertyDescriptor(element.props, 'ref')?.get;
    let mayWarn = getter && 'isReactWarning' in getter && getter.isReactWarning;
    if (mayWarn) return (element as any).ref;

    // React 19 in DEV
    getter = Object.getOwnPropertyDescriptor(element, 'ref')?.get;
    mayWarn = getter && 'isReactWarning' in getter && getter.isReactWarning;
    if (mayWarn) return element.props.ref;

    // Not DEV
    return element.props.ref || (element as any).ref;
}

type AnyProps = Record<string, any>;
function mergeProps(slotProps: AnyProps, childProps: AnyProps) {
    const overrideProps = { ...childProps };

    for (const propName in childProps) {
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];

        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args: any) => {
                    childPropValue(...args);
                    slotPropValue(...args);
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === 'style') {
            overrideProps[propName] = { ...slotPropValue, ...childPropValue };
        } else if (propName === 'className') {
            overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(' ');
        }
    }

    return { ...slotProps, ...overrideProps };
}

export { Slot, Slottable };
export type { ISlotProps };
