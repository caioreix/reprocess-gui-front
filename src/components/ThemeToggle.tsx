'use client'

import React, { PropsWithChildren, useState } from 'react';

import { Classic } from '@theme-toggles/react';

export const ThemeToggle: React.FC<PropsWithChildren> = ({ children }) => {
    const isDark = (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
    const [isToggled, setToggle] = useState(isDark)

    const onToggle = () => {
        localStorage.theme = isToggled ? 'light' : 'dark'
    }

    return (
        <div className={isToggled ? 'dark' : 'light'}>
            <div className=' fixed top-1.5 right-6 '>
                <Classic placeholder="" onToggle={onToggle} toggled={isToggled} toggle={setToggle} className='text-zinc-700 dark:text-zinc-200 text-3xl' />
            </div>
            {children}
        </div>
    );
}
