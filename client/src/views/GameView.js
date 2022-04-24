import React from 'react';
import { IconButton, Badge, Heading, VStack, Text, Stack, Button, Box, useToast, Flex, HStack,} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"

const GameView = ({game, index, votes}) => {
    

    const gameVote = (game, up) => {
        // Let server know to record the vote
        if(up) {
            const url = `/controllers/filter_games/vote/game/${game._id}/up`;
            fetch(url, {
                method: "POST"
            })
            .then((res) => {
               
               // Update the individual game vote count
               votes++;
            
            })
            .catch(err => console.log(err));

        } else {
            const url = `/controllers/filter_games/vote/game/${game._id}/down`
            fetch(url, {
                method: "POST"
            })
            .then((res) => {
               alert(`Down-vote recorded for ${game.title}`)
               // Update the individual game vote count
               var res = game.votes--;
            })
        }
        console.log("OK")
        
    }

    React.useEffect(() => {
        votes++;
    }, [votes])

    return (
       
        <Box p={1} borderRadius='md' borderWidth='1px' width={'100%'} >
            <Flex padding={'5px'}>
                <VStack>
                    <IconButton
                        variant='outline'
                        aria-label='Vote Up'
                        icon={<ChevronUpIcon />}
                        onClick={() => {
                            gameVote(game, true)
                        }}>
                    </IconButton>
                    <Text>{votes}</Text>
                    <IconButton
                        variant='outline'
                        aria-label='Vote Down'
                        icon={<ChevronDownIcon />}>
                    </IconButton>
                </VStack>
                <Box margin='2rem'>
                    <Heading as='h3' size='md' marginLeft='15px'>{index+1}. {game.title}</Heading>
                    <HStack margin='5px'>
                            <Badge>{game.platform}</Badge>
                            <Badge>{game.publisher}</Badge>
                            <Badge>{game.genre}</Badge>
                    </HStack>
                </Box>
            </Flex>
        </Box>
    )
}

export default GameView;