import React from 'react';
import { CheckboxGroup, Checkbox, Center, StackDivider, Text, Stack, Heading, Spacer, VStack } from "@chakra-ui/react";

const FilterView = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [filterDimensions, setFilterDimensions] = React.useState([]);

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
            <CheckboxGroup colorScheme='green'>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                    <Text as='em'>Platform:</Text>
                    {isLoading ? (<h1>Fetching Games...</h1>)
                                : filterDimensions.map((dim) => (
                                    <React.Fragment key={dim}>
                                        <Checkbox>{dim}</Checkbox>
                                    </React.Fragment>
                                    ))}
                </Stack>
            </CheckboxGroup>
        </VStack>
    </Center>
    )
}

export default FilterView;