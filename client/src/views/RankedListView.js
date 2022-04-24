import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Center, StackDivider, Button, Text, Stack, Heading, Spacer, VStack, MenuOptionGroup, MenuItemOption } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons"

const RankedListView = ({platformSelection}) => {
    const [games, setGames] = React.useState([]);

    React.useEffect(() => {
        const url = `/controllers/filter_games/games/${platformSelection}`;
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            setGames(json)
        })
        .catch((error) => console.log(error));
    }, [platformSelection]);

    return (
    <Center>
        <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4}>
            <Heading>Games</Heading>
            {games.map((dim) => (
                                <Text key={dim.title}>{dim.title}</Text>
                            ))}
            
        </VStack>
    </Center>
    )
}

export default RankedListView;