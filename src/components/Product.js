import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Stack,
  HStack,
  Center,
  Tag,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const { id } = useParams();
  const [obtenerDatos, setObtenerDatos] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) => {
      setObtenerDatos(data);
    });
  }, [id]);

  return (
    <div className="container-fluid">
      <Box p={8} d="flex" alignItems="center">
        <Box ml={4}>
          <Heading textAlign="center" fontFamily="sans-serif" fontWeight="bold">
            {obtenerDatos.title}
          </Heading>
          <SimpleGrid spacing={4} columns={{ base: 1, md: 5 }}>
            <GridItem colSpan={2}>
              <Center>
                <Image w={48} src={obtenerDatos.image} />
              </Center>
            </GridItem>
            <GridItem colSpan={3}>
              <Stack spacing={4}>
                <Box>
                  <Heading>Price: ${obtenerDatos.price}</Heading>
                  <Tag textColor="white" bg="purple" mt={2}>
                    {obtenerDatos.category}
                  </Tag>
                </Box>
                <Text mt={3}>{obtenerDatos.description}</Text>
                <HStack>
                  <Button w="xs" size="sm" variant="outline" colorScheme="blue">
                    Buy Product
                  </Button>
                  <Button
                    w="xs"
                    size="sm"
                    variant="outline"
                    colorScheme="green"
                  >
                    Share
                  </Button>
                </HStack>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
}
export default Product;
