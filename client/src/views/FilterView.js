import React from 'react';
import RankedListView from "./RankedListView";
import { Menu, MenuButton, MenuList, MenuItem, Center, StackDivider, Button, Text, Stack, Heading, Spacer, VStack, MenuOptionGroup, MenuItemOption } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons"

const FilterView = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [filterDimensions, setFilterDimensions] = React.useState([]);
    const [platformSelection, setPlatformSelection] = React.useState('All');
    const [buttonText, setButtonText] = React.useState('Platform');
    var [selections, setSelections] = React.useState(0);

    const platformSelect = (event) => {
        setPlatformSelection(event)
        setSelections(selections = selections + 1);
      };

    React.useEffect(() => {
        if(selections > 0) {
            setButtonText(platformSelection) 
        }

    }, [platformSelection]);

    React.useEffect(() => {
        const url = "/controllers/filter_games/platforms";
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            setIsLoading(false);
            setFilterDimensions(json);
        })
        .catch((error) => console.log(error));
    }, []);

    return (
    <Center>
        <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4}>
            <Heading>Filter Games By Dimension</Heading>
            <Menu closeOnSelect={true}>
                {({ isOpen }) => (
                    <>
                    <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                            {isOpen ? 'Close' : buttonText}
                    </MenuButton>
                    <MenuList minWidth='240px'>
                        <MenuOptionGroup defaultValue='All' title='Platform' type='radio' onChange={platformSelect}>
                        <MenuItemOption key='All' value='All'>All</MenuItemOption>
                        {filterDimensions.map((dim) => (
                                <MenuItemOption key={dim} value={dim} type='radio'>{dim}</MenuItemOption>
                            ))}
                        </MenuOptionGroup>
                    </MenuList>
                    </>
                )}
            </Menu>
           <RankedListView platformSelection = {platformSelection} />
        </VStack>
    </Center>
    )
}

export default FilterView;