import {
  Center,
  Box,
  Link,
  ExternalLinkIcon,
  Button,
  Divider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  HStack,
  FormHelperText,
  Checkbox, 
  CheckboxGroup,
  Textarea,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react'
import React from 'react';

const AddGameView = (props) => {
  /*
    We need to set AddGameVie state information so that when Users enter data intot he form fields it is updated. It needs to be updated because on the Submit button evemt
    it will need to read the state values and pass it to the server.
  */

    // One for each initial value of the state data we want to keep track of
    const [gameData, setGameData] = React.useState({})
    const[title, setTitle] = React.useState('');
    const[publisher, setPublisher] = React.useState('');
    const[platform, setPlatform] = React.useState('');
    const[genre, setGenre] = React.useState('');

    const updateTitle = async (e) => {
      setTitle(e.target.value, () => {})
    }

    const updatePublisher = async (e) => {
      setPublisher(e.target.value, () => {})
    }

    const updatePlatform = async (e) => {
      setPlatform(e.target.value, () => {})
    }
    const updateGenre = async (e) => {
      setGenre(e.target.value, () => {})
    }


    React.useEffect(() => {
      setGameData({...gameData, title: title});

    }, [title]);

    React.useEffect(() => {
      setGameData({...gameData, publisher: publisher});

    }, [publisher]);

    React.useEffect(() => {
      setGameData({...gameData, platform: platform});

    }, [platform]);

    React.useEffect(() => {
      setGameData({...gameData, genre: genre});

    }, [genre]);

    const submitToServer = () => {
      
      const url = `/controllers/add_game/game`;

      fetch(url,{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(gameData)
      })
      .then((res) => {
        console.log("DB insertion succeeded.")
      })
      .catch((err) => {
        console.log("Something went wrong.")
      })
    }

    return (
    <>
        <Center margin='15px'>
            <FormLabel as='legend'>Add Game Form</FormLabel>
            </Center>
                      
            <Center> 
          <Box bg='White' w='75%' p={4} color='Black' borderColor='primary.700' borderWidth='3px' borderRadius='lg'>

            <Box p={8}>
              <FormControl variant='floating' id='Game-title' isRequired isInvalid>
                <FormLabel>Game title</FormLabel>
                <Input placeholder='Enter Title here' value={title} onChange={(e) => {updateTitle(e)}}/>
              </FormControl>
            </Box>
      
            <Divider size= '5000px'  color='primary.700' />

            <Box p={8}>
              <FormControl variant='floating' id='Game-publisher' isRequired isInvalid>
                <FormLabel>Game Publisher</FormLabel>
                <Input placeholder='Enter Publisher here' value={publisher} onChange={(e) => {updatePublisher(e)}} />
              </FormControl>
            </Box>

            <Divider size= '5000px'  color='primary.700' />

            <Box p={8}>
              <FormLabel as='legend'>Game Release Year</FormLabel>
              <NumberInput size='sm' defaultValue={2022} min={1971} max={2022}>
                <NumberInputField focusBorderColor='red.200' />
                <NumberInputStepper>
                  <NumberIncrementStepper
                    bg='green.200'
                    _active={{ bg: 'green.300' }}
                    children='+'
                  />
                  <NumberDecrementStepper
                    bg='pink.200'
                    _active={{ bg: 'pink.300' }}
                    children='-'
                  />
                </NumberInputStepper>
              </NumberInput>
            </Box>

            <Divider size= '5000px'  color='primary.700' />


            <Box p={8}>
              <FormControl variant='floating' id='Game-Platform' isRequired isInvalid>
                <FormLabel>Game Platform</FormLabel>
                <Input placeholder='Enter Platform here' value={platform} onChange={(e) => {updatePlatform(e)}}/>
                <FormHelperText>Example: Nintendo Switch, Xbox one, PS4, ect.</FormHelperText>
              </FormControl>
            </Box>

            <Divider size= '5000px'  color='primary.700' />

            <Box p={8}>
                <FormLabel as='legend' >Game description</FormLabel>
                <Textarea placeholder='Enter game description here.' />
            </Box>
            
            <Divider size= '5000px'  color='primary.700' />



            <Box p={8}>
                      
              <FormLabel as='legend'>Select a Game Genre</FormLabel>
              <Select placeholder='Game genre' value={genre} onChange={(e) => {updateGenre(e)}}>
                <option value='Action'>Action</option>
                <option value='Adventure'>Adventure</option>
                <option value='Action-Adventure'>Action Adventure</option>
                <option value='Puzzle'>Puzzle</option>
                <option value='RPG'>RPG</option>
                <option value='FPS'>FPS</option>
                <option value='Racing'>Racing</option>
                <option value='Simulation'>Simulation</option>
                <option value='Strategy'>Strategy</option>
                <option value='Sports'>Sports</option>
                <option value='MMO'>MMO</option>
                <option value='Open-World'>Open World</option>
                <option value='Shooter'>Shooter</option>
              </Select>
            </Box>
            
            <Divider size= '5000px'  color='primary.700' />

            <Center> 
              <Button
                  mt={4}
                  colorScheme='teal'
                  isLoading={props.isSubmitting}
                  type='submit'
                  onClick={() => {
                    submitToServer()
                  }}>
                  Submit
              </Button>
            </Center>

          </Box>
      </Center>
    </>
    );
  };
  
  export default AddGameView;