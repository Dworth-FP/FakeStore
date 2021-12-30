import {
  Box,
  Heading,
  Spacer,
  Tag,
  Image,
  SimpleGrid,
  Center,
  GridItem,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StoreItem = ({ title, price, image, category }) => {
  return (
    <Box p={4} borderRadius="lg" borderWidth="1px" h={"full"}>
      <SimpleGrid columns={1}>
        <GridItem mt={10}>
          <Center pb={20}>
            <Image
              boxSize="100px"
              objectFit="cover"
              src={image}
              w={150}
              h={"full"}
            />
          </Center>
        </GridItem>
        <GridItem>
          <Tag>{category}</Tag>
          <Heading size="md" mt={4} fontWeight={"regular"} noOfLines={2}>
            {title}
          </Heading>
          <Spacer />
          <Text
            size={"lg"}
            w={{ base: "full", md: 40 }}
            fontSize={{ base: 20, md: 24 }}
            d={{ base: "flex" }}
            fontWeight={"bold"}
            justifyContent={{ base: "center", md: "left" }}
            colorScheme={"white"}
            color="#3ABEBE"
            mt={4}
          >
            ${price}
          </Text>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

function Store() {
  const [filteredItems, setFilteredItems] = useState([]);
  const [storeItem, setStoreItem] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      setloading(false);
      setStoreItem(data);
      setFilteredItems(data);
    });
  }, []);
  return (
    <Box>
      <Center>
        <Text mt={6} fontFamily="sans-serif" fontWeight="bold" fontSize={40}>
          Bienvenidos a Global Store
        </Text>
      </Center>
      {loading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <Box p={2}>
          <Input
            onChange={(e) => {
              let f = storeItem.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
              );
              setFilteredItems(f);
            }}
            placeholder="Busqueda"
            mt={4}
          />
          <SimpleGrid mt={4} p={2} columns={4} spacing={3}>
            {filteredItems.map((item) => {
              return (
                <GridItem key={item.id}>
                  <Link
                    to={{
                      pathname: `/product/${item.id}`,
                    }}
                  >
                    <StoreItem {...item} />
                  </Link>
                </GridItem>
              );
            })}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
}
export default Store;
