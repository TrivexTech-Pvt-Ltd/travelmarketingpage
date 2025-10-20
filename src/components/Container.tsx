import React, { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={`py-10 px-8 md:px-12 lg:px-20 xl:px-30 2xl:px-40 ${className}`}>{children}</div>
    )
}

export default Container