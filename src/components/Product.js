import React from 'react';
import {Box, Image,Heading,Text,Button,Stack, HStack} from "@chakra-ui/react";
import {useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';




function Product() {
    const {id} = useParams();
    const [obtenerDatos, setObtenerDatos] = useState([]);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then(({data})=>{
        setObtenerDatos(data);

        }) 
    }, [id]);


    return <div>
    <Box p={4} shadow="md">
        <Heading>{obtenerDatos.title}</Heading>
        </Box>
        <Box p={8} d="flex" alignItems="center">
            <Image w={48} src={obtenerDatos.image} />
            <Box ml={4}>
                <Stack spacing={4}>
                <Heading>Price: ${obtenerDatos.price}</Heading>
                <Text mt={3}>{obtenerDatos.description}</Text>
                <HStack>
                <Button w="xs" size="sm" colorScheme="blue">Buy Product</Button>
                <Button w="xs" size="sm" colorScheme="green">Share</Button>
                </HStack>
                </Stack>
                


            </Box>
        </Box>
        </div>

}
export default Product;
