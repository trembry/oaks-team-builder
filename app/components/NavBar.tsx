"use client"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function NavBar() {
    return (
        <Tabs isFitted variant='unstyled'>
            <TabList>
                <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Home</Tab>
                <Tab _selected={{ color: 'white', bg: 'green.400' }}>Types</Tab>
                <Tab _selected={{ color: 'white', bg: 'red.400' }}>Pokemon</Tab>
            </TabList>
        </Tabs>
    )
}