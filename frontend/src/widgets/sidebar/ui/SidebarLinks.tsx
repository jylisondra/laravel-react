import React , { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Collapse,  Flex, Text, ThemeIcon, UnstyledButton, useMantineTheme } from '@mantine/core'
import IconChevronRight from 'shared/assets/icons/chevron-right.svg?react'
import classes from './SidebarLinks.module.css'

export type NavLink = {
  label: string
  path: string
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  subLinks?: NavLink[]
}

interface SidebarLinkProps {
  label: string
  path: string
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  subLinks?: NavLink[]
}

const SidebarLinks = ({ icon: Icon, label, subLinks }: SidebarLinkProps) => {
  const [opened, setOpened] = useState(true)
  const theme = useMantineTheme();
  const location = useLocation()
  const isActive = location.pathname === subLinks?.[0].path

  return (
    <Box
      component='div'
      className={classes.linkContainer}
    >
      <UnstyledButton 
        w='100%' 
        onClick={() => setOpened(((prev) => !prev))}
        className={classes.linkContainerButton}
        style={(theme) => ({
          borderBottomLeftRadius: (subLinks && opened) ? 0 : theme.defaultRadius,
          borderBottomRightRadius: (subLinks && opened) ? 0 : theme.defaultRadius,
        })}
      >
        <Flex
          display='flex'
          direction='row'
          align='center'
          justify='space-between'
          w='90%'
          m='0 auto'
        >
          <Flex
            display='flex'
            direction='row'
            align='center'
            gap='xs'
          >
            {Icon && (
              <ThemeIcon variant="light" className={classes.iconContainer} >
                <Icon 
                  style={{ stroke: theme.colors.textLight[2], width: 22, height: 22 }}
                />
              </ThemeIcon>
            )}
            <Text
              style={((theme) => ({
                color: theme.colors.textLight[2],
              }))}
            >
              {label}
            </Text>
          </Flex>
          {subLinks && <IconChevronRight style={{ transform: opened ? 'rotate(90deg)' : 'rotate(0deg)', stroke: theme.colors.textLight[2] }} />}
        </Flex>
      </UnstyledButton>
      {subLinks ? (
        <Collapse in={opened}>
          <Flex
            component='div'
            className={classes.subLinkContainer}
          >
          {subLinks.map((link) => (
            <Text<'a'>
              key={link.label}
              component="a"
              href={link.path}
              className={classes.subLinkText}
            >
              {link.label}
            </Text>
          ))}
          </Flex>
        </Collapse>
      ) : null}
    </Box>
  )
}

export default SidebarLinks