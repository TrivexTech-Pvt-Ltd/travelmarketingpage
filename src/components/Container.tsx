import React, { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={`pt-28 px-20 ${className}`}>{children}</div>
    )
}

export default Container