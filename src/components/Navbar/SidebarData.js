import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';


export const SidebarData = [
    {
        title: "Shop",
        path: '/shop',
        icon: <AiIcons.AiFillHome />,
        cName: 'sidebar-text'
    },
    {
        title: "Playstation",
        path: '/playstation',
        icon: <FaIcons.FaPlaystation />,
        cName: 'sidebar-text'
    },
    {
        title: "Xbox",
        path: '/xbox',
        icon: <FaIcons.FaXbox />,
        cName: 'sidebar-text'
    },
    {
        title: "Nintendo",
        path: '/nintendo',
        icon: <SiIcons.SiNintendo />,
        cName: 'sidebar-text'
    }
]
