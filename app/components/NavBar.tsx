"use client"
import { Tabs, TabList, Tab } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

export default function NavBar() {
    const router = useRouter();

    const handleTabChange = (index: Number) => {
        if (index === 0) 
            router.push("/");
        if (index === 1)
            router.push("/types");
        if (index === 2)
            router.push("/team");
        if (index === 3) {
            router.push("/pokemon");
        }
    }

    return (
        <Tabs isFitted variant='unstyled' onChange={(index) => handleTabChange(index)}>
            <TabList height={100}>
                <Tab _selected={{ borderBottomWidth: '4px', borderBottomColor: 'blue.500', color: 'black', bg: 'gray.100' }}>Home</Tab>
                <Tab _selected={{ borderBottomWidth: '4px', borderBottomColor: 'green.400', color: 'black', bg: 'gray.100' }}>Types</Tab>
                <Tab _selected={{ borderBottomWidth: '4px', borderBottomColor: 'red.400', color: 'black', bg: 'gray.100' }}>Team</Tab>
                <Tab _selected={{ borderBottomWidth: '4px', borderBottomColor: 'yellow.300', color: 'black', bg: 'gray.100' }}>Pokemon</Tab>    
            </TabList>
        </Tabs>
    )
}