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

    const updateTitle = async (e) => {
      setTitle(e.target.value, () => {})
    }

    React.useEffect(() => {
      setGameData({...gameData, title: title});

    }, [title]);

    React.useEffect(() => {
      setGameData({...gameData, publisher: publisher});
      
    }, [title]);

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
                <Input placeholder='' value={title} onChange={(e) => {updateTitle(e)}}/>
              </FormControl>
            </Box>
      
            <Divider size= '5000px'  color='primary.700' />

            <Box p={8}>
              <FormControl variant='floating' id='Game-publisher' isRequired isInvalid>
                <FormLabel>Game Publisher</FormLabel>
                <Input placeholder=' ' />
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
              <FormControl as='fieldset'>
                <FormLabel as='legend'>Game Platform</FormLabel>
                <CheckboxGroup defaultValue='Xbox'>
                  <HStack spacing='24px'>
                    {/* Use checkbox group and set checkboxgroup type to radio*/}
                    <Checkbox value='Xbox' >Xbox</Checkbox>
                    <Checkbox value='Playstation'>Playstation</Checkbox>
                    <Checkbox value='Nintendo'>Nintendo</Checkbox>
                  </HStack>
                  <FormHelperText>Select all that apply</FormHelperText>
                </CheckboxGroup>
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
              <Select placeholder='Game genre'>
                <option value='option1'>Action</option>
                <option value='option2'>Adventure</option>
                <option value='option2'>Action-Adventure</option>
                <option value='option3'>Puzzle</option>
                <option value='option4'>RPG</option>
                <option value='option2'>FPS</option>
                <option value='option2'>Racing</option>
                <option value='option5'>Simulation</option>
                <option value='option6'>Strategy</option>
                <option value='option7'>Sports</option>
                <option value='option8'>MMO</option>
                <option value='option9'>Open World</option>
                <option value='option10'>Shooter</option>
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