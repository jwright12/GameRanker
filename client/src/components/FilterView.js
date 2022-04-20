import React from 'react';
import { CheckboxGroup, Checkbox, Center, StackDivider, Text, Stack, Heading, Spacer, VStack } from "@chakra-ui/react";
const FilterView = () => {
    return (
    <Center maxW={'7xl'}>
        <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4}>
            <Heading>Filter Games By Dimension</Heading>
            <CheckboxGroup colorScheme='green'>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                    <Text as='em'>Platform:</Text>
                    <Checkbox value='xbox'>Xbox</Checkbox>
                    <Checkbox value='playstation'>PlayStation</Checkbox>
                    <Checkbox value='nintendo'>Nintendo</Checkbox>
                </Stack>
            </CheckboxGroup>
        </VStack>
    </Center>
    )
}

export default FilterView;