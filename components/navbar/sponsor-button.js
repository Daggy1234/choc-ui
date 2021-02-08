import React from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

const SponsorButton = props => (
  <Box
    display={{ base: 'none', md: 'flex' }}
    alignItems="center"
    as="a"
    aria-label="Sponsor Choc UI on Open Collective"
    href="https://patreon.com/anubra266"
    target="_blank"
    rel="noopener noreferrer"
    bg="gray.50"
    borderWidth="1px"
    borderColor="gray.200"
    px="1em"
    minH="36px"
    rounded="md"
    fontSize="sm"
    color="gray.800"
    outline="0"
    transition="all 0.3s"
    _hover={{
      bg: 'gray.100',
      borderColor: 'gray.300',
    }}
    _active={{
      borderColor: 'gray.200',
    }}
    _focus={{
      boxShadow: 'outline',
    }}
    {...props}
  >
    <Icon as={FaHeart} w="4" h="4" color="red.500" mr="2" />
    <Box as="strong" lineHeight="inherit" fontWeight="semibold">
      Sponsor
    </Box>
  </Box>
);

export default SponsorButton;
