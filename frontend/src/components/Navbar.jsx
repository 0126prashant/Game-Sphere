import { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { navArr } from "./constant";
import image1 from "../utilites/img/Game.png";
import {
  Flex,
  IconButton,
  Image,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Link,
  Button,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import ToggleButton from "./Toggle";
import { useNavigate } from "react-router-dom";
import { loginality,logout } from "../redux/Authentication/action";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggleNav, setToggleNav] = useState(navArr);
  const navigate = useNavigate();
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  const handleAdminClick = () => {
    navigate("/adminlogin");
  };
  const { isLoading, isError, isAuth, token } = useSelector(
    (store) => store.authReducer,
    shallowEqual
  );

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [token]);

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding={4}
        bg="#f2ede4"
        color="grey.800"
        top={0}
        zIndex={999}
        boxShadow="rgba(221, 132, 132, 0.05) 0px 1px 2px 0px"
      >
        <Flex align="center" flex={1}>
          {/* Hamburger Icon */}
          <IconButton
            icon={<HamburgerIcon boxSize={6} />}
            aria-label="Open Menu"
            variant="ghost"
            color="black"
            onClick={handleMenuOpen}
          />
          <Drawer
            placement="left"
            onClose={handleMenuClose}
            isOpen={isMenuOpen}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader align="center">GameSphere</DrawerHeader>
              <ToggleButton setToggleNav={setToggleNav} />
              <DrawerBody>
                <Box maxH="xlg" overflowY="auto">
                  <VStack spacing={4} align="start">
                    {toggleNav.map((e) => (
                      <Link href="/products" key={e.title}>
                        <div
                          style={{
                            width: "250px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <img
                            style={{
                              aspectRatio: 5 / 7,
                              objectFit: "contain",
                              backgroundColor: "transparent",
                            }}
                            src={e.img}
                            alt="logo"
                          />
                          <div style={{ textAlign: "left", width: "80%" }}>
                            {e.title}
                          </div>
                          <div>
                            <img
                              height="20"
                              width="15px"
                              style={{ background: "transparent" }}
                              src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
                              alt="logo"
                            />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </VStack>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>

        <Flex align="center" justify="center" flex={1}>
          {/* Game Logo */}
          <Link href="/">
            <Box
              as="img"
              src={image1}
              borderRadius="full"
              width="80px"
              cursor="pointer"
            />
          </Link>
        </Flex>

        <Flex align="center" flex={1} justify="flex-end">
          {isAuth ? (
            <Box>
              <Link href="/">
                <Button
                  variant="solid"
                  colorScheme="orange"
                  color="white"
                  size="sm"
                  margin="10px"
                  padding="20px"
                  isLoading={isLoading}
                  onClick={handleLogout}
                >
                  LOG OUT
                </Button>
              </Link>
            </Box>
          ) : (
            <Box>
              <Link href="/user/login">
                <Button
                  variant="solid"
                  colorScheme="orange"
                  color="white"
                  size="sm"
                  margin="10px"
                  padding="20px"
                  isLoading={isLoading}
                >
                  SIGN IN
                </Button>
              </Link>
            </Box>
          )}
          <Box>
            <Button
              variant="solid"
              colorScheme="orange"
              color="white"
              size="sm"
              margin="10px"
              padding="20px"
              onClick={handleAdminClick}
            >
              Admin
            </Button>
          </Box>
          <Box>
            <Link href="/cart">
              <IconButton
                icon={<FaShoppingCart boxSize={6} />}
                aria-label="Open Menu"
                color="white"
                bg="orange"
              />
            </Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
