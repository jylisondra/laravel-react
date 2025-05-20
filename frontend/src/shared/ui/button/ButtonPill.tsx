import React from 'react'
import { Button } from '@mantine/core'
import styles from './ButtonPill.module.css';

interface ButtonPillProps {
  label?: string
  onClick: () => void
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
}

const ButtonPill: React.FC<ButtonPillProps> = ({ icon:Icon, label, onClick }) => {
  // const dynamicStyles = {
  //   backgroundColor: variant === 'filled' ? color : 'transparent',
  //   color: variant === 'filled' ? '#fff' : color,
  //   border: variant === 'outline' ? `2px solid ${color}` : 'none',
  // };

  return (
    <Button
      className={styles.buttonPill}
      // style={dynamicStyles}
      onClick={onClick}
    >
      {label}
      {Icon && <Icon style={{ marginLeft: '0.5rem', stroke: 'var(--mantine-color-primary)', height: '22px', width: '22px' }} />}
    </Button>
  )
}

export default ButtonPill;