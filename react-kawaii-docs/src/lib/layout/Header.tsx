import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Link, { LinkProps } from "next/link";

import ThemeToggle from "./ThemeToggle";

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href: LinkProps["href"];
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Components",
    href: "/components",
  },
  {
    label: "Get started",
    href: "/get-started",
  },
];

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        maxWidth="container.xl"
        margin="0 auto"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link href="/" passHref>
            <Text
              as="a"
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              <Box
                as="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="140px"
                height="22px"
                viewBox="0 0 140 22"
                fill={useColorModeValue("gray.700", "white")}
              >
                <path d="M10.09 4.406c-.26-.058-.548.086-.865.23-1.357.665-2.57 1.069-4.359 1.79-.52-1.039-1.125-.981-2.193-.808-.606.087-.982 1.01-1.213 2.338C.681 8.39.133 8.851.017 9.572c-.029.145-.029.838.058 1.213.058.433.49.779 1.126.923 0 2.713.23 4.647.346 6.87.087 1.299.058 2.251.52 2.54.23.115.577.058.98-.26 2.454-2.338 2.599-6.696 2.656-9.929 1.905-.866 3.666-2.31 4.56-3.983.434-.895.694-2.165-.172-2.54zm9.024 13.075c-.635.173-1.27.289-1.963.115-.721-.202-1.27-.692-1.645-1.327-.057-.116-.115-.26-.173-.375 1.588.086 3.377-.462 4.676-1.56 1.559-1.182 2.569-3.405 2.396-5.252-.058-.78-.26-1.415-.52-1.848 1.992-3.059-3.32-1.674-4.936-1.587-1.212.26-2.857.26-3.925.895-.144-.03-.289 0-.462.086-.75.404-1.097 1.3-1.414 2.05-.635 1.645-.953 3.146-.866 5.224.058 3.233 2.453 7.36 6.206 7.36 2.54.173 5.166-1.645 5.657-3.81.548-2.626-1.876-.26-3.03.029zm-4.416-7.1a10.7 10.7 0 001.992-.174c1.039-.202 1.905-.548 2.482-.865a3.646 3.646 0 01-.346.98c-1.01 2.108-3.262 2.916-4.07 3.147-.116-1.01-.058-2.05-.058-3.088zM35.88 8.793c0-.981 0-2.05-.663-2.857-.173-.26-.433-.404-.722-.52-.78-.26-1.76-.173-2.453-.086-2.136.288-4.272.577-6.408.808-1.039.144-1.847.317-2.05.808-.201 1.876 3.58 2.973 5.572 3.002.606.029 1.789-.145 2.309-.462-.058.26-.145 1.01-.203 1.27-1.24-.202-3.174.057-4.762.548-.606-.029-1.241-.029-1.587.635-.924.49-1.357 1.097-.462 1.617-.202 1.414-.058 3.261.288 4.733-.288 1.27-.375 2.223 1.444 2.684 1.79.549 4.675-.317 6.176-1.731.087.115.145.26.202.346.635.953 1.79 2.107 2.627 1.587.346-.404.029-1.327-.029-2.568-.144-2.627.722-6.927.722-9.814zm-7.07 7.678c-.232.058-.491.086-.751.115.115-.808.144-1.645.115-2.395 1.04 0 2.078-.116 2.915-.376 0 .837.087 1.646.231 2.425-.779.058-1.674.173-2.51.23zm19.387-4.041c-.49-.231-1.213.289-2.107.895-1.27.923-2.627 1.847-4.099 2.626a13 13 0 00.404-1.905c.173-1.039.145-2.569-.115-4.012a4.5 4.5 0 001.154-.144c1.674-.346 3.146-1.27 3.955-2.194.808-.923 1.01-1.79.663-2.164-.375-.405-1.154-.347-2.107-.231-.952.115-2.02.26-3.088.26-1.703.144-3.896-.549-5.022.808-.087.115-.404.75-.52 1.096-.057.549.145.982.52 1.357.173 2.742.288 6.754.058 9.525-.058 1.472-.174 2.828.865 2.569.491.26 1.213.346 2.107.202 2.223-.231 5.08-2.078 6.437-4.128.866-1.096 1.963-3.983.895-4.56zm11.451-6.927c-.289-.347-1.01-.26-1.905-.202-.462.086-1.184.086-1.992.086-.346-1.732-.721-2.193-2.251-2.02-.548.086-.981.895-1.328 2.136-1.558.173-2.857.606-3.088 1.645.029 1.241.317 1.79 1.991 2.02.116.03.26.058.404.058-.404 3.464-.404 9.438 2.916 11.517 1.24.721 2.597.663 3.579 0 .721-.52.78-1.097.577-1.27-.375-.26-1.328-.145-1.818-.52-.26-.144-.462-.346-.549-.548-.26-.376-.288-.664-.375-1.27-.202-2.194-.087-4.82.087-7.072.029-.433.029-.837.057-1.212 1.097-.318 2.136-.78 2.8-1.414.924-.78 1.184-1.588.895-1.934zm-.147 5.455c-.029.144-.029.837 0 1.212.26 2.742 8.313 1.588 8.313-.52 0-2.135-7.909-3.723-8.313-.692zm22.105 9.322c-.087-.259-.318-.432-.52-.663-.808-.953-.981-2.627-1.27-3.781-.317-1.328-.606-2.684-1.068-3.954a7.4 7.4 0 00-.52-1.069c.953-.577 1.79-1.27 2.339-2.049.693-.923 1.299-2.193.548-3.002-.086-.115-.692-.461-1.068-.606-.664-.26-1.327.116-2.251.635-.924.578-2.338 1.472-3.637 2.194-.058-3.637-.75-6.639-1.905-6.927-.173-.03-.866 0-1.24.086-1.3.722-1.444 5.11-1.329 9.583-.635.548-.721 1.126.03 1.5.115 3.176.317 6.235.288 7.852-.029 1.125.433 1.443 1.356.606 1.877-2.02 2.31-5.369 2.598-8.255.26-.029.52-.087.78-.173-.145 2.886 1.27 7.158 4.185 8.717 1.039.577 2.828.375 2.684-.693zM94.763 8.793c0-.981 0-2.05-.664-2.857-.173-.26-.433-.404-.721-.52-.78-.26-1.761-.173-2.454-.086-2.136.288-4.272.577-6.407.808-1.04.144-1.848.317-2.05.808-.202 1.876 3.58 2.973 5.57 3.002.607.029 1.79-.145 2.31-.462-.058.26-.144 1.01-.202 1.27-1.241-.202-3.175.057-4.763.548-.606-.029-1.24-.029-1.587.635-.924.49-1.357 1.097-.462 1.617-.202 1.414-.058 3.261.289 4.733-.289 1.27-.375 2.223 1.443 2.684 1.79.549 4.676-.317 6.177-1.731.086.115.144.26.202.346.635.953 1.79 2.107 2.626 1.587.347-.404.03-1.327-.028-2.568-.145-2.627.721-6.927.721-9.814zm-7.071 7.678c-.231.058-.491.086-.75.115.115-.808.143-1.645.115-2.395 1.039 0 2.078-.116 2.915-.376 0 .837.086 1.646.23 2.425-.779.058-1.673.173-2.51.23zm25.622-9.41c-.145-.606-.433-1.356-1.097-1.558a7.02 7.02 0 00-1.212-.058c-2.136.375-2.425 9.178-2.338 12.21-.78-1.3-1.011-3.09-1.443-4.504-.289-.952-.607-1.5-1.126-1.789v-.058c-.029-.923-.231-2.222-1.068-2.251-.231.029-.375.26-.577.577-.607 1.241-2.165 3.377-3.435 5.484-.116-3.261-.635-9.438-2.396-9.669-.144-.029-.866-.029-1.24.058-1.358.26-1.617 4.387-.78 8.341.26 1.328.606 2.627 1.097 3.897.375.981.808 1.991 1.5 2.828.607.722 1.53.664 2.252.116.317-.231.606-.52.895-.808a14.06 14.06 0 001.558-2.136c.491 1.039 1.212 1.962 2.165 2.598 1.299.923 3.262 1.154 4.358.288.433-.346.722-1.039.953-1.53 1.01-2.02 1.53-4.271 1.876-6.465.289-1.79.519-3.781.058-5.57zm13.61 1.732c0-.981 0-2.05-.664-2.857-.173-.26-.432-.404-.721-.52-.779-.26-1.761-.173-2.453-.086-2.136.288-4.272.577-6.408.808-1.039.144-1.847.317-2.049.808-.202 1.876 3.579 2.973 5.57 3.002.606.029 1.79-.145 2.309-.462-.057.26-.144 1.01-.202 1.27-1.241-.202-3.175.057-4.762.548-.606-.029-1.241-.029-1.588.635-.923.49-1.356 1.097-.462 1.617-.202 1.414-.057 3.261.289 4.733-.289 1.27-.375 2.223 1.443 2.684 1.79.549 4.676-.317 6.177-1.731.087.115.144.26.202.346.635.953 1.79 2.107 2.627 1.587.346-.404.028-1.327-.029-2.568-.145-2.627.721-6.927.721-9.814zm-7.071 7.678a5.84 5.84 0 01-.751.115c.116-.808.145-1.645.116-2.395 1.039 0 2.078-.116 2.915-.376 0 .837.087 1.646.231 2.425-.779.058-1.674.173-2.511.23zm11.508-10.795c-1.674-.058-2.05.52-2.483 2.655-.577 2.887-.837 8.11.722 10.882.491.923 1.27 2.165 2.165 1.934.491-.26.462-1.241.548-2.54.058-1.3.231-2.973.462-4.763.231-2.251.924-7.36-1.414-8.168zm-.52-.231c2.107-.202 3.377-4.445.347-4.445-.145 0-.837.029-1.213.058-2.713.317-1.241 4.618.866 4.387zm6.608.231c-1.674-.058-2.049.52-2.482 2.655-.577 2.887-.837 8.11.721 10.882.491.923 1.27 2.165 2.165 1.934.491-.26.462-1.241.549-2.54.057-1.3.231-2.973.461-4.763.231-2.251.924-7.36-1.414-8.168zm-.519-.231c2.107-.202 3.377-4.445.346-4.445-.144 0-.837.029-1.212.058-2.713.317-1.241 4.618.866 4.387z"></path>
              </Box>
            </Text>
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <ThemeToggle />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Header;

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link href={navItem.href ?? "#"} passHref>
            <ChakraLink
              p={2}
              fontSize={"m"}
              fontWeight={700}
              color={linkColor}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
            >
              {navItem.label}
            </ChakraLink>
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Link href={href ?? "#"} passHref>
        <Flex
          py={2}
          as="a"
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>
      </Link>
    </Stack>
  );
};
