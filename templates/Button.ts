module.exports = {
  template: `export const Basic = () => {
  return (
    <Button onPress={() => console.log('hello world')}>Click Me</Button>
  );
};

export const Example = () => {
  return (
    <Button onPress={() => console.log('hello world')} colorScheme="<%= color %>" >Click Me</Button>
  );
};

export const Composition = () => {
  return (
    <Button
      size="md"
      height="48px"
      px="5"
      variant="outline"
      borderRadius="999"
      borderWidth="2"
      mx={{ base: 'auto', md: '0' }}
    >
      SHOP NOW
    </Button>
  );
};

export const Loading = () => {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      space={2}
      alignItems={{ base: 'center', md: 'flex-start' }}
    >
      <Button isLoading>Button</Button>
      <Button isLoading isLoadingText="Submitting">
        Button
      </Button>
      <Button isLoading spinnerPlacement="end" isLoadingText="Submitting">
        Button
      </Button>
      <Button
        isLoading
        _loading={{
          bg: 'amber.400:alpha.70',
          _text: { color: 'coolGray.700' },
        }}
        _spinner={{ color: 'white' }}
        isLoadingText="Submitting"
      >
        Button
      </Button>
      <Button isLoading isLoadingText="Submitting" variant="outline">
        Button
      </Button>
    </Stack>
  );
};

export const Sizes = () => {
  return (
    <VStack space={4} alignItems="center">
      {['xs', 'sm', 'md', 'lg'].map((size) => (
        <Button key={size} size={size}>
          BUTTON
        </Button>
      ))}
    </VStack>
  );
};`,
};
