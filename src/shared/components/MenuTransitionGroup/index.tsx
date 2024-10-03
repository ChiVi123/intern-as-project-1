import classNames from 'classnames/bind';
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import { useControllableState } from '~hook/controllable-state';
import { ArrowIcon } from '~icons';

import styles from './menu-transition-group.module.scss';

type MenuTransitionGroupContextType = {
    currentName: string | undefined;
    mapPath: Map<string, string[]>;
    timeout: number;
    setName: Dispatch<SetStateAction<string | undefined>>;
};

const initContext: MenuTransitionGroupContextType = {
    currentName: '',
    mapPath: new Map<string, string[]>(),
    timeout: 500,
    setName: () => {},
};
const MenuTransitionGroupContext = createContext<MenuTransitionGroupContextType>(initContext);

// MenuItemTransitionGroup

interface IMenuItemProps {
    itemId: string;
    goTo?: string;
    iconLeft?: ReactNode | undefined;
    iconRight?: ReactNode | undefined;
    toHref?: string;
    isSub?: boolean;
    children: ReactNode;
}
const cx = classNames.bind(styles);

function MenuItemTransitionGroup({ itemId, goTo, iconLeft, iconRight, toHref, isSub, children }: IMenuItemProps) {
    const { mapPath, setName } = useContext(MenuTransitionGroupContext);
    const [active, setActive] = useState<boolean>(false);
    const { pathname } = useLocation();
    const componentContentClassNames: string = useMemo(
        () =>
            cx('item-text', {
                'item-text--sm': isSub,
                'item-text--lg': !isSub,
            }),
        [isSub],
    );

    useEffect(() => {
        if (isSub) {
            setActive(pathname === itemId);
            return;
        }

        const childrenPath: string[] | undefined = mapPath.get(itemId);

        if (!childrenPath) {
            return;
        }

        setActive(pathname === itemId || childrenPath.includes(pathname));
    }, [isSub, itemId, mapPath, pathname]);

    const handleClick = (value: string | undefined) => {
        if (iconRight) {
            setName(value);
        }
        if (iconLeft) {
            setName(value);
        }
    };

    return (
        <div
            className={cx('item', {
                'item--sub-active': isSub && active,
                'item--active': !isSub && active,
            })}
        >
            {iconLeft && (
                <span className={cx('item-icon')} onClick={() => handleClick(goTo)}>
                    {iconLeft}
                </span>
            )}
            {toHref ? (
                <NavLink to={toHref} className={componentContentClassNames}>
                    {children}
                </NavLink>
            ) : (
                <span className={componentContentClassNames}>{children}</span>
            )}
            {iconRight && (
                <span className={cx('item-icon')} onClick={() => handleClick(goTo)}>
                    {iconRight}
                </span>
            )}
        </div>
    );
}

// MenuTransitionGroup

interface IMenuProps {
    name: string;
    prefixClass: string;
    children: ReactNode;
}

function MenuTransitionGroup({ name, prefixClass, children }: IMenuProps) {
    const { currentName, timeout } = useContext(MenuTransitionGroupContext);
    const nodeRef = useRef(null);

    return (
        <Transition nodeRef={nodeRef} in={currentName === name} timeout={timeout}>
            {(state) => (
                <div ref={nodeRef} className={cx('wrap', `${prefixClass}-${state}`)}>
                    {children}
                </div>
            )}
        </Transition>
    );
}

// MenuTransitionGroupProvider

type NavItemType = { key: string; parentKey?: string; toLink?: string; goTo?: string; label: string };
type TransitionGroupType = { groupname: string; className: string; navItems: NavItemType[] };

interface IMenuProviderProps {
    name?: string;
    timeout?: number;
    defaultName?: string;
    items: TransitionGroupType[];
    onNameChange?: (value: string) => void;
}

function MenuTransitionGroupProvider({ name, defaultName, timeout = 500, items, onNameChange }: IMenuProviderProps) {
    const [currentName, setName] = useControllableState<string>({
        prop: name,
        defaultProp: defaultName,
        onChange: onNameChange,
    });
    const mapPath: Map<string, string[]> = useMemo(() => {
        const map = new Map<string, string[]>();

        items.forEach((group) => {
            group.navItems.forEach((item) => {
                if (!item.parentKey) {
                    !map.has(item.key) && map.set(item.key, []);
                    return;
                }

                const childrenPath: string[] | undefined = map.get(item.parentKey);

                if (!childrenPath) {
                    return;
                }

                childrenPath.push(item.key);
                map.set(item.parentKey, childrenPath);
            });
        });

        return map;
    }, [items]);

    return (
        <MenuTransitionGroupContext.Provider value={{ currentName, mapPath, timeout, setName }}>
            {items.map((group) => (
                <MenuTransitionGroup
                    key={'navigation-group' + group.groupname}
                    name={group.groupname}
                    prefixClass={group.className}
                >
                    {group.navItems.map((item) => (
                        <MenuItemTransitionGroup
                            key={item.key}
                            itemId={item.key}
                            goTo={item.goTo}
                            toHref={item.toLink}
                            isSub={group.className === 'sub'}
                            iconRight={item.goTo ? <ArrowIcon /> : null}
                        >
                            {item.label}
                        </MenuItemTransitionGroup>
                    ))}
                </MenuTransitionGroup>
            ))}
        </MenuTransitionGroupContext.Provider>
    );
}

export { MenuTransitionGroupProvider };
export type { TransitionGroupType };
