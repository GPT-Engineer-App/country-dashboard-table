import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer, useColorModeValue } from "@chakra-ui/react";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  // ... add all other countries
];

const Index = () => {
  const headerBg = useColorModeValue("gray.200", "gray.600");

  return (
    <Box p={4}>
      <TableContainer>
        <Table variant="simple">
          <Thead bgColor={headerBg}>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {countries.map((country, index) => (
              <Tr key={index}>
                <Td>{index}</Td>
                <Td>{country}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Index;
