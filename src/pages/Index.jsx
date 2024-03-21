import React from "react";
import { Box, Heading, Text, VStack, HStack, Avatar, Stat, StatLabel, StatNumber, Progress, Divider, Container, Grid, GridItem, useColorModeValue, Image, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

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

const grantsOverTime = [
  { quarter: "2020 Q1", grant: 500000 },
  { quarter: "2020 Q2", grant: 750000 },
  { quarter: "2020 Q3", grant: 1000000 },
  { quarter: "2020 Q4", grant: 1200000 },
  { quarter: "2021 Q1", grant: 1500000 },
  { quarter: "2021 Q2", grant: 1750000 },
  { quarter: "2021 Q3", grant: 2000000 },
  { quarter: "2021 Q4", grant: 2200000 },
  { quarter: "2022 Q1", grant: 2500000 },
  { quarter: "2022 Q2", grant: 2750000 },
  { quarter: "2022 Q3", grant: 3000000 },
  { quarter: "2022 Q4", grant: 3200000 },
  { quarter: "2023 Q1", grant: 3500000 },
  { quarter: "2023 Q2", grant: 3750000 },
  { quarter: "2023 Q3", grant: 4000000 },
  { quarter: "2023 Q4", grant: 4200000 },
  { quarter: "2024 Q1", grant: 4500000 },
];

const Index = () => {
  const totalGrant = projects.reduce((sum, project) => sum + project.grant, 0);

  return (
    <Container maxW="container.xl" py={8}>
      <HStack mb={8}>
        <Image src="https://www.forskningsradet.no/resources/2022.05/forskningsradet-logo-norsk-web.svg" alt="Research Council of Norway Logo" h={12} />
        <Heading as="h1" size="2xl" textAlign="center" color="purple.500">
          Avo Consulting - Research Council of Norway Grants
        </Heading>
      </HStack>

      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        <GridItem>
          <VStack align="stretch" spacing={6}>
            <Heading as="h2" size="xl" color="purple.400">
              Pending Applications
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
            <Heading as="h2" size="xl" color="purple.400">
              Approved Projects
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

      <Heading as="h2" size="xl" mb={4} color="purple.400">
        Grants Received Over Time
      </Heading>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Quarter</Th>
            <Th isNumeric>Grant (NOK)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {grantsOverTime.map((data, index) => (
            <Tr key={index}>
              <Td>{data.quarter}</Td>
              <Td isNumeric>{data.grant.toLocaleString()}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Stat mb={8}>
        <StatLabel fontSize="xl">Total Grant Received</StatLabel>
        <StatNumber fontSize="4xl" color="purple.500">
          {totalGrant.toLocaleString()} NOK
        </StatNumber>
      </Stat>

      <Heading as="h2" size="xl" mb={4} color="purple.400">
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
