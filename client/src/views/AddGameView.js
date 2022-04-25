import {
  Container,
  ChakraProvider,
  extendTheme,
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
  NumberDecrementStepper,
  Center,
} from '@chakra-ui/react'

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
}
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'white',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top'
            },
          },
        },
      },
    },
  },
})

const AddGameView = (props) => {

    return (
     
<div>
        <Center>
        <FormLabel as='legend'>Add Game Form</FormLabel>
        </Center>
        
 <center> <Box bg='White' w='75%' p={4} color='Black' borderColor='primary.700' borderWidth='3px' borderRadius='lg'>

<ChakraProvider theme={theme}>
  <Box p={8}>
    <FormControl variant='floating' id='Game-title' isRequired isInvalid>
       <Input placeholder=' ' />
       <FormLabel>Game title</FormLabel>
    </FormControl>
  </Box>
</ChakraProvider>
{/*
        <FormControl isRequired>
  <FormLabel htmlFor='game-title'>Game title</FormLabel>
  <Input id='game-title' placeholder='Game title' />
</FormControl> 
    */}


<Divider size= '5000px'  color='primary.700' />

<ChakraProvider theme={theme}>
  <Box p={8}>
    <FormControl variant='floating' id='Game-publisher' isRequired isInvalid>
       <Input placeholder=' ' />
       <FormLabel>Game Publisher</FormLabel>
    </FormControl>
  </Box>
</ChakraProvider>

<Divider size= '5000px'  color='primary.700' />


   {/* 
<FormControl isRequired>
  <FormLabel htmlFor='game-publisher'>Game Publisher</FormLabel>
  <Input id='game-publisher' placeholder='Game publisher' />
</FormControl>
*/}




<ChakraProvider theme={theme}>
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
</ChakraProvider>


<Divider size= '5000px'  color='primary.700' />


<ChakraProvider theme={theme}>
      <Box p={8}>
<FormControl as='fieldset'>
  <FormLabel as='legend'>Game Platform</FormLabel>
  <CheckboxGroup defaultValue='Xbox'>
    <HStack spacing='24px'>
      <Checkbox value='Xbox'>Xbox</Checkbox>
      <Checkbox value='Playstation'>Playstation</Checkbox>
      <Checkbox value='Nintendo'>Nintendo</Checkbox>
    </HStack>
    <FormHelperText>Select all that apply</FormHelperText>
  </CheckboxGroup>
</FormControl>
</Box>
    </ChakraProvider>



<Divider size= '5000px'  color='primary.700' />


<ChakraProvider theme={theme}>
      <Box p={8}>
      
<FormLabel as='legend' >Game description</FormLabel>
<Textarea placeholder='Enter game description here.' />
  </Box>
</ChakraProvider>



<Divider size= '5000px'  color='primary.700' />


<ChakraProvider theme={theme}>
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
</ChakraProvider>


<Divider size= '5000px'  color='primary.700' />


<center> 
  <Button
      mt={4}
      colorScheme='teal'
      isLoading={props.isSubmitting}
      type='submit'>
      Submit
  </Button>
</center>
  </Box>
</center>

      </div>
    );
  };
  
  export default AddGameView;