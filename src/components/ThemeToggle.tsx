'use client'

import React, { PropsWithChildren, useState } from 'react';

import { Classic } from '@theme-toggles/react';

export const ThemeToggle: React.FC<PropsWithChildren> = ({ children }) => {

    const [isToggled, setToggle] = useState(false)

    return (
        <div className={isToggled ? '' : 'dark'}>
            <div className=' fixed top-1.5 right-6 '>
                <Classic placeholder="" toggled={isToggled} toggle={setToggle} className='text-zinc-700 dark:text-zinc-200 text-3xl' />
            </div>
            {children}
        </div>
    );
}
