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

const AddGameView = (props) => {

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
                <Input placeholder='' />
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
                  type='submit'>
                  Submit
              </Button>
            </Center>

          </Box>
      </Center>
    </>
    );
  };
  
  export default AddGameView;