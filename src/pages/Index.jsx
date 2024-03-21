import React from "react";
import { Box, Heading, Text, VStack, HStack, Avatar, Stat, StatLabel, StatNumber, Progress, Divider, Container, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";

const projects = [
  {
    name: "Project A",
    grant: 1000000,
    used: 500000,
    responsible: "John Doe",
  },
  {
    name: "Project B",
    grant: 750000,
    used: 250000,
    responsible: "Jane Smith",
  },
  // Add more projects...
];

const applications = [
  {
    name: "Project X",
    grant: 1200000,
    used: 0,
    responsible: "John Doe",
  },
  {
    name: "Project Y",
    grant: 800000,
    used: 0,
    responsible: "Jane Smith",
  },
  // Add more applications...
];

const people = [
  {
    name: "John Doe",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMTAxNDk5NXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Jane Smith",
    image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMTAxNDk5NXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // Add more people...
];

const Index = () => {
  const totalGrant = projects.reduce((sum, project) => sum + project.grant, 0);

  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center" color="teal.500">
        Research Council of Norway Grants
      </Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        <GridItem>
          <VStack align="stretch" spacing={6}>
            <Heading as="h2" size="xl" color="teal.400">
              Approved Projects
            </Heading>
            {projects.map((project, index) => (
              <Box key={index} p={4} borderWidth={1} borderRadius="md" boxShadow="md" bg={useColorModeValue("gray.100", "gray.700")}>
                <Heading as="h3" size="lg" mb={2}>
                  {project.name}
                </Heading>
                <Text>Grant: {project.grant.toLocaleString()} NOK</Text>
                <Text>Used: {project.used.toLocaleString()} NOK</Text>
                <Progress value={(project.used / project.grant) * 100} colorScheme="teal" size="sm" mt={2} />
                <Text mt={2}>Responsible: {project.responsible}</Text>
              </Box>
            ))}
          </VStack>
        </GridItem>

        <GridItem>
          <VStack align="stretch" spacing={6}>
            <Heading as="h2" size="xl" color="teal.400">
              Pending Applications
            </Heading>
            {applications.map((application, index) => (
              <Box key={index} p={4} borderWidth={1} borderRadius="md" boxShadow="md" bg={useColorModeValue("gray.100", "gray.700")}>
                <Heading as="h3" size="lg" mb={2}>
                  {application.name}
                </Heading>
                <Text>Grant: {application.grant.toLocaleString()} NOK</Text>
                <Text mt={2}>Responsible: {application.responsible}</Text>
              </Box>
            ))}
          </VStack>
        </GridItem>
      </Grid>

      <Divider my={8} />

      <Stat mb={8}>
        <StatLabel fontSize="xl">Total Grant Received</StatLabel>
        <StatNumber fontSize="4xl" color="teal.500">
          {totalGrant.toLocaleString()} NOK
        </StatNumber>
      </Stat>

      <Heading as="h2" size="xl" mb={4} color="teal.400">
        Project Responsibles
      </Heading>
      <HStack spacing={8} justifyContent="center">
        {people.map((person, index) => (
          <Box key={index} textAlign="center">
            <Avatar size="xl" src={person.image} mb={2} />
            <Text fontWeight="bold">{person.name}</Text>
          </Box>
        ))}
      </HStack>
    </Container>
  );
};

export default Index;
